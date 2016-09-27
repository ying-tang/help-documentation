---
layout: page
title: Limitations of Neutron LBaaS v2
author: Blue Box Support
editor: Leslie Lundquist
tags: [neutron, lbaas, limitations, haproxy, maxconn, security group]
dateAdded: September 26, 2016
---


This document briefly covers some specific limitations of Neutron LBaaS v2. For more information, please refer to the
IBM Blue Box Cloud [3.0.0 Release Notes](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/Customer_3.0.0_Release_Notes/), particularly the secion on **Known Limitations**.

1) Security Group Configuration is missing from Neutron-LBaaSv2 in Horizon, and new Load Balancers (LBs) are assigned to the default security group, which usually is locked down. Therefore, customers need to create their own LBaaS-specific security group + rules and assign it to the LB port. https://support.bluebox.net/tickets/FDA116#post-4952067

2) Heat configuration of Neutron-LBaaSv2 security group rules is not available. (Heat doesn't allow a security group to be associated with a Load Balancer or port.) There is a blueprint for adding this feature, but currently it has not been accepted and there is no timeline for implementation. You can subscribe to the blueprint if you want to track future developments: https://blueprints.launchpad.net/heat/+spec/add-security-group-to-port

3) No TLS termination support yet.

4) No granular configuration of global HAproxy configuration variables such as global `maxconn`, and so forth. If customers want that, they should use HAproxy on the instances themselves, and skip Neutron-LBaaSv2.

5) How do I build and test a Neutron Load Balancer via the command line? See http://docs.openstack.org/liberty/networking-guide/adv-config-lbaas.html Building an LBaaS v2 load balancer
