---
layout: page
title: Connecting Clouds with SoftLayer
featured: false
weight: 13
tags: [SoftLayer, network, gettingstarted]
dateAdded: March 22nd, 2016
author: Shaival Choski
editor: Leslie Lundquist
---

# Connecting two IBM Blue Box clouds over a SoftLayer private network 

### Overview: 

This document explains how to set up connectivity between two **IBM Blue Box Dedicated** private clouds, using the **SoftLayer** private network capability. 

### Assumption: 

The document assumes that both of the IBM Blue Box clouds that will be connected are deployed under the same SoftLayer account.

**Two use cases exist:** 

1. If the IBM Blue Box cloud already is deployed for an existing user, open an IBM Blue Box support ticket and request a SoftLayer private network.

2. If the IBM Blue Box cloud is a new deployment (for new users), when ordering the  Blue Box cloud, request SoftLayer private network connectivity.

## Establishing connectivity over a SoftLayer private network

When a user requests a SoftLayer private network, an internal shared network named `sl-private-network` is created for that user.

	*	This network is visible to all users across all OpenStack projects in IBM Blue Box cloud.
	
	*	The user is able to deploy its workload directly on this network.
	
	* When a workload is deployed, a 10.x.x.x IP address is assigned. This IP address is routable in SoftLayer data centers. 
	
	*	Assuming that the remote workload is deployed in a similar fashion, these two workloads now can communicate over the SoftLayer private network. 
	
**Using a jump node to access the workload on a SoftLayer private network**

When your workload is deployed on `sl-private-network`, it is not directly accessible over the Internet. You’ll need to set up a jump node for access to your cloud workload on a SoftLayer private network.

Here are the instructions for setting up a jump node: 

	1.	Deploy a guest virtual machine (VM) on the SoftLayer private network (sl-private-network). This guest VM acts as your jump node.
	
	2.	Assign a floating IP from the “external" network to the guest VM.
	
	3.	Connect to the guest VM using the floating IP address.
	
	4.	You’ll have access to the workload on your SoftLayer private network from your guest VM.
	
**Note:** Even though the guest VM (jump node) has a SoftLayer-routable 10.x.x.x IP address assigned, this guest VM is not reachable over SoftLayer private network from a remote workload.

Please refer to the figure below for more information about using a SoftLayer private Network to connect two IBM Blue Box clouds, both located in SoftLayer data centers.

[Figure] ()
￼ 
