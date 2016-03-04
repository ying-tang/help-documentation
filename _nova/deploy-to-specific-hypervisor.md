---
layout: page
title:  "How to deploy an instance to a specific hypervisor node"
tags: [nova, deploy, hypervisor]
dateAdded: May 15th, 2015
author: Eric French
featured: false
weight: 4
---

You may have the need to specify which host an instance is deployed to. While this functionality is not available in Horizon, the API lets you select a specific compute node for instance deployment.

This article assumes you have the OpenStack API configured on your local machine. For assistance, please see _Getting Started with the OpenStack API_

**1. Determine which compute hypervisors are available in your cluster**

{% highlight bash %}
$ nova service-list | grep nova-compute
|41 | nova-compute  | ds1111 | nova    | enabled | up | 2015-05-15T17:14:56.000000 | -
|55 | nova-compute  | ds1112 | nova    | enabled | up | 2015-05-15T17:14:56.000000 | -
|70 | nova-compute  | ds1113 | nova    | enabled | up | 2015-05-15T17:14:56.000000 | -
{% endhighlight %}

**2. Deploy to the desired compute hypervisor**

Use the `--availability-zone` flag to specify which hypervisor you would like to generate your instance on. In this example, we would like to deploy our new instance to `ds1111`:

{% highlight bash %}
$ nova boot --flavor 'm1.normal' --image 1e74ae39-8413-426e-9e3a-dcc5dd0704a3 --key-name your_key
--security-groups default --availability-zone nova:ds1111 instance_1
{% endhighlight %}
