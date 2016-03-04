---
layout: page
title:  "Allocating and Attaching a Public (Floating) IP to an Instance"
dateAdded: June 16th, 2015
featured: true
weight: 4
tags: [openstack, fixed private IP address]
---

Floating IPs are just publicly routable IPs.  Customers can attach them to their instances, making them reachable from the outside world.

There are two basic parts to the floating IP process: **allocation** and **attachment**. You must attach because you don't want someone coming along and grabbing your IP.  Here's how to allocate and attach your new IP:

**Step 1.** From your **Horizon Dashboard**, under the **Project** section, go to **Instances**.  Next to your Instance, pull down the dropdown box on the right and choose **Associate Floating IP**:

![Associate Floating IP](https://help.bluebox.net/hc/en-us/article_attachments/202130148/Instances_-_OpenStack_Dashboard.png)

**Step 2.** In the **Floating IP** dialog box, if you don't have any IPs listed in the dropdown, click the plus (+) sign to allocate a new floating IP to your account:

![Floating IP Dialog Box] (https://help.bluebox.net/hc/en-us/article_attachments/202130158/Instances_-_OpenStack_Dashboard_2.png)

**Step 3.** Allocate the IP to your pool by clicking the **Allocate IP** button:

![Allocate Floating IP] (https://help.bluebox.net/hc/en-us/article_attachments/202053237/Instances_-_OpenStack_Dashboard_3.png)

**Step 4.** Observe your new floating IP in the dropdown.  You can now click the **Associate** button to attach it to your instance.

You also can create floating IPs from the [command line interface](http://docs.openstack.org/admin-guide-cloud/content/create_list_of_available_floating_ips.html).
