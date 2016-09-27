---
layout: page
title: Limitations of Neutron LBaaS v2
author: Blue Box Support
editor: Leslie Lundquist
tags: [neutron, lbaas, limitations, haproxy, maxconn, security group]
dateAdded: September 26, 2016
---


This document briefly covers the limitations of Neutron LBaaS v2. For more information, please refer to the
IBM Blue Box Cloud  3.0.0 Release Notes.

1) Security Group Configuration is missing from Neutron-LBaaSv2 in Horizon, and new Load Balancers (LBs) are assigned to the default security group which is usually locked down. Therefore, customers need to create their own LBaaS-specific security group + rules and assign it to the LB port. https://support.bluebox.net/tickets/FDA116#post-4952067

2) Heat configuration of Neutron-LBaaSv2 security group rules is broken. (Heat doesn't allow a security group to be associated with a load balancer) https://support.bluebox.net/tickets/FDA116#post-4951390

3) No TLS termination support yet.

4) No granular configuration of global HAproxy configuration variables such as global `maxconn`, and so forth. If customers want that, they should use HAproxy on the instances themselves, and skip Neutron-LBaaSv2.

5) How do I build and test a Neutron Load Balancer via the command line? See http://docs.openstack.org/liberty/networking-guide/adv-config-lbaas.html Building an LBaaS v2 load balancer
