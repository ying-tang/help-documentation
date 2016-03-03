---
layout: page
title:  "Frequently Asked Questions"
featured: true
weight: 8
tags: [getting started, faq]
author: Eric French
time: April 9th, 2015
---

##How can I resize an existing instance?

Although the `Resize Instance` option does appear in **Horizon**, this functionality currently is not supported. If you need to extend an instance's size, the recommended path is to take a snapshot of the instance and redeploy that snapshot into a new, larger flavor.



##How can I start up an instance on a specific host?
This functionality is supported through the **OpenStack API**.  Please see [_How to deploy an instance to a specific hypervisor node_](https://github.blueboxgrid.com/documentation/bluebox-docs/blob/master/Deploy_to_specific_hypervisor.md) for more details.



##I have a new cloud, and there are already two projects in place. What are these?

The `admin` and `service` projects are created to support the underlying operation of your **IBM Blue Box Cloud**. These projects should be left in place. Do not modify or deploy  them.
