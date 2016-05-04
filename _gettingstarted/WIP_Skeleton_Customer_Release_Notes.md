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

# Release Notes (DRAFT)

#### Release 3.0    created     April 22, 2016

# **Summary of New Features in Latest Release**

This document offers a basic technical description of the latest IBM Blue Box Cloud offerings, specifically the 3.0 Dedicated and Local Cloud offerings.  The new capabilities of IBM Blue Box Dedicated and Local Cloud include:  

1.  [Openstack Mitaka Support.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
 
2.[OpenStack Power Compute Node Support (Habeñero and Firestone).](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

3.  [Federated keystone across multiple Blue Box clouds.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

4.  [Federate Keystone to External Identity Provider.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

5.  [Hybrid Ceph Storage Support in BBC Local.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

6.  [I/O Optimized and High Storage Compute Nodes Support for BBC Local.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

7.  [Network connectivity to customer Bare Metal.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

8. [Box Panel Launched in China.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

9. [10G Vyatta Support.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

10. [Support for PAYGO billing in Blue Box Dedicated.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

11. [SVC Cinder Driver support.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

12. [Higher soft limits for Object Storage of 250 TB.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

13. [Higher soft limits for Block Storage of 1 PB.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)

14. [HIPAA available in Blue Box Local.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers//#)

For additional user documentation, please refer to the [main Help page.](http://ibm-blue-box-help.github.io/help-documentation/) 

[A **General Product Overview** for IBM Blue Box Cloud version 2.0 and later is available in this document](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/general_product_overview/).

#### Openstack Mitaka Support.
#### OpenStack Power Compute Node Support (Habeñero and Firestone).
#### Federated keystone across multiple Blue Box clouds.
#### Federate Keystone to External Identity Provider.
#### Hybrid Ceph Storage Support in Blue Box Cloud Local.
#### I/O Optimized and High Storage Compute Nodes Support for Blue Box Cloud Local.
#### Network connectivity to customer Bare Metal.

This feature is designed for any IBM Blue Box Customer for whom the performance of bare metal is a strict requirement, but who also needs access to secure communication over the SoftLayer private network, between bare metal infrastructure and an OpenStack guest-instance network. This capability is based on OpenStack Ironic.

For Blue Box Dedicated cloud, the bare metal hardware must be in a separate, custoemr-owned SoftLayer account.

#### Box Panel Launched in China.
#### 10G Vyatta Support.
#### Support for PAYGO billing in Blue Box Dedicated.
#### SVC Cinder Driver support.
#### Higher soft limits for Object Storage of 250 TB.
#### Higher soft limits for Block Storage of 1 PB.

#### **HIPAA and IBM Blue Box Local Cloud**

	• You can select HIPAA Enablement for your IBM Blue Box Local Cloud

A HIPAA-enabled cloud has the same configuration and expansion options as any other IBM Blue Box Cloud offering, but we are enabling _over 50 additional information-security controls_ that support our customers who must store personal health information (PHI). Because of this increased information security capability, a HIPAA-enabled cloud must be HIPAA-enabled from its inception: you cannot upgrade an existing cloud to enable HIPAA protocol. Also, you cannot downgrade from an IBM Blue Box Local HIPAA cloud: the existing HIPAA cloud must be wiped—per HIPAA protocol—and you must order a new Local cloud with non-HIPAA controllers.

