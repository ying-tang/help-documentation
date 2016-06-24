---
layout: page
title: Why Can’t I Delete A Security Group?
tags:[troubleshooting, neutron, security groups]
featured: false
weight: 5
author: Leslie Lundquist
dateAdded: June 24, 2016
---

### Q. Why can't I delete a security group?

A. It might be in use by a port. You'll need to delete the port. If the port is in use by, for example, a load balancer, you'll need to delete the load balancer before deleting the group.

Here are some example cleanup commands for your LBaaS:

```
neutron lbaas-pool-list | grep True | awk '{print $2}' |xargs -i neutron 
lbaas-pool-delete {} 
neutron lbaas-listener-list | grep True | awk '{print $2}' |xargs -i 
neutron lbaas-listener-delete {} 
neutron lbaas-loadbalancer-list | grep ACTIVE | awk '{print $2}' |xargs -i 
neutron lbaas-loadbalancer-delete {} 
```
