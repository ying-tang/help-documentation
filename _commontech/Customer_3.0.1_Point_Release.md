---
layout: page
author: Leslie Lundquist
dateAdded: August 15, 2016
tags: [release notes, 3.0.1]
---


### IBM Blue Box Cloud Customer
### Point Release 3.0.1
#### August 15, 2016


The official version of these Release Notes is maintained on the customer help site: http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/Customer_3.0.1_Point_Release/

#### Release Notes

This 3.0.1 Point Release is created primarily to fix some bugs that were affecting a few of our customers. Here are the changes that may affect your customer experience:

**Customer-Visible Issues and Features:**

 * The command `neutron net-list` no longer lists subnet information for the external network. Starting in this release, you can use the command `neutron net-ip-availability-show external` to get that information.

 * Keystone now allows users to update their own properties in Horizon. Additional workaround: User also can change password with **Settings -> Change Password**.

 * Previously, customers have been unable to set quotas in **Horizon**. This is a known upstream limitation, already given in 3.0.0 Release Notes, that we are now overriding to resolve in our deployments. 

 * We’ve adjusted our Ceph alerting thresholds to give alerts at 70% usage, so there is plenty of time to take action before 95% is reached and Ceph becomes unavailable.

 *  Customers currently are unable to update users through the **Edit** button. Workaround: [Will be] Documented in these release notes.
