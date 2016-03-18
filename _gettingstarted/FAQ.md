---
layout: page
title:  "Frequently Asked Questions"
featured: true
weight: 8
tags: [getting started, faq, resize, instance]
author: Eric French
dateAdded: April 9th, 2015
updated: March 18, 2016
editor: Leslie Lundquist
---

##How can I resize an existing instance?

Although the `Resize Instance` option does appear in **Horizon**, this functionality currently is not supported. If you need to extend an instance's size, the recommended path is to take a snapshot of the instance and redeploy that snapshot into a new, larger flavor.



##How can I start up an instance on a specific host?
This functionality is supported through the **OpenStack API**.  Please see [_How to deploy an instance to a specific hypervisor node_](https://github.blueboxgrid.com/documentation/bluebox-docs/blob/master/Deploy_to_specific_hypervisor.md) for more details.



##I have a new cloud, and there are already two projects in place. What are these?

The `admin` and `service` projects are created to support the underlying operation of your **IBM Blue Box Cloud**. These projects should be left in place. Do not modify or deploy  them.


##Which ports/URLs etc are publicly accessible on my Blue Box Cloud, and for what purpose?

The ports that are open through the firewall to your IBM Blue Box Cloud are:

80 - Horizon (OpenStack Web Portal)

443 - Horizon (OpenStack Web Portal)

5000 - Keystone (OpenStack Authentication API)

6080 - Nova-novnc (OpenStack VNC Console)

8000 - Heat (OpenStack CloudFormation API)

8004 - Heat (OpenStack Orchestration API)

8774 - Nova (OpenStack Compute API)

8776 - Cinder (OpenStack Block Storage API)

9292 - Glance (OpenStack Image API)

9696 - Neutron (OpenStack Network API)

35357 - Keystone-admin (OpenStack Authentication Admin API)

Three additional ports are enabled if you've requested Swift (OpenStack Object Storage) to be configured on your cluster: 6000, 6001, 6002

All of these ports are available via your custom Horizon URL.
