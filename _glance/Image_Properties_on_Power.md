---
layout: page
author: Niraj Patel
title: Optimal Settings for Glance Images on Power Compute
dateAdded: Ocober 6, 2016
tags: [glance, ppc64el, images, power]
weight: 5
featured: FALSE
editor: Leslie Lundquist
---

When you're working with Glance images that you'll use to boot VMs on Power compute nodes, we recommend that you use the following properties for your images:

 * hw_scsi_model=virtio-scsi: add the virtio-scsi controller and get better performance and support for discard operation
 * architecture=ppc64
 * hw_disk_bus=scsi: connect every Cinder block device to that controller

These settings are needed to be able to attach Cinder volumes to running guest VM's.

Here's a screen shot showing what the Horizon interface looks like when you're updating metadata. You can update the matadata when you initially create an image, or later at any time.

[Update_image_metadata.png](https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/img/Glance_image_metadata.png)
