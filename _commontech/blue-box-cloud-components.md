---
layout: page
title:  "Bluemix Private Cloud Components"
featured: true
weight: 1
tags: [getting started, bluemix private cloud, components]
dateAdded: January 7th, 2016
author: Eric French
---

Bluemix Private Cloud is built on OpenStack and utilizes many of its core components.

_Nova_ provides the computational and scheduling functions of Bluemix Private Cloud.  Nova is used to create, maintain and destroy instances.

_Keystone_ is the identity service that provides authorization and endpoint access to the OpenStack cluster.

_Cinder_ is the service that provides block storage provisioning and connection to instances.

_Glance_ is the image service that stores and provides disk images for instance provisioning.

_Neutron_ is the networking service that provides connectivity between OpenStack instances.

_Swift_ is the service that provides object storage and retrieval.

Most services have many of their common functions available in the Horizon interface.  In addition, each service has a set of API commands, which are discussed in detail in each section.

**Specific OpenStack Services Enabled for every IBM Bluemix Private Cloud**

Starting with version 3.0.0, your cloud is based on the OpenStack Mitaka Release and these services:

 * Block Storage API & Extensions (Cinder v2.0)
 * Compute API & Extensions (Nova v2.1)
 * Dashboard (Horizon) API N/A
 * Identity API & Extensions (Keystone v3.0)
 * Image Service API (Glance v2.2)
 * Networking API & Extensions (Neutron v2.0, Neutron LBaaS v2)
 * Object Storage API & Extensions (Swift v1.0)
 * Orchestration API (Heat v1.0)
 * Telemetry API (Ceilometer v2.0) (plus aodh)
