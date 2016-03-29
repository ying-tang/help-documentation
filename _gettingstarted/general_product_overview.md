---
layout: page
title: General Product Overview
featured: false
weight: 10
tags: [release, features, gettingstarted, overview]
date: March 29, 2016
author: Leslie Lundquist
---

#### General Product Overview

Both offerings of **IBM Blue Box Cloud**, Dedicated and Local, are deployed automatically through a **Site Controller** machine, which serves as a storehouse for the **Ursula/Ansible playbooks** we use to create your cloud. You can view the [Ursula playbooks](https://github.com/blueboxgroup/ursula) on **GitHub**. They are open source documents.

**Site Controller**

To deploy the **IBM Blue Box Dedicated** offering, a physical **Site Controller** machine must be located in a **SoftLayer Datacenter** within the same geographical region in which your new IBM Blue Box Dedicated cloud is deployed.

To deploy the **IBM Blue Box Local** cloud offering, a Site Controller logical machine must be co-located within your IBM Local Cloud data center, and it will communicate with a Central Site Controller machine at IBM Blue Box.

Each version of **Ursula** on the Site Controller is tailored to initialize and run a specific version of OpenStack and IBM Blue Box Cloud, by setting up the proper environment variables and other aspects of your customized cloud configuration. The particular version of Ursula described in this document is 2.10, and the environment which it creates for your cloud is described in the next section.

**Software Environment Created by Ursula**

IBM Blue Box Cloud software is based on **Ubuntu 14.04** or **Cirros 0.3.3 x86_64** and the **Kilo** release of OpenStack, specifically including the Nova, Glance (backend points to Swift), Swift, Cinder (backed by Ceph clusters), Neutron L3 HA, Keystone, Horizon, Heat, LBaaS, and Ceilometer (+MongoDB) modules. The Cinder backing data storage is provided by Ceph clusters. Your cloud also will include some third-party software monitoring tools that work along with the OpenStack modules: Grafana, ELK, and Sensu.

Upon request, IBM will enable some additional enhanced features:

* - Deploying an OpenStack software load balancer (LBaaS) that is managed through Neutron (it requires the Dedicated Controller feature)
* - Integration with Urban Code Deployer (UCD) through an OpenStack Heat (Orchestration) plug-in.

**Hardware Environment and Monitoring**

The IBM Blue Box Cloud hardware substrate varies by offering. You can get more information about the Bill of Materials (BOM) from your IBM Blue Box Cloud service team.

You can use the **OpenStack Horizon** interface to monitor your cloud’s performance, or you can use a customized IBM Blue Box product, Box Panel, to view your cloud as well as your resource usage, your network configurations, and other features of your cloud.

Your purchase of IBM Blue Box Dedicated Cloud includes 24/7 technical support. The Box Panel product provides an interface for opening a support ticket. You also can call Blue Box Support at 1-800-613-4305 or email us at support@bluebox.net.
