---
layout: page
author: Leslie Lundquist
dateAdded: August 15, 2016
tags: [release notes, 3.0.1]
---


### IBM Blue Box Cloud Customer
### Point Release 3.0.1
#### August 15, 2016


#### Release Notes

This 3.0.1 Point Release is created primarily to fix some bugs that were affecting a few of our customers. Here are the changes that may affect your customer experience:

 * The command `neutron net-list` no longer lists subnet information for the external network. Starting in this release, you can use the command `neutron net-ip-availability-show external` to get that information.

 * Keystone now allows users to update their own properties in Horizon. Additional workaround: User also can change password with **Settings -> Change Password**.

 * Previously, customers have been unable to set quotas in **Horizon**. This is a known upstream limitation, already given in 3.0.0 Release Notes, that we are now overriding to resolve in our deployments. 

 * We’ll be giving earlier notifications to customers who are reaching their capacity in Ceph. We will warn you via ticket if your overall cluster capacity reaches or exceeds 75%, and if any single storage area exceeds 70%.

 *  Customers currently are unable to update users through the **Edit** button. Workaround: [Will be] Documented in these release notes.
