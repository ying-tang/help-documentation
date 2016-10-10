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


This document offers a basic description of the specifics of the 3.1.0 Dedicated and Local Cloud offerings. Links to further documentation can be found in each section.

### Summary of the Latest Release

Release 3.1.0 of **IBM Blue Box Cloud, Dedicated and Local**, includes some new capabilities and performance improvements. 

**Every IBM Blue Box 3.1.0 Cloud has these new features:**

1.) Federated Keystone–IdP](#federated-keystone): Customers can now use an existing IdP (Identity Provider), such as LDAP, RADIUS, and Active Directory to manage OpenStack identity. Users can have a single credential to manage multiple clouds.

*Here are some related documents:*

 * [K2K Federation](http://ibm-blue-box-help.github.io/help-documentation/keystone/k2k-federation/)
 * [SAML Federation](http://ibm-blue-box-help.github.io/help-documentation/keystone/saml-federation/)
 * [OIDC Federation](http://ibm-blue-box-help.github.io/help-documentation/keystone/oidc-federation/)       

2.) [Storage Pools](#storage-pools): Customers with diverse storage performance requirements can now direct workloads optimally, to high-performance SSD and cost-effective Hybrid storage pools in the same cloud. The minimum number of OSD nodes for a new deployment remains at 3, and for hybrid expansion a minumum of 3 nodes must be added. After that, you may expand your storage one node at a time.

*Here are some related documents:*

 * [Supported volume types](http://ibm-blue-box-help.github.io/help-documentation/cinder/supported_volume_types/) 
 * [Creating a volume from Horizon](http://ibm-blue-box-help.github.io/help-documentation/horizon/create-volume-from-horizon/)
 * [Creating a volume from the command line](http://ibm-blue-box-help.github.io/help-documentation/cinder/cli-create-volume/)

3.) [Storage Performance Improvements](#storage-performance-improvements): **Ceph** deployments have been upgraded to the Jewel release, to provide a 30% performance improvement.

**IBM Blue Box Cloud Image Updates**

[An update for IBM Blue Box Cloud Images](#regular-updates): Our library of available Cloud Images has been updated. The [Cloud Image User Guide]( http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/userguides/cloud_images/image_patch_list_20160910/Image_Release_Notes_2016-09-10/) has the latest information. 

**IBM Blue Box 3.1.0 Dedicated Cloud features:**

1. **Blue Box in SoftLayer Portal**: We now provide support for inclusion of Blue Box Dedicated into the Softlayer portal.

**IBM Blue Box 3.1.0 Local Cloud features:**

1. **Support for Lenovo**: In addition to the current Cisco UCS platform, a Lenovo-curated bill of materials is now supported.  
2. **Support for Bluemix Local System**: The Bluemix Local System is now supported on Blue Box Local (IaaS).

### Known Limitations of this Release

For specific information about the limitations of LBaaS, please refer to [Limitations of LBaaS v2](http://ibm-blue-box-help.github.io/help-documentation/neutron/Limitations_of_LBaaSv2/).

For additional user documentation, please refer to the [main Customer Help page](http://ibm-blue-box-help.github.io/help-documentation/), available online anytime at [_help.blueboxcloud.com_](http://ibm-blue-box-help.github.io/help-documentation/).

For new users of IBM Blue Box Cloud, a **General Product Overview** for IBM Blue Box Cloud version 2.0 and later [is available](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/general_product_overview/).
