---
layout: page 
title: "Bluemix: Invalid Availability Zone Error" 
featured: false 
weight: 2 
tags: [Openstack, troubleshooting, availability zone, bluemix] 
author: Blue Box Support Team
editor: Leslie Lundquist
dateAdded: May 11, 2016 
---

### Invalid Availability Zone Error in OpenStack API

I'm trying to deploy a VM using Bluemix and am getting an error: OpenStack API Bad Request (`Invalid input received: Availability zone 'compute_enterprise' is invalid`)

This error will go away in the next few months after we upgrade you to OpenStack Mitaka, but until that happens, we recommend updating your microbosh YML file to ignore the volume availability zone, via the `ignore_server_availability_zone` command.
