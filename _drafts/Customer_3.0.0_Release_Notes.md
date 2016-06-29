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

This document offers a basic technical description of the latest IBM Blue Box Cloud offerings, specifically the 3.0 Dedicated and Local Cloud offerings. The new capabilities of IBM Blue Box Dedicated and Local Cloud are listed below:

1. [Openstack Mitaka Support.](#openstack-mitaka)
2. [Federated Keystone identity available across multiple Blue Box clouds.](#federated-keystone)
3. [OpenStack Power Compute Node Support (Habañero and Firestone).](#power-compute)
4. [Higher soft limits for Object Storage of 250 TB.](#increased-storage)
5. [Higher soft limits for Block Storage of 640 TB.](#increased-storage)
6. [Support for SoftLayer VLAN spanning and connectivity to customer Bare Metal for IBM Blue Box Dedicated.](#transit-vlan)
7. [High-availability IP setup](#High-availability IP)
8. [10G Vyatta Support for IBM Blue Box Dedicated.](#10gb-vyatta)
9. [Optional Hybrid Block Storage Nodes Now Available for IBM Blue Box 3.0.0 Local.](#block-storage)
10. [I/O Optimized and High Storage Compute Nodes Support Now Available for IBM Blue Box 3.0.0 Local Cloud.](#)
11. [Support for IBM Blue Box Local on PureApp platform (Beta release)](#pure-app)
12. [Updated Documentation Website now available through Box Panel](#new-docs-site)
13. [HIPAA available for IBM Blue Box Local 3.0.0 Cloud Local.](#hipaa)
14. [Regular updates for IBM Blue Box Cloud Images now available](#regular-updates-for-ibm-blue-box-cloud-images-now-available)
15. [Known Limitations of this Release](#known-limitations-of-this-release)

For additional user documentation, please refer to the [main Customer Help page](http://ibm-blue-box-help.github.io/help-documentation/), available anytime at [_help.blueboxcloud.com_](http://ibm-blue-box-help.github.io/help-documentation/).

[A **General Product Overview** for IBM Blue Box Cloud version 2.0 and later is available](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/general_product_overview/).

#### New Features Available in Every IBM Blue Box 3.0.0 Cloud

**<a name="openstack-mitaka"></a>Openstack Mitaka Support:**
Several features are now available based on our move to OpenStack Mitaka. 
 * It is now possible to set up autoscaling groups and LBaaS (v2) using Heat templates and the Horizon dashboard.
 * The Mitaka release introduces the new **aodh** alert service, which will be installed on any environment that has Ceilometer enabled.
 * For more information, please refer to the [OpenStack Mitaka Release Notes](http://releases.openstack.org/mitaka/).

<a name="federated-keystone"></a>**Federated Keystone across multiple IBM Blue Box clouds:**
Keystone-to-Keystone (K2K) federation lets you log in to multiple clouds using your user credentials stored on one Keystone Identity Provider. [We've created a K2K help article for you.]()

<a name="power-compute"></a>**OpenStack Power Compute Node Support (Habañero):**
This feature supports compatibility with IBM Watson.

<a name="increased-storage"></a>**Higher Storage Limits:** Increased storage capacity is now available in every IBM Blue Box Cloud.
 * Higher soft limits for Object Storage of 250 TB
 * Higher soft limits for Block Storage of 640 TB

#### New Features Available in IBM Blue Box Dedicated 3.0.0 Cloud

<a name="transit-vlan"></a>**Support for SoftLayer VLANs spanning and customer Bare Metal hardware connections:** Available in IBM Blue Box Dedicated Cloud only, this feature is designed for any IBM Blue Box Customer for whom the performance of bare metal is a strict requirement, but who also need access to secure communication over the SoftLayer private network, between bare metal infrastructure and an OpenStack cloud-instance network. **Note:** To use this feature, the Bare Metal hardware must be in a separate, customer-owned SoftLayer account.

<a name="High-availability IP"></a>You can now create a [high-availability (HA) IP failover setup.](http://ibm-blue-box-help.github.io/help-documentation/neutron/configure-ha-ip/) 

<a name="10gb-vyatta"></a>**10GB Vyatta Support for IBM Blue Box Dedicated Cloud:** This feature is designed for customers with high bandwidth requirements for cloud egress and ingress. 

#### New Features Available in IBM Blue Box Local 3.0.0 Cloud
<a name="expansion-compute"></a>**Optional Expansion Compute Nodes Now Available in IBM Blue Box 3.0.0 Local:** Expansion compute nodes address your requirements for faster IO ephemeral, more RAM, and an order of magnitude larger ephemeral storage.  Both types of expansion nodes—IO optimized and high storage capacity—allow better coverage of instance types and workloads. With this release, compute types are grouped into Availability Zones for easy targeting of workloads to the appropriate compute type.
You can select from the following compute node extensions to add to your IBM Blue Box Local cloud:
  * You can select specialized expansion compute nodes: IO, or HIGH STORAGE (New in this release)
  * You can select additional standard or enterprise compute nodes: STANDARD COMPUTE, or ENTERPRISE COMPUTE (Previously available)

<a name="block-storage"></a>**Optional Hybrid Block Storage Nodes Now Available in IBM Blue Box 3.0.0 Local:** Hybrid Block Storage nodes provide lower-cost and higher-density Block Storage. We've added a Hybrid Ceph Storage node type, which provides lower-cost and higher-density Block Storage. It's 4x the capacity for the same price point as SSD, with an identical software stack and reference architecture. Note that only one type of Block Storage can be used per cluster: SSD Block Storage and Hybrid Block Storage cannot be mixed in the same cluster. 

  * You can select Block Storage: SSD or HYBRID
  * You can select Object Storage 

<a name="pure-app"></a>**Support for Blue Box on PureApp (Beta release):** PureApp is an existing IBM system for hardware management. With this release, we are making it available as a platform for IBM Blue Box Local, in addition to the Cisco hardware already available.

<a name="new-docs-site"></a>We've updated and redesigned our customer documentation website, now available at help.blueboxcloud.com, and accessible through your Box Panel interface.

<a name="hipaa"></a>**HIPAA and IBM Blue Box Local 3.0.0 Cloud:** A HIPAA-enabled cloud has the same configuration and expansion options as any other IBM Blue Box Cloud offering, but we are enabling _over 50 additional information-security controls_ that support our customers who must store personal health information (PHI). Because of this increased information security capability, a HIPAA-enabled cloud must be HIPAA-enabled from its inception: you cannot upgrade an existing cloud to enable HIPAA protocol. Also, you cannot downgrade from an IBM Blue Box Local HIPAA cloud: the existing HIPAA cloud must be wiped—per HIPAA protocol—and you must order a new Local cloud with non-HIPAA controllers.

  * You can now select HIPAA Enablement for your IBM Blue Box Local Cloud.

#### Regular updates for IBM Blue Box Cloud Images now available
 
 On a regular basis, updates are available for our series of IBM Blue Box Cloud Images, available through your Box Panel interface. The customer release notes for all individual image updates are published [here](http://help.blueboxcloud.com/ _userguides/Image_Release_Notes.md). We've also created a [User Guide for working with Cloud Images](http://help.blueboxcloud.com/_userguides/Cloud_Images_Provided_by_IBM.md).

### Known Limitations of This Release
**Horizon Dashboard and LBaaS v2:**
 * The LBaaS v2 Horizon dashboard will not let you create `https` listeners.
 * Pool sharing is not available through the Horizon interface.
 * You cannot set the weight of a member to 0 through Horizon.
 * L7 content switching is not available with the default driver. (HaproxyOnHostPluginDriver)
 * TLS Termination is not supported.
 
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

**Other Changes in the Release**
Customers who were with Blue Box before the IBM acquisition are now receiving invoices from IBM. Under the Billing page in Box Panel, you can still use Box Panel to review what you're being billed for, but it's no longer your invoice and you will be paying IBM directly.
