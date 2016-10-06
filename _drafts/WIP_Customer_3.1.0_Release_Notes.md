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

Release 3.1.0 of IBM Blue Box Cloud, Dedicated and Local, includes some new capabilities and performance improvements related to storage. We’ve also added Federated-Keystone-to-IdP authentication support.

**Every IBM Blue Box 3.1.0 Cloud has these new features:**

1. [Federated Keystone–IdP](#federated-keystone): We now support a Federated Keystone that utilizes a customer's existing IdP (Identity Provider), such as LDAP, RADIUS, and Active Directory. Users can have a single credential to manage multiple clouds.

 * [SAML Federation](https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/_keystone/saml-federation.md)
 * [K2K Federation](https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/_keystone/k2k-federation.md)
 * [OIDC Federation](https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/_keystone/oidc-federation.md)       
 * OIDC needs a copy edit. these links will be changed to the published version.

2. [Storage Pools](#storage-pools): Customers with diverse storage performance requirements now have the ability to leverage both a high-performance SSD and cost-effective Hybrid storage pools in the same cloud.  You can direct your workloads to the optimal storage pool.  

 * [Supported volume types](https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/_cinder/supported_volume_types.md) Needs a copy edit and the correct link.
 * [Creating a volume from Horizon](https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/_horizon/create-volume-from-horizon.md)
 * [Creating a volume from the command line](https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/_cinder/cli-create-volume.md)

3. [Storage Performance Improvements](#storage-performance-improvements): The Jewel release of **Ceph** has been implemented to provide approximately a 30% storage performance improvement.

3. [An update for IBM Blue Box Cloud Images](#regular-updates): Our Cloud Images have been updated. The [Cloud Image User Guide]( http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/userguides/cloud_images/image_patch_list_20160910/Image_Release_Notes_2016-09-10/) has the latest information. 

4. [Support for containers](#containers): We now have a Container service that offers a managed, scalable, solution for container orchestration, with support for **Docker Compose**. 


**IBM Blue Box 3.1.0 Dedicated Cloud features:**

1. **Multi-tier, hybrid storage pool**: With 3.1.0 comes the support for having a multi-tier Ceph cluster (that is, the ability to provision an all-SSD OSD pool and/or a Hybrid OSD pool). Each Ceph tier is represented as a separate backend in Cinder. The minimum number of OSD nodes for a new deployment remains at 3, and for hybrid expansion a minumum of 3 nodes must be added. After that, you may expand your storage one node at a time.
2. **Blue Box in SoftLayer Portal**: We now provide support for inclusion of Blue Box Dedicated into the Softlayer portal.
3. **Box Panel Beta**: We've included a Beta release of Box Panel with enhanced capabilities to support a co-managed environment.

**IBM Blue Box 3.1.0 Local Cloud features:**

1. **Support for Lenovo**: In addition to the current Cisco UCS platform, a Lenovo-curated bill of materials is now supported.  
2. **Support for Bluemix Local System**: The Bluemix Local System is now supported on Blue Box Local (IaaS).

[**Known Limitations of this Release**](#known-limitations-of-this-release)

For specific information about the limitations of LBaaS, please refer to [Limitations of LBaaS v2](https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/_neutron/Limitations_of_LBaaSv2.md).

For additional user documentation, please refer to the [main Customer Help page](http://ibm-blue-box-help.github.io/help-documentation/), available online anytime at [_help.blueboxcloud.com_](http://ibm-blue-box-help.github.io/help-documentation/).

For new users of IBM Blue Box Cloud, a **General Product Overview** for IBM Blue Box Cloud version 2.0 and later [is available](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/general_product_overview/).
