---
layout: page
title:  "How can I create an instance with more than one ephemeral disk?"
tags: [nova, boot, ephemeral]
dateAdded: June 1, 2016
author: Ying Tang
featured: false
weight: 4
---

If you want to create an instance with multiple ephemeral disks, you cannot use the Horizon portal. Instead, use the [compute command line client](http://docs.openstack.org/cli-reference/nova.html). 
For example, to create a VM with two ephemeral disks using the nova client tool, use the following command:

	$ nova boot <vm_name> --flavor <flavor_name> --image <image_name> --security-groups <security_group_name> --nic net-id=<network_ID>
	 --ephemeral size=size_GBs --ephemeral size=size_GB


