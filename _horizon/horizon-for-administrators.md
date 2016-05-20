---
layout: page
title:  "Horizon for Administrators"
tags: [horizon, administrator]
dateAdded: April 9th, 2015
author: Eric French
featured: false
weight: 4
---

**Administration in Horizon**

In addition to Horizon's standard **OpenStack** management features, `admin` users have access to an `admin` tab on the left navigation area, providing access to the **System Panel** and **Identity Panel**. Let's look at what features are offered in these sections.

![Identity Panel]({{site.baseurl}}/img/Identity_Panel.png)

**Identity Panel**
Let's start at the bottom with the **Identity Panel**, which enables `admin` users to administer the Keystone service. In this panel, you create and delete users, projects, groups and roles.

Key terms are:

**User** : Digital representation of a person, system or service who uses OpenStack cloud services.

**Project/Tenant** : A container used to group or isolate resources and/or identity objects.

**Role**: A personality that a user assumes that enables them to perform a specific set of operations.

Users are assigned a *role*. Then they are assigned to a *project* that has a predefined *quota* of resources.

**System Panel**

Back at the top, the **System Panel** provides details about the state of your private **OpenStack** cluster. Let's take a look at the most commonly used options.

1. **Overview**: This option provides a list of all projects currently running on your private **OpenStack** cluster. The **Overview** also describes the number of vCPUs, amount of RAM and disk being consumed by each project, as well as disk and vCPU hours for each project.

2. **Hypervisor**: The Hypervisor option provides insight into the machines that undergird your **OpenStack** private cloud. Navigate here to see capacity and usage metrics for each hypervisor.

3. **Instances and Volumes**: These options allow you to get more detail about all running instances and volumes in your IBM Blue Box Cloud. You can also delete instances and volumes from these pages.

4. **Flavors and Images**: Create your own flavors and upload custom images. Be sure to set access to public so these new flavors and images are available within your projects.

5. **Defaults**: Set the quota set by default for all new tenants.

6. **System Info**: Review details about all services available and running on your **OpenStack** private cloud. It is also possible to check the status of a given service from this menu.
