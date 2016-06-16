---
layout: page
title: "Introduction to Load Balancer as a Service (LBaaS)"
featured: false
weight: 6
tags: [neutron, lbaas]
author: Leslie Lundquist
dateAdded: June 16, 2016
---

The OpenStack Networking Service, Neutron, includes a Load Balancer as a Service (LBaaS). This service lets you configure a load balancer that runs outside of your instances and directs traffic to your instances. A common use case occurs when you want to use multiple instances to serve web pages and you also want to meet high performance or availability goals. OpenStack LBaaS v2 in Mitaka allows for multiple ports (called _listeners_) per load balancer.

The following links give a lot more information about the LBaaS v2 feature in OpenStack Mitaka, including installation and configuration instuctions:
 
http://docs.openstack.org/developer/openstack-ansible/install-guide/configure-lbaas.html
http://docs.openstack.org/mitaka/networking-guide/adv-config-lbaas.html

**Specs:**
https://specs.openstack.org/openstack/neutron-specs/specs/kilo/lbaas-api-and-objmodel-improvement.html
https://specs.openstack.org/openstack/heat-specs/specs/mitaka/lbaasv2-support.html

**API:**
http://developer.openstack.org/api-ref-networking-v2-ext.html#lbaas-v2.0

The reference implementation of LBaas, Octavia, also provides some helpful documentation.

http://docs.octavia.io/review/master/index.html#
