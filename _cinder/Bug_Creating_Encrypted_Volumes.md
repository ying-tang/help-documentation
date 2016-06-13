---
layout: page
title:  "Creating Encrypted Volumes with Cinder is Not Supported"
tags: [cinder, encryption, volumes]
dateAdded: June 13th, 2016
featured: false
weight: 4
---

### Creating Encrypted Volumes with Cinder is Not Currently Supported  

Try to create an encrypted Cinder volume with Ceph (for example) and the Cinder command line client will happily report that it has done so, but the volume will fail to attach to a virtual machine.

{% highlight bash %}

Prompt> cinder type-create LUKS

Prompt> cinder encryption-type-create --cipher aes-xts-plain64 \
--key_size 512 \
--control_location front-end \
LUKS \
nova.volume.encryptors.luks.LuksEncryptor \

{% endhighlight %}


This happens even though creating encrypted volumes with Ceph is not supported - see https://review.openstack.org/#/c/239798/

This is a known bug, tracked at: https://bugs.launchpad.net/cinder/+bug/1505113
