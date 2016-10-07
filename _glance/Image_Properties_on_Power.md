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

When you're working with Glance images on Power compute nodes, we recommend that use the following properties for your images:
	•	hw_scsi_model=virtio-scsi: add the virtio-scsi controller and get better performance and support for discard operation
	•	hw_disk_bus=scsi: connect every Cinder block device to that controller
	•	hw_qemu_guest_agent=yes: enable the QEMU guest agent
	•	os_require_quiesce=yes: send fs-freeze/thaw calls through the QEMU guest agent

These settings are needed to be able to attach Cinder volumes to running guest VM's.
