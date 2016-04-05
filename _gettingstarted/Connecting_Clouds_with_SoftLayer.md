---
layout: page
title: Utilizing SoftLayer's Private Network with Multiple Blue Box Environments
featured: false
weight: 13
tags: [SoftLayer, network, private network, gettingstarted]
dateAdded: March 22nd, 2016
author: Shaival Choski
editor: Leslie Lundquist, Jesse Proudman
---

# Utilizing SoftLayer's Private Network with Multiple Blue Box Environments

### Overview: 

This document explains how to set up network connectivity between multiple **IBM Blue Box Dedicated** private clouds, using the **SoftLayer** private network. 

### Assumptions: 

The document assumes that each IBM Blue Box cloud that you are planning to connect have been deployed under the same SoftLayer account. If you order multiple clouds as a an IBM Blue Box customer, this should be true.

### To Initiate Network Connectivity

1. If your IBM Blue Box cloud already is deployed, open an IBM Blue Box support ticket and request access to the SoftLayer private network.

2. If your IBM Blue Box cloud is a new deployment (for new users), when ordering the Blue Box cloud, request SoftLayer private network connectivity.

#### Establishing connectivity over a SoftLayer private network

When a customer requests a SoftLayer private network, an internal OpenStack shared network named `sl-private-network` is created for that user. This network is subject to a few provisions:

* This network is visible to all users across all OpenStack projects in your IBM Blue Box Dedicated cloud.
* All users are able to attach virtual machines directly on this network and will have network connectivity to all other virtual machines attached to that network.
* When a virtual machine is deployed to the `sl-private-network`, a 10.x.x.x IP address is assigned. This IP address is routable between your SoftLayer data centers. 
* Assuming that the remote virtual machine is deployed in a similar fashion, these two virtual machines now can communicate over the SoftLayer private network. 	
