---
layout: page
title: "Alternative Method For Block Storage Volume Encryption"
featured: false
weight: 2
tags: [Block Storage, Encryption]
author: Ruben Orduz
editor:
dateAdded:
---
Alternative Block Storage Volume Encryption (for Ubuntu guest OS)

There are situations and workloads that require a higher level of data privacy and security, whether on the cloud or on premises. As of this writing OpenStack compute (Nova) [does not](http://ibm-blue-box-help.github.io/help-documentation/cinder/Bug_Creating_Encrypted_Volumes/) support attachment of LUKS volumes (which is required for OpenStack-managed volume-level encryption). In this article we will focus on the use case of data encryption in the cloud and more specifically self-serviced volume encryption in Linux.

Before we begin there are some _very important_ caveats the reader should be aware of:
*	If an encrypted volume becomes corrupted or otherwise unstable, there's a high risk of data loss.
*	There's a performance "tax" to be aware of, although it might be negligible in many cases.
*	Once encrypted, things like snapshots or backups might not have predictable behavior.
*	IBM Blue Box does not provide support on encrypted volumes and/or file systems.
* The approach explained herein is for new/blank volumes. Do *not* try these commands on volumes with existing data, it'll be erased and lost forever.

This article also assumes the following:
* Ubuntu 14.04 or newer
* User can create and attach block storage volumes in their cloud
* User has administrator privileges in the virtual machine we're going to use for this procedure.

1. The first step is to provision an instance (can be small) with Ubuntu 14.04 or newer, if you haven't done so already, via the API or Horizon dashboard.

2. Second step is to create a block-storage volume. Again, this can be accomplished via CLI or Horizon dashbaord. No special parameters, just select a descriptive name, desired capacity and make sure it's accessible to and in the same availability zone of the VM we just spun up in the step above.

3. After the volume has been successfully provisioned, attach to the VM we created in step 1.

4. Log into the VM we created in step 1.

5. Let's do some basic house-keeping before we get started to make sure we have the latest bug-fixes and software lists:

```
sudo aptitude update
sudo aptitude safe-upgrade
```

6. Let's install the package that will help us with the encryption/decryption:

```
sudo install cryptsetup
```

7. Let's check the volume we created in step 2 has been properly attached:

```
sudo fdisk -l
```

You should see an output similar to this:

```
Disk /dev/vdb: 3221 MB, 3221225472 bytes
16 heads, 63 sectors/track, 6241 cylinders, total 6291456 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00000000

Disk /dev/vdb doesn't contain a valid partition table
```

Notice `/dev/vdb` could be different and capacity shown _should_ reflect the capacity requested in step 2.

The last line of the output is completely expected (we have no formatted, partitioned or mounted the device).

The next couple of steps will take a considerable amount of time (maybe hours depending on volume size), so you might want to run these commands through `nohup` or similar utility to make sure it completes even if the shell session goes down.

8. Before we encrypt/lock the volume, we need to write random data to the volume. There are couple of ways we could accomplish this, we're going to err on the side of safety and use the most robust approach:

```
nohup sudo shred -v --random-source=/dev/urandom --iterations=2 /dev/vdb
```
You could increase or decrease the number of iterations, but bear in mind adding iterations will invariably result in much longer processing times.

We can check if the command completed successfully by checking `nohup.out` file

```
tail -5 nohup.out
```
The output should look something along the lines of:

```
shred: /dev/vdb: pass 2/2 (random)...2.6GiB/3.0GiB 86%
shred: /dev/vdb: pass 2/2 (random)...2.7GiB/3.0GiB 90%
shred: /dev/vdb: pass 2/2 (random)...2.8GiB/3.0GiB 93%
shred: /dev/vdb: pass 2/2 (random)...2.9GiB/3.0GiB 96%
shred: /dev/vdb: pass 2/2 (random)...3.0GiB/3.0GiB 100%
```

9. Now that we have wiped/randomized the volume, we can encrypt it:

```
sudo cryptsetup --verbose --key-size 512 --hash sha512 --iter-time 2000 --use-random luksFormat /dev/vdb
```
This will bring up the following prompt and data erasure warning:

```
WARNING!
========
This will overwrite data on /dev/vdb irrevocably.

Are you sure? (Type uppercase yes):
```
After typing 'YES' it will the prompt for a passphrase. You will need it to be able to use/mount the volume and there's no way to recover it if you lose it. So make sure you save it somewhere safe and protected.

```
Enter passphrase:
Verify passphrase:
System is out of entropy while generating volume key.
Please move mouse or type some text in another window to gather some random events.
```
Depending on volume size this will take a while. After it's done you should see something like this on your terminal:

```
Generating key (93% done).
Generating key (93% done).
Generating key (93% done).
Generating key (100% done).
Command successful.
```

The two preceding steps will be only performed once on every volume you wish to encrypt. Next we will use `cryptsetup` to partition and format the volume so that we can read/write to it.

10. Let's "unlock" the volume just encrypted:

```
cryptsetup open --type luks /dev/vdb data
```
You will be prompted for the passphrase provided in step 9.

11. We then need to write a file system to the device mapping cryptsetup created in the step above:

```
mkfs.ext4 /dev/mapper/data
```

12. Let's mount the device:

```
mount -t ext4 /dev/mapper/data /mnt
```

13. Sanity check to make sure we can read and write to the mounted volume

```
sudo chmod 0667 /mnt
echo "1,2,3. Test" > /mnt/test.txt
cat /mnt/test.txt
```

If all steps are successful up to this it means we're good to go. You can now read and write to the encrypted volume.

14. When you're done using it the volume, you need two steps: unmount and, more importantly, close the encryption mapping.

```
sudo umount /mnt
sudo cryptsetup close data
```

From here on you can detach/attach the volume to other Ubuntu VMs (providing they have cryptsetup installed). However, you only need to open the volume (step 10), mount the volume (step 12) and then as needed unmount and close (step 14).
