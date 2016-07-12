---
layout: page
title:  "Creating Instance Security"
tags: [cinder, encryption, volumes]
author: Dustin Lundquist
editor: Leslie Lundquist
dateAdded: July 12th, 2016
featured: false
weight: 4
---

Since users have root access to their instances and we want to restrict access to the host hypervisors: anytime information flows from the instance to the hypervisor it should be through secured interfaces. We should think very carefully before introducing any more avenues for information to move from the guest instance to the hypervisor. 

The existing interfaces:

1. Instance I/O devices -- virtualized network interfaces, virtualized disk controllers, etc -- these are provided by QEMU
2. Network services: metadata, DHCP, etc -- these are run by Neutron in network namespaces.
3. OpenStack APIs

These represent the security boundary between users the stack itself. If there is a security weakness in one of these, it could be used to gain access to the hypervisor and potentially to other tenants.
