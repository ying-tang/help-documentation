---
layout: page
title: Image Release Notes 20160607
featured: false
weight: 13
tags: [userguides, release, images, security, kernel, patch]
dateAdded: June 10th, 2016
author: Yang Zhang
editor: Leslie Lundquist, Ying Tang
---

# **IBM Blue Box Cloud Images**

# Image Release Notes 20160607 (DRAFT)

#### Release version: 20160607

# **Summary of Image Updates in the Latest Release**

Content of this release notes is mainly about the system updates and new features applied on cloud images of Release 20160607 in comparison with the images of Release 20160301 published in March 2016.

All the cloud images were updated based on the latest official isos.

All the system updates and security patches applied on cloud images were officially released as of June 7, 2016.

# **Updates of Linux images**

Kernel versions of all Linux images are same with the original kernel versions from the official isos.

heat-cfn tools are supported in all Linux images.

### **CentOS 6.8 x86_64**

Release version upgraded from **6.7** to **6.8**

Kernel version upgraded from **2.6.32-573.18.1** to **2.6.32-642.1.1**

python2.6 from original iso was upgraded to python2.7 to support heat-cfn tools.

Check [Package List](../image_patch_list_20160607/centos-6.8.txt) to see a full list of all upgraded/installed packages.

### **CentOS 7.2 x86_64**

Kernel version upgraded from **3.10.0-327.10.1** to **3.10.0-327.18.2**

Check [Package List](../image_patch_list_20160607/centos-7.2.txt) to see a full list of all upgraded/installed packages.

### **Ubuntu Server 12.04 LTS x86_64**

Kernel version upgraded from **3.13.0-81.125** to **3.13.0-86.131**

Check [Package List](../image_patch_list_20160607/ubuntu-12.04.txt) to see a full list of all upgraded/installed packages.

### **Ubuntu Server 14.04 LTS x86_64**

Kernel version upgraded from **4.2.0-32.37** to **4.2.0-36.42**

Check [Package List](../image_patch_list_20160607/ubuntu-14.04.txt) to see a full list of all upgraded/installed packages.


# **Updates of Windows images**

### **Windows Server 2008 R2 SP1 Datacenter**

25 updates applied

Check [System Update List](../image_patch_list_20160607/win-2008-r2-datacenter.txt) to see a full list of all applied system updates.

### **Windows Server 2008 R2 SP1 Enterprise**

26 updates applied

Check [System Update List](../image_patch_list_20160607/win-2008-r2-enterprise.txt) to see a full list of all applied system updates.

### **Windows Server 2008 R2 SP1 Standard**

25 updates applied

Check [System Update List](../image_patch_list_20160607/win-2008-r2-standard.txt) to see a full list of all applied system updates.

### **Windows Server 2012 R2 Datacenter**

75 updates applied

Check [System Update List](../image_patch_list_20160607/win-2012r2-datacenter.txt) to see a full list of all applied system updates.

### **Windows Server 2012 R2 Standard**

75 updates applied

Check [System Update List](../image_patch_list_20160607/win-2012r2-standard.txt) to see a full list of all applied system updates.

### **Tips:**

To check more details of a Windows system update, please access the URL for a specific update as follows:

```
https://support.microsoft.com/en-us/kb/<update_number>
```

Please replace the `<update_number>` in above URL with the **digits** of the actual system update number.

For example, if the system update number is **KB3118401**, please access the following URL:

```
https://support.microsoft.com/en-us/kb/3118401
```

### **Known limitation of Windows images:**

The maximum Ram size to provision Windows VM instances is **64GB**. Windows VM instances provisioned with Ram size larger than 64GB may fail to boot up, this is caused by the limited free disk space in the image to provision large pagefile.sys file for virsual memory in Windows system. While there is a workaround solution available, to get a Windows VM instance with more than 64GB Ram, please firstly provision it with 64GB or less Ram size, and then do a **resize** for that VM instance with another flavor which has a Ram size larger than 64GB.

