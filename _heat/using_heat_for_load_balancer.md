---
layout: page
title:  "Using Heat for provision servers with load balancer"
tags: [heat, load balancer, stack]
dateAdded: May 11th, 2016
featured: false
weight: 5
---

You can provision instances with load balancer to provide load balancing for your service. This enables your service, such as a website, to distributes workloads across multiple cloud instances and thus increases efficiency by optimizing resources to support huge concurrent access. Moreover, load balancer implements High Availability (HA) to provide better reliability as access requests are redirected to other active VMs when the target VM is down.

This topic demonstrates the steps to provision instances with load balancer based on Heat by using a predefined Heat Orchestration Template. The following steps lead you to upload and launch the template in the Stacks panel on Horizon, which automatically creates two new instances as well as load balancer pools, VIP, and members on the two instances. You can then access the web services on the two instances via VIP.

Download the [Heat Orchestration Template](Heat_Orchestration_Template_LB.yaml) before you proceed and you can modify the template according to your needs. For more information on how to create and modify templates, see [Heat Orchestration Template (HOT) Guide](http://docs.openstack.org/developer/heat/template_guide/hot_guide.html).

## Create Stack

Follow these steps to upload and launch the Heat Orchestration Template downloaded.

1. Log on to Horizon with a user account with heat_stack_owner role.
2. Click **Project** -> **Orchestration** -> **Stacks** from the navigation panel.
3. Click **Launch Stack**.
4. On the Select Template page, choose **File** as Template Source. Click **Browse** to upload the Heat Orchestration Template, and then click **Next**.
5. Optionally, you can specify environment source as file or direct input. For more information about using environment file, see [Environment](http://docs.openstack.org/developer/heat/template_guide/environment.html). 
6. On the Launch Stack page, input a Stack Name and a Creation Timeout period.
7. You can replace the default image, availability zone, network_server, network_subnet_lb_pool, and flavor set in the Heat Orchestration Template by inputting the values in the corresponding fields.
8. Click **Launch**.

## Monitor Stack

Follow these steps to verify the HA feature implemented by load balancers on the VMs created in the previous section.

1. Log on to Horizon with a user account with heat_stack_owner role.
1. Click **Project** -> **Network** -> **Load Balancers** and find the load balancer that you created in the previous section.
1. Find the IP address of the load balancer.
1. Type the IP address in a web browser to open the webpage.
1. Shut down one instance which is created by Stack.
1. Refresh the browser, and you can see that the web service is still on.

## Remove Stack

Follow these steps to remove a stack.

1. Log on to Horizon with a user account with heat_stack_owner role.
1. Click **Project** -> **Orchestration** -> **Stacks** from the navigation panel.
1. Click the **Delete Stack** link for the stack that you want to remove.
1. Click **Delete Stack** on the pop up window to confirm the action.

