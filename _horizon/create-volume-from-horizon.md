---
layout: page
title:  "Creating a volume from the Horizon dashboard"
tags: [horizon, volume, Ceph]
dateAdded: Sep 20, 2016
author: Ying Tang
featured: false
weight: 4
---

## Creating a volume from the Horizon dashboard

### Steps
1. Log in to the Horizon dashboard.
2. Under the **Project** topic, expand **Compute** and click **Volumes**. If you have existing volumes, you can view a list of your volumes with their details, such as name, description, size, and status. 
3. Click **Create Volume** on the upper right portion of the Horizon dashboard. The **Create Volume** dialog is displayed.

![Create a volume]({{site.baseurl}}/img/create_volume.png)

Provide the following details about the volume. 

* Volume Name: Type the name of your volume.
* Description: Type a description of your volume.
* Volume Source: You can choose an empty volume, or use an existing image as the source.
* Type: `Ceph_SSD` or `Ceph_Hybrid`. 
* Size (GiB): Select the size of the volume, for example, 1. 
* Availability Zone: Choose the availablity zone, for example, `nova`. 

Click **Create Volume** when complete. 

