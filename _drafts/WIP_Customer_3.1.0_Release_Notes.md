---
layout: page
title: Release Notes 3.1.0
featured: false
weight: 5
tags: [commontech, release, features, gettingstarted]
dateAdded: October 14, 2016
author: Leslie Lundquist
---

## IBM Blue Box Cloud Customer

## Release Notes 3.1.0

#### October 14, 2016


This document offers a basic technical description of the latest IBM Blue Box Cloud offerings, including specifics of the 3.1.0 Dedicated and Local Cloud offerings. Links to detailed documentation can be found in each section.

### Summary of the Latest Release

Release 3.1.0 of IBM Blue Box Cloud includes some new capabilities and performance improvements related to storage. We’ve also added improved Keystone authentication support.

Every IBM Blue Box 3.1.0 Cloud has these new features:

1. [Federated Keystone–IdP](#federated-keystone): We now support a Federated Keystone that utilizes a customer's existing IdP (Identity Provider), such as LDAP, RADIUS, and Active Directory. Users can have a single credential to manage multiple clouds.

2. [Storage Pools](#storage-pools): Customers with diverse storage performance requirements now have the ability to leverage both a high performance SSD and cost effective Hybrid storage pools in the same cloud.  The customer can direct workloads to the optimal storage pool.  

3. [Storage Performance Improvements](#storage-performance-improvements): The Jewel release of CEPH has been implemented to provide approximately a 30% storage performance improvement.

3. [An update for IBM Blue Box Cloud Images](#regular-updates): Our Cloud Images have been updated..

4. [Support for containers]: A Container service that offers a managed, scalable, solution for container orchestration, with support for Docker Compose. 


IBM Blue Box 3.1.0 Dedicated Cloud features:

1. **Multi-tier, hybrid storage pool**: With 3.1.0 comes the support for having a multi-tier Ceph cluster (that is, the ability to provision an all-SSD OSD pool and a Hybrid OSD pool). Each Ceph tier is represented as a separate backend in Cinder.
2. **Blue Box in SoftLayer Portal** Support for inclusion of Blue Box Dedicated into the Softlayer portal.
3. **Box Panel Beta** A Beta release of Box Panel with enhanced capabilities to support a co-managed environment.

IBM Blue Box 3.1.0 Local Cloud features:

1. **Support for Lenovo**: In addition to the current Cisco UCS platform, a Lenovo curated bill of materials is now supported.  
2. **Support for Bluemix Local System**: Bluemix Local System is now supported.

[**Known Limitations of this Release**](#known-limitations-of-this-release)

For specific information about the limitations of LBaaS, please refer to [Limitations of LBaaS v2](https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/_neutron/Limitations_of_LBaaSv2.md).

For additional user documentation, please refer to the [main Customer Help page](http://ibm-blue-box-help.github.io/help-documentation/), available online anytime at [_help.blueboxcloud.com_](http://ibm-blue-box-help.github.io/help-documentation/).

A **General Product Overview** for IBM Blue Box Cloud version 2.0 and later [is available](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/general_product_overview/).



