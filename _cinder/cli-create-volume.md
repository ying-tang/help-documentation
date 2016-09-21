---
layout: page
title:  "Creating a volume with the command line"
tags: [ceph, volume]
dateAdded: September 21st, 2016
author: Ying Tang
featured: false
weight: 4
---

# Creating a volume with the command line

To create a volume, use the following syntax:

     cinder create --display-name <name> --volume-type <type> <size>
     
* `<name>`: The name of the volume.
* `<type>`: `CEPH_HYBRID` or `CEPH_SSD`. You can use the `cinder type-list` command to get a list of available volume types. 
* `<size>`: The size of the volume in gibibytes (GiB).

The following figure describes the output of this command. 

![Create a volume with command line]({{site.baseurl}}/img/cli-create-volume.jpg)

You can also use the `cinder list` command to get a list of your existing volumes. 

