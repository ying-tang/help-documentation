---
layout: page
title:  "Importing a VHD image that uses linux volume management for its root directory"
tags: [openstack, import VHD image, linux]
author: Jason Kennedy
date: December 11th, 2015
featured: true
---

To import a VHD image, three steps are required:

1.**Get Your VHD Image into Blue Box.** To get the image into **Blue Box** you have 2 options.

You can use the OpenStack API command line tools and run a `glance image-create` command pointing to the VHD file:

{% highlight bash %}
$ glance image-create --name "xen-template-disk1" --is-
public false --disk-format vhd --container-format bare --
file ./xen-template-disk1.vhd --progress
{% endhighlight %}

or you can log in to the Horizon console and navigate to **Project >> Images >> Create Image** to upload the image.

![Create an Image](http://help.bluebox.net/hc/en-us/article_attachments/204466488/Screen_Shot_2015-12-11_at_1.30.29_PM.png)

2.**Create a VM flavor specific to the VHD image.** You can do so by using the `nova flavor-create` command, as shown, which in this example will create a flavor for a 8GB Memory, 65GB root partition and 2vCPU virtual machine.

{% highlight bash %}
$ nova flavor-create ML_LVM_FLVR auto 8192 65 2
{% endhighlight %}

3.**Launch the VM, based on the xen-template-disk1 VHD image.** To do so, navigate to **Project >> Compute >> Instances** and select **Launch VM** using the credentials shown in the screenshot.

![Screenshot of Launch VM] (http://help.bluebox.net/hc/en-us/article_attachments/204466538/Screen_Shot_2015-12-11_at_1.31.52_PM.png)


Afterward, you should observe that the VM has successfully launched, and that it is shown in “Running” status in the Horizon console.

![Running status](http://help.bluebox.net/hc/en-us/article_attachments/204476807/Screen_Shot_2015-12-11_at_1.34.29_PM.png)


You can verify success by clicking the instance name and navigating to the console, where you will see the boot sequence for RHEL and ultimately the login prompt for the OS.

![Console view](http://help.bluebox.net/hc/en-us/article_attachments/204466588/Screen_Shot_2015-12-11_at_1.35.20_PM.png)
