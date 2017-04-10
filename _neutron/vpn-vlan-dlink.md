---
layout: Page
title: "VPN, VLAN, and Direct Link"
featured: FALSE
weight: 5
tags: [neutron, VLAN, Direct Link]
date: April 10, 2017
author: Ying Tang
---


## Overview

### VPN

VPN is a secured tunnel between two networks. Typical VPN use cases with IBM Bluemix Private Cloud are the following: 

1. [Connect with OpenVPN to your cloud instance](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/connect-to-openvpn-server/)
2. [Create your own network](http://ibm-blue-box-help.github.io/help-documentation/neutron/creating-virtual-networks/)

### VLAN

You may want to create a new network with one or more subnets to your cloud instance. This new network is called a VLAN. 

If you have cloud instances on different IBM Datacenters, and want to enable VLAN connectivity between these cloud instances, a snapping will be needed between these VLANs.

### Direct Link
**Direct Link** is a SoftLayer feature that lets you connect to the SoftLayer private network backbone or network, bypassing the public Internet to connect to your Dedicated cloud(s). It is available in 1Gbps and 10Gbps increments. 

Direct Link can be utilized to create a hybrid cloud, if you want to link your Local cloud to a Dedicated cloud that is running in a SoftLayer data center. More information about Direct Link is available on the [SoftLayer website](http://www.softlayer.com/direct-link).

The most common use of Direct Link is to bring your own IP address to your IBM Bluemix Private Cloud instance. 



## Requesting VLAN
To request a VLAN, prepare the following information and open a support ticket with that included:

* Private or Public Network: Choose either private or public.
* Description of VLAN Use / hosts contained within VLAN

1. Customer Information: Customer name, company name, address, phone number, time zone, job title, and optionally, Customer ID on SoftLayer.

2. Number of IPs you are requesting.

3. Number of new IPs that will be used within 30 days of allocation.

4. Total number of new IPs that will be used within the next 6 months.

5. How should the additional IPs be delivered?

6. Brief description of your need for additional IPs.

7. Optionally, specific the neutron network name.


## Requesting Direct Link

To request a Direct Link, prepare the following information and open a support ticket with that included:

1. Which SoftLayer Datacenter to connect.