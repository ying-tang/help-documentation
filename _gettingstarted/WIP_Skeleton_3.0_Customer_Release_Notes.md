---
layout: page
title: Release Notes 3.0.0
featured: false
weight: 5
tags: [commontech, release, features, gettingstarted]
dateAdded: April 22, 2016
author: Leslie Lundquist
---

# IBM Blue Box Cloud Customer

## Release Notes

#### Release 3.0.0
#### June 30, 2016

Release 3.0.0 of IBM Blue Box Cloud includes many updates to the underlying OpenStack platform upon which IBM Blue Box Cloud is built, as well as upgrades to overall infrastructure and features of IBM Blue Box Dedicated Cloud and IBM Blue Box Local Cloud. Most notable is the move to the **OpenStack Mitaka** release, which enables many new capabilities. We’ve included some general product improvements such as performance benchmarks and an updated Rally test suite, designed to facilitate smoother operation and deployment. This release also includes many improvements to documentation.

## Summary of New Features in the Latest Release

This document offers a basic technical description of the latest IBM Blue Box Cloud offerings, specifically the 3.0 Dedicated and Local Cloud offerings. The new capabilities of IBM Blue Box Dedicated and Local Cloud include:

1. [Openstack Mitaka Support.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#openstack-mitaka-support)
2. [Federated Keystone identity available across multiple Blue Box clouds.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
3. [OpenStack Power Compute Node Support (Habañero and Firestone).](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
4. [Higher soft limits for Object Storage of 250 TB.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
5. [Higher soft limits for Block Storage of 1 PB.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
6. [Transit VLAN support of HA IP and connectivity to customer Bare Metal for IBM Blue Box Dedicated.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
7. [10G Vyatta Support for IBM Blue Box Dedicated.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
8. [Optional Hybrid Block Storage Nodes Now Available for IBM Blue Box 3.0.0 Local.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
9. [I/O Optimized and High Storage Compute Nodes Support Now Available for IBM Blue Box 3.0.0 Local Cloud.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
10. [HIPAA available for IBM Blue Box Local 3.0.0 Cloud Local.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers//#)
11. [Regular updates for IBM Blue Box Cloud Images now available](http://help.blueboxcloud.com/ _userguides/Image_Release_Notes.md)

For additional user documentation, please refer to the [main Help page](http://ibm-blue-box-help.github.io/help-documentation/) available anytime at _help.blueboxcloud.com_.

[A **General Product Overview** for IBM Blue Box Cloud version 2.0 and later is available in this document](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/general_product_overview/).

#### New Features Available in Every IBM Blue Box 3.0.0 Cloud

**Openstack Mitaka Support:**
Several features are now available based on our move to OpenStack Mitaka. 
 * It is now possible to set up autoscaling groups and LBaaS (v2) using Heat templates.
 * For more information, please refer to the [OpenStack Mitaka Release Notes](http://releases.openstack.org/mitaka/).

**Federated Keystone across multiple IBM Blue Box clouds:**
Keystone-to-Keystone (K2K) federation lets you log in to multiple clouds using your user credentials stored on one Keystone Identity Provider. 

**OpenStack Power Compute Node Support (Habañero and Firestone):**
This feature supports compatibility with IBM Watson.

**Higher soft limits for Object Storage of 250 TB**
**Higher soft limits for Block Storage of 1 PB**

#### New Features Available in IBM Blue Box Dedicated 3.0.0 Cloud
##### Support for Transit VLANs and customer Bare Metal hardware connections 
 Available in IBM Blue Box Dedicated Cloud only, this feature is designed for any IBM Blue Box Customer for whom the performance of bare metal is a strict requirement, but who also need access to secure communication over the SoftLayer private network, between bare metal infrastructure and an OpenStack cloud-instance network. [It also lets you create HA IP setup.](http://ibm-blue-box-help.github.io/help-documentation/neutron/configure-ha-ip/)

  * **Note:** To use this feature, the Bare Metal hardware must be in a separate, customer-owned SoftLayer account.

##### 10GB Vyatta Support for IBM Blue Box Dedicated Cloud
This feature is designed for customers with high bandwidth requirements for cloud egress and ingress. 

#### New Features Available in IBM Blue Box Local 3.0.0 Cloud
##### Optional Expansion Compute Nodes Now Available in IBM Blue Box 3.0.0 Local
Expansion compute nodes address your requirements for faster IO ephemeral, more RAM, and an order of magnitude larger ephemeral storage.  Both types of expansion nodes—IO optimized and high storage capacity—allow better coverage of instance types and workloads. With this release, compute types are grouped into Availability Zones for easy targeting of workloads to the appropriate compute type.

 * Optionally, you can select from the following compute node extensions to add to your IBM Blue Box Local cloud:

	• You can select specialized expansion compute nodes: IO, or HIGH STORAGE (New in this release)
	• You can select additional standard or enterprise compute nodes: STANDARD COMPUTE, or ENTERPRISE COMPUTE

##### Optional Hybrid Block Storage Nodes Now Available in IBM Blue Box 3.0.0 Local**
 Hybrid Block Storage nodes provide lower-cost and higher-density Block Storage. We've added a Hybrid Ceph Storage node type, which provides lower-cost and higher-density Block Storage. It's 4x the capacity for the same price point as SSD, with an identical software stack and reference architecture. Note that only one type of Block Storage can be used per cluster: SSD Block Storage and Hybrid Block Storage cannot be mixed in the same cluster. 

	• You can select Block Storage: SSD or HYBRID
	• You can select Object Storage 

#### HIPAA and IBM Blue Box Local 3.0.0 Cloud

	• You can select HIPAA Enablement for your IBM Blue Box Local Cloud

 A HIPAA-enabled cloud has the same configuration and expansion options as any other IBM Blue Box Cloud offering, but we are enabling _over 50 additional information-security controls_ that support our customers who must store personal health information (PHI). Because of this increased information security capability, a HIPAA-enabled cloud must be HIPAA-enabled from its inception: you cannot upgrade an existing cloud to enable HIPAA protocol. Also, you cannot downgrade from an IBM Blue Box Local HIPAA cloud: the existing HIPAA cloud must be wiped—per HIPAA protocol—and you must order a new Local cloud with non-HIPAA controllers.

#### Regular updates for IBM Blue Box Cloud Images now available
 
 On a regular basis, updates are available for our series of IBM Blue Box Cloud Images, available through your Box Panel interface. The customer release notes for all individual image updates are published [here](http://help.blueboxcloud.com/ _userguides/Image_Release_Notes.md). We've also created a [User Guide for working with Cloud Images](http://help.blueboxcloud.com/_userguides/Cloud_Images_Provided_by_IBM.md).

### Known Limitations of This Release

