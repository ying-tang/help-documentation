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

### Summary of New Features in the Latest Release

This document offers a basic technical description of the latest IBM Blue Box Cloud offerings, specifically the 3.0 Dedicated and Local Cloud offerings. The new capabilities of IBM Blue Box Dedicated and Local Cloud include:

1. [Openstack Mitaka Support.](#openstack-mitaka-support)
2. [Federated Keystone identity available across multiple Blue Box clouds.](#federated-keystone-across-multiple-ibm-blue-box-clouds)
3. [OpenStack Power Compute Node Support (Habañero and Firestone).](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
4. [Higher soft limits for Object Storage of 250 TB.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
5. [Higher soft limits for Block Storage of 1 PB.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
6. [Transit VLAN support of HA IP and connectivity to customer Bare Metal for IBM Blue Box Dedicated.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
7. [10G Vyatta Support for IBM Blue Box Dedicated.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
8. [Optional Hybrid Block Storage Nodes Now Available for IBM Blue Box 3.0.0 Local.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
9. [I/O Optimized and High Storage Compute Nodes Support Now Available for IBM Blue Box 3.0.0 Local Cloud.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
10. [Support for IBM Blue Box Local on PureApp platform (Beta release)](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
11. [Support for Bluemix on IBM Blue Box Local](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers/#)
12. [HIPAA available for IBM Blue Box Local 3.0.0 Cloud Local.](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/release_notes_for_customers//#)
13. [Regular updates for IBM Blue Box Cloud Images now available](http://help.blueboxcloud.com/ _userguides/Image_Release_Notes.md)

For additional user documentation, please refer to the [main Help page](http://ibm-blue-box-help.github.io/help-documentation/), available anytime at [_help.blueboxcloud.com_](http://ibm-blue-box-help.github.io/help-documentation/).

[A **General Product Overview** for IBM Blue Box Cloud version 2.0 and later is available](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/general_product_overview/).

#### New Features Available in Every IBM Blue Box 3.0.0 Cloud

**Openstack Mitaka Support:**
Several features are now available based on our move to OpenStack Mitaka. 
 * It is now possible to set up autoscaling groups and LBaaS (v2) using Heat templates and the Horizon dashboard.
 * The Mitaka release introduces the new **aodh** alert service, which will be installed on any environment that has Ceilometer enabled.
 * For more information, please refer to the [OpenStack Mitaka Release Notes](http://releases.openstack.org/mitaka/).

**Federated Keystone across multiple IBM Blue Box clouds:**
Keystone-to-Keystone (K2K) federation lets you log in to multiple clouds using your user credentials stored on one Keystone Identity Provider. [We've created a K2K help  for you.]()

**OpenStack Power Compute Node Support (Habañero and Firestone):**
This feature supports compatibility with IBM Watson.

**Higher Storage Limits:** Increased storage capacity is now available in every IBM Blue Box Cloud.
 * Higher soft limits for Object Storage of 250 TB
 * Higher soft limits for Block Storage of 1 PB

#### New Features Available in IBM Blue Box Dedicated 3.0.0 Cloud

**Support for Transit VLANs and customer Bare Metal hardware connections:** Available in IBM Blue Box Dedicated Cloud only, this feature is designed for any IBM Blue Box Customer for whom the performance of bare metal is a strict requirement, but who also need access to secure communication over the SoftLayer private network, between bare metal infrastructure and an OpenStack cloud-instance network. [This feature also lets you create a high-availability (HA) IP failover setup.](http://ibm-blue-box-help.github.io/help-documentation/neutron/configure-ha-ip/) **Note:** To use this feature, the Bare Metal hardware must be in a separate, customer-owned SoftLayer account.

**10GB Vyatta Support for IBM Blue Box Dedicated Cloud:** This feature is designed for customers with high bandwidth requirements for cloud egress and ingress. 

#### New Features Available in IBM Blue Box Local 3.0.0 Cloud
**Optional Expansion Compute Nodes Now Available in IBM Blue Box 3.0.0 Local:** Expansion compute nodes address your requirements for faster IO ephemeral, more RAM, and an order of magnitude larger ephemeral storage.  Both types of expansion nodes—IO optimized and high storage capacity—allow better coverage of instance types and workloads. With this release, compute types are grouped into Availability Zones for easy targeting of workloads to the appropriate compute type.
You can select from the following compute node extensions to add to your IBM Blue Box Local cloud:
  * You can select specialized expansion compute nodes: IO, or HIGH STORAGE (New in this release)
  * You can select additional standard or enterprise compute nodes: STANDARD COMPUTE, or ENTERPRISE COMPUTE (Previously available)

**Optional Hybrid Block Storage Nodes Now Available in IBM Blue Box 3.0.0 Local:** Hybrid Block Storage nodes provide lower-cost and higher-density Block Storage. We've added a Hybrid Ceph Storage node type, which provides lower-cost and higher-density Block Storage. It's 4x the capacity for the same price point as SSD, with an identical software stack and reference architecture. Note that only one type of Block Storage can be used per cluster: SSD Block Storage and Hybrid Block Storage cannot be mixed in the same cluster. 

  * You can select Block Storage: SSD or HYBRID
  * You can select Object Storage 

**Support for Blue Box on PureApp (Beta release):** PureApp is an existing IBM system for hardware management. With this release, we are making it available as a platform for IBM Blue Box Local, in addition to the Cisco hardware already available.

**Support for Bluemix:** Support for running Bluemix Local on IBM Blue Box Local.

**HIPAA and IBM Blue Box Local 3.0.0 Cloud:** A HIPAA-enabled cloud has the same configuration and expansion options as any other IBM Blue Box Cloud offering, but we are enabling _over 50 additional information-security controls_ that support our customers who must store personal health information (PHI). Because of this increased information security capability, a HIPAA-enabled cloud must be HIPAA-enabled from its inception: you cannot upgrade an existing cloud to enable HIPAA protocol. Also, you cannot downgrade from an IBM Blue Box Local HIPAA cloud: the existing HIPAA cloud must be wiped—per HIPAA protocol—and you must order a new Local cloud with non-HIPAA controllers.

  * You can now select HIPAA Enablement for your IBM Blue Box Local Cloud.

#### Regular updates for IBM Blue Box Cloud Images now available
 
 On a regular basis, updates are available for our series of IBM Blue Box Cloud Images, available through your Box Panel interface. The customer release notes for all individual image updates are published [here](http://help.blueboxcloud.com/ _userguides/Image_Release_Notes.md). We've also created a [User Guide for working with Cloud Images](http://help.blueboxcloud.com/_userguides/Cloud_Images_Provided_by_IBM.md).

### Known Limitations of This Release
**Horizon Dashboard and LBaaS v2:**
 * The LBaaS v2 Horizon dashboard will not let you create `https` listeners.
 * HTTPS is supported in the v2 Horizon dashboard. To have it present, you must have Barbican enabled for the TLS offload feature to appear.
 * Pool sharing is not available through the Horizon interface.
 * You cannot set the weight of a member to 0 through Horizon.
 * L7 content switching is not available with the default driver. (HaproxyOnHostPluginDriver)
 * TLS Termination is not supported at this point.

**OpenStack Community Open Issues for LBaaS v2:**
 * LBaaS VIP is associated with Default security group by default. A workaround is to open the required ports in the default group. https://bugs.launchpad.net/neutron/+bug/1295424
 * Deleting LBaaSv2 does not delete the LBaaS namespace. https://bugs.launchpad.net/neutron/+bug/1495430
 * Health monitor status does not reflect whether health monitor is successful or has failed. https://bugs.launchpad.net/neutron/+bug/1464229
 * PING monitor sends HTTP requests. When the LSaaS v2 health monitor is configured for Ping, it sends HTTP requests. https://bugs.launchpad.net/neutron/+bug/1463816
 * Unable to delete LBaaSv2 health monitor if its listener has been deleted. A workaround is to delete the orphan health monitor from the command line. https://bugs.launchpad.net/neutron/+bug/1571097
 
**Horizon Dashboard and projects:**
 * On the Horizon dashboard the quotas edit page is not seen by `cloud_admin` in the Project Edit modal window. Quota modification by `cloud_admin` still is allowed, using the OpenStack CLI or APIs.
 * On the Horizon dashboard Identity Panel, when creating a new project as role `cloud_admin`, an error pop-up menu is displayed (Unable to set project quotas). However, the project is created and it receives the default quota. A user with a `cloud_admin` role can subsequently update the quota, by using the OpenStack CLI or API.
 *  On the Horizon dashboard Identity Panel, when modifying an existing project as a user with `cloud_admin` role, an error pop-up menu is displayed (`Unable to modify project`). The project, in fact, will be updated. The pop-up menu is shown because the project quotas could not be set.

**Other Known Limitations:**
* Neutron RBAC-create: The CLI command neutron rbac-create returns a "500" error status code unless `--target-tenant` is specified at the point of initial creation.
 * Block storage performance limitation exists, when tested in the 30-node performance test environment with a hybrid Ceph configuration (HDD + SSD bcache)
 * Keystone to Keystone Federation: An issue currently exists with the creation of trust-for-trust delegation by a federated user. To work around this issue, the `heat_stack_owner` role needs to be assigned explicitly to the federated user.
 * In Ubuntu, the FDB table grows out of control with more than 53 nodes. This issue is fixed in the 3.13.0-91.138 Ubuntu kernel, which would need to be running on all nodes for this limitation to be overcome.
 * Bare metal servers have a known performance limitation on controller nodes and compute nodes with Ubuntu Trusty, when the number of nodes is less than 50.
