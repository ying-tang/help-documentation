---
layout: page
title: Release Notes 3.0
featured: false
weight: 5
tags: [commontech, release, features, gettingstarted]
dateAdded: April 22, 2016
author: Leslie Lundquist
---

# **IBM Blue Box Cloud Customer**

## Release Notes

#### Release 3.0  
#### June 30, 2016

# **Summary of New Features in the Latest Release**

This document offers a basic technical description of the latest IBM Blue Box Cloud offerings, specifically the 3.0 Dedicated and Local Cloud offerings. The new capabilities of IBM Blue Box Dedicated and Local Cloud include:  

1. [Openstack Mitaka Support.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#openstack-mitaka-support)
2. [OpenStack Power Compute Node Support (Habañero and Firestone).](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
3. [Federated Keystone identity available across multiple Blue Box clouds.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
4. [Hybrid Ceph Storage Support in Blue Box Local Cloud.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
5. [I/O Optimized and High Storage Compute Nodes Support for Blue Box Local Cloud.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
6. [Network connectivity to customer Bare Metal.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
7. [Box Panel Launched in China.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
8. [10G Vyatta Support.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
9. [SVC Cinder Driver support.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
10. [Higher soft limits for Object Storage of 250 TB.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
11. [Higher soft limits for Block Storage of 1 PB.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
12. [HIPAA available in Blue Box Local Cloud Local.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers//#)
13. [Updates for IBM Blue Box Cloud Guest Images now available]()

For additional user documentation, please refer to the [main Help page.](http://ibm-blue-box-help.github.io/help-documentation/) 

[A **General Product Overview** for IBM Blue Box Cloud version 2.0 and later is available in this document](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/general_product_overview/).

#### Openstack Mitaka Support

Several features are now available based on our move to OpenStack Mitaka. 

 * It is now possible to set up autoscaling groups and LBaaS (v2) using Heat templates.
 * 
 * For more information, please refer to the [OpenStack Mitaka Release Notes](http://releases.openstack.org/mitaka/).

#### OpenStack Power Compute Node Support (Habañero and Firestone)
#### Federated Keystone across multiple IBM Blue Box clouds
#### Hybrid Ceph Storage Support in Blue Box Cloud Local Cloud

**Optional Expansion Compute Nodes Now Available in IBM Blue Box Local**

Optionally, you can select from the following compute node extensions to add to your IBM Blue Box Local cloud:

	• You can select specialized expansion compute nodes: IO, or HIGH STORAGE (New in this release)
	• You can select additional standard or enterprise compute nodes: STANDARD COMPUTE, or ENTERPRISE COMPUTE

Expansion compute nodes address your requirements for faster IO ephemeral, more RAM, and an order of magnitude larger ephemeral storage.  Both types of expansion nodes—IO optimized and high storage capacity—allow better coverage of instance types and workloads. With this release, compute types are grouped into Availability Zones for easy targeting of workloads to the appropriate compute type.

#### **Optional Hybrid Block Storage Nodes Now Available in IBM Blue Box Local**

Hybrid Block Storage nodes provide lower-cost and higher-density Block Storage.  

	• You can select Block Storage: SSD or HYBRID
	• You can select Object Storage 

#### Network connectivity to customer Bare Metal hardware, available in IBM Blue Box Dedicated Cloud only.

This feature is designed for any IBM Blue Box Customer for whom the performance of bare metal is a strict requirement, but who also need access to secure communication over the SoftLayer private network, between bare metal infrastructure and an OpenStack cloud-instance network. 

**Note:** For Blue Box Dedicated cloud, the Bare Metal hardware must be in a separate, customer-owned SoftLayer account.

#### Box Panel Launched in China
#### 10GB Vyatta Support
#### SVC Cinder Driver support
#### Higher soft limits for Object Storage of 250 TB
#### Higher soft limits for Block Storage of 1 PB

#### HIPAA and IBM Blue Box Local Cloud

	• You can select HIPAA Enablement for your IBM Blue Box Local Cloud

A HIPAA-enabled cloud has the same configuration and expansion options as any other IBM Blue Box Cloud offering, but we are enabling _over 50 additional information-security controls_ that support our customers who must store personal health information (PHI). Because of this increased information security capability, a HIPAA-enabled cloud must be HIPAA-enabled from its inception: you cannot upgrade an existing cloud to enable HIPAA protocol. Also, you cannot downgrade from an IBM Blue Box Local HIPAA cloud: the existing HIPAA cloud must be wiped—per HIPAA protocol—and you must order a new Local cloud with non-HIPAA controllers.

#### Updates for IBM Blue Box Cloud Guest Images now available
 
 On a regular basis, updates are available for our series of IBM Blue Box Cloud Guest Images. The customer release notes for these updates are published [here]().

### Known Limitations of This Release

