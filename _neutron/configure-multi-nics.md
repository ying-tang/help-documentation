---
layout: page
title:  "Configuring multiple network interfaces for your own cloud images"
dateAdded: December 2, 2016
author: Ying Tang
featured: true
weight: 4
tags: [neutron, muliple NICs]
---

You don't have to configure the multiple network interfaces (NICs) normally, since the IBM Bluemix Private Cloud images are by default pre-configured with multiple NICs.

If you create your own image on IBM Bluemix Private Cloud, or bring an image from elsewhere, your image may not automatically bring up all network interfaces. In these occasions, if you want to create multiple private networks, you must configure additional network interface.

You have two options to configure addtional interfaces:

* Configure the addtional network interfaces (*eth1* as an example) before your build the image.

    1. Log on to your instance using SSH.
    2. Run the following commands:

             echo $'auto eth1\niface eth1 inet dhcp' | sudo tee /etc/network/  interfaces.d/eth1.cfg > /dev/null
             sudo ifup eth1
    3. Verify that eth1 is running:
        
             ifconfig eth1
    4. You should be able to see `UP BROADCAST RUNNING` in the returned output.
 
* You can also add post-creation scripts to configure the network interface every time before an instance starts. 

For information about creating additional networks, refer to [Creating Additional Networks in OpenStack Using the Horizon Panel](http://ibm-blue-box-help.github.io/help-documentation/horizon/creating-additional-networks-with-horizon/).

For information about uploading your own image, refer to [User's Guide to Cloud Images](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/userguides/Cloud_Images_Provided_by_IBM/).

