--- 

layout: page 

title: "WIP - Box Panel User Guide" 

featured: false 

weight: 2 

tags: [getting started, Box Panel] 

author: Jill Tempelmeyer 

dateAdded: April 14, 2016 

--- 


# Getting Started with Box Panel

The Box Panel interface provides a single, consolidated view of your enterprise assets deployed in both Dedicated and Local environments. Based on OpenStack Horizon, its self-service access enables users to easily create support tickets, leverage central authentication, monitor reporting functions, and access their invoicing solutions. 

This user guide provides an end-to-end overview to help you get started using Box Panel Version 3.8.3 with your IBM Blue Box Cloud. 

## Logging In 

Box Panel's Keystone v3 identity authentication feature enables both **Primary (Administrator)** and **Secondary (Technical)** contacts to log in.

1. To get started, click the following URL to be directed to the login page: https://boxpanel.bluebox.net.
2. Log into your Box Panel account with the login credentials provided by the Blue Box Support Team. If you are a **Secondary** contact and don't yet have access, you can be added by an **Administrator**. See the **Managing Users and Projects** section for more details.
3. If you do not yet have a Box Panel account, refer to the **Billing** section to set up an account.
5. After logging in, you will be automatically directed to the Box Panel Dashboard UI.

## Navigating the Box Panel Dashboard

The top of the Dashboard displays the infrastructure currently being used with your list of hosts. 

![Image of Dashboard1](https://github.com/help-documentation/img/Dashboard1.png)

Right below, you can view your bandwidth usage and support tickets related to your cloud, along with your status. 

![Image of Dashboard 2](https://github.com/help-documentation/img/Dashboard 2.png)

On the right are additional details related to your account summary. 

## Managing Users and Projects

Your IBM Blue Box Cloud installation comes with four predefined roles: **cloud_admin**, **project_admin**, **\_member\_**, and **heat_stack_owner**. A fifth role, **heat_stack_user**, is assigned automatically. The table below contains the descriptions associated with each role.

|**Role**| **Description**
|:---------|:-----------
| **cloud_admin** | This role allows cloud-level access control. It lets you perform API execution tasks, irrespective of your project. This role can create and manage quotas, groups, users and projects, and it can perform administrative volume actions. 
| **project_admin** | This role allows project level access control. This user can perform user and project mangement within the specified project.
| **\_member\_** | This role lets the user utilize the resources (such as instances and volumes) that are allocated for the project.
| **heat_stack_owner** | This role lets the user create Heat stacks in the project. This role must be assigned manually, and it never should be assigned to a user that also is assigned the **heat_stack_user** role.
| **heat_stack_user** | This is a role automatically assigned by Heat to the users it creates. This role is restricted from all API access, and it never should be assigned to any user explicitly. 

With your IBM Blue Box Cloud installation you'll receive one user with `cloud_admin` privileges who can create other projects and users. The `cloud_admin` can grant users `cloud_admin` and lower privileged roles.

Identity Feature | cloud_admin | project_admin (within project) |  \_member\_
---------------- | ----------- | ------------------------------ | -----------
**Users** |||
Create user     | Y | Y | N
Update user     | Y | Y | Y (Self)
Get user        | Y | Y | Y (Self)
Delete user     | Y | Y | N
Change password | Y | Y | Y (Self)
List user       | Y | Y | N
**Roles** |||
Create role     | N | N | N
Update role     | N | N | N
Get role        | Y | Y | N
Delete role     | N | N | N
List role       | Y | Y | N
**Projects** |||
Create project  | Y | N | N
Update project  | Y | Y | N
Get project     | Y | Y | Y
Delete project  | Y | N | N
List projects   | Y | Y | N
List user projects  | Y | Y | Y (Self)
List users within projects  | Y | Y | N
**Groups** |||
Create, update, or delete group | Y | N |  N
Get group       | Y | Y | Y
List groups     | Y | Y | N
List groups for user  | Y | Y | Y (Self)
List users in group | Y  | Y | Y
Add or remove user from group | Y | Y| N

Compute Feature | cloud_admin | project_admin (within project) |  \_member\_
--------------- | ----------- | ------------------------------ | -----------
Create instance | Y | Y | Y
Delete instance | Y | Y | Y
Attach network  | Y | Y | Y
Attach volume   | Y | Y | Y
Start/Stop instance | Y | Y | Y (owner)
List instance   | Y | Y | Y 
Lock/Unlock instance    | Y | Y | N
Create flavor   | Y | N | N
Update flavor   | Y | N | N
Delete flavor   | Y | N | N
Update quotas   | Y | N | N
Delete quotas   | Y | N | N
List quotas     | Y | Y | Y

Volume Feature | cloud_admin | project_admin (within project) |  \_member\_
--------------- | ----------- | ------------------------------ | -----------
**Volumes** |||
Create volume   | Y | Y | Y
Extend volume   | Y | Y | Y
Get volume      | Y | Y | Y
List volumes    | Y | Y | Y
Delete volume   | Y | Y | Y
Add project access  | Y | N | N
Remove project access | Y | N | N
**Snapshots** |||
Create snapshot | Y | Y | Y
List snapshots    | Y | Y | Y
Delete snapshot | Y | Y | Y
**Transfers** |||
Create transfer | Y | Y | Y
Accept transfer | Y | Y | Y
Delete transfer | Y | Y | Y
List transfer s | Y | Y | Y
**Backups** |||
Create backup | Y | Y | Y
Delete backup | Y | Y | Y
List backups  | Y | Y | Y
Import backup | Y | N | N
Export backup | Y | N | N

Image Feature | cloud_admin | project_admin (within project) |  \_member\_
--------------- | ----------- | ------------------------------ | -----------
Create image    | Y | Y | Y
Delete image    | Y | Y | Y
List images     | Y | Y | Y
Download image  | Y | Y | Y
Upload image    | Y | Y | Y
Publicize image | N | N | N
Manage image cache | N | N | N

Network Feature | cloud_admin | project_admin (within project) |  \_member\_
--------------- | ----------- | ------------------------------ | -----------
Create network  | Y | Y | Y
Create shared network | N | N | N
Update network  | Y | Y | Y (owner)
Delete network  | Y | Y | Y (owner)
Create port     | Y | Y | Y
Update port     | Y | Y | Y (owner)
Delete port     | Y | Y | Y (owner)
Create router   | Y | Y | Y 
Update router   | Y | Y | Y (owner)
Delete router   | Y | Y | Y (owner)
Create subnet   | Y | Y | Y (network owner)
Update subnet   | Y | Y | Y (owner)
Delete subnet   | Y | Y | Y (owner)
Create floating IP  | Y | Y | Y
Delete floating IP  | Y | Y | Y

Object Storage Feature | cloud_admin | project_admin (within project) |  \_member\_
---------------------- | ----------- | ------------------------------ | -----------
**Accounts** |||
Create account | Y | N | N
Delete account | Y (enabled) | N | N
**Containers** |||
Create container | Y | Y | N
Update container | Y | Y | N
Delete container | Y | Y | N
**Objects** |||
Create object    | Y | Y | Y
Update object    | Y | Y | Y
Download object  | Y | Y | Y
Delete object    | Y | Y | Y

**Requirements:**

* This role structure requires Keystone API v3 to run. Using API v2.0 will result in a loss of privileges for the `cloud_admin` and `project_admin` roles, in addition to erratic permissions behavior for `_member_` users.

* Making API calls through the Horizon dashboard does not require any special action, but performing command line calls necessitates changes to the RC file. Currently, the dashboard-generated RC files enables Keystone v2.0. Switching to v3 requires changes to the standard RC file. The `OS_AUTH_URL` must be changed from `v2.0` to `v3`, and the `OS_IDENTITY_API_VERSION` must be created and set to `3`. A sample RC file is shown below.

{% highlight bash %}

export OS_PASSWORD=pass
export OS_AUTH_URL=https://example.ibm.com:5000/v3
export OS_USERNAME=cloud_admin
export OS_TENANT_NAME=demo
export OS_CACERT=/opt/stack/ssl/openstack.crt
export OS_NO_CACHE=True
export OS_VOLUME_API_VERSION=2
export OS_COMPUTE_API_VERSION=2
export OS_IDENTITY_API_VERSION=3
{% endhighlight %}

* Additionally, Keystone functions must be performed using the new `python-openstackclient` CLI. This can be installed by running `sudo pip install python-openstackclient`.

### Using the Keystone v3 group function 

The version 3 of the Keystone API with IBM Blue Box Cloud introduces the concept of **groups**. You can use groups to quickly and easily make multiple assignments simultaneously.

For example, you might have a support team that needs access to every project in your environment. Instead of individually adding each member to every project, you can create a group called **Support**, give the group the `_member_` role on all of your projects, and then add all of your support staff to the group.

Another common use case would be to create a `cloud_admin` group that is given the `cloud_admin` role on every project on the environment. This arrangement lets the `cloud_admin` elevate a user’s privileges easily, by temporarily adding them to the `cloud_admin` group. It could be used in situations like vacation coverage.

You can see the difference in approach by these two illustrations.

![User Management With Roles](http://open.ibmcloud.com/documentation/_images/UserManagementWithRoles.gif)

This figure shows an example of traditional role assignments as supported by the Keystone v2 API. The `cloud_admin` user has the `cloud_admin` role for Project 1, Project 2, and Project 3. User 1 has the `project_admin` role for Project 2. User 2 and Support User 1 have the `_member_` role for Project 2. Support User 1 also has the `_member_` role for Project 3.

![User Management with Groups](http://open.ibmcloud.com/documentation/_images/UserManagementWithGroups.gif)

##Disabling a Project

**Consequences of disabling projects:**
Users with the `cloud_admin` role can enable and disable projects. When you disable a project, it has these consequences:

- In the dashboard, users no longer have access to the project from the CURRENT PROJECT list on the Project tab.
- Users who are members of only the disabled project can no longer log in.
- You cannot launch instances for a disabled project. Instances that are running already are not terminated automatically. You must stop them manually.
- The data for a disabled project is maintained so that you can re-enable the project at any time.

To disable a project:

##Set quotas for the new project

##Creating a Custom Flavor

## Add a Virtual Machine 

(Will Edit this Section) 

## Delete a Virtual Machine

**To delete an asset or machine:** 

1. Visit the **Machine** page. 
2. As long as you have the proper permissions to delete an asset, you will have the ability to **Power Cycle** the machine’s PDUs, or **Delete Asset.** 
3. Confirm that you want to delete the asset by clicking **OK** from the Modal window. This will permanently delete your asset. 

![Image of Dashboard 3](https://github.com/help-documentation/img/Dashboard 3.png)

## Working with Cloud Images 

The **Cloud Images** page in Box Panel is available to customers who have at least one cloud, and are either a **Primary** or **Technical** customer contact. If you qualify as a user, the **Services** navigation will include a **Cloud Images** link with access to the page. 

![Image of Dashboard 4](https://github.com/help-documentation/img/Dashboard 4.png)

Each image is displayed as a card. Cards are grouped by operating system. 

**Downloading a Cloud Image:** 

1. Hover over the card associated with the image you would like to download. 
2. Click the card. This will open a modal window containing download links to the image and Checksum. 
3. Click the **copy** button to the left of the Image URL. This will add the URL to your clipboard. 
4. This can also be done using OpenStack APIs. For instructions, click here: https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/_gettingstarted/Cloud_Images_Provided_by_IBM.md 

![Image of Dashboard 5](https://github.com/help-documentation/img/Dashboard 5.png) 

## Manage Support Tickets 

By clicking on a support ticket from the Dashboard, you can see the text of the associated ticket. This text includes additional ticket, as well as chat history and correspondence related to the selected ticket. The status of the support ticket is highlighted on the orange button in the top left corner. 

![Image of Dashboard 6](https://github.com/help-documentation/img/Dashboard 6.png) 

From the panel on the left-hand side, you have options to create a new support ticket, subscribe to the ticket you have selected if you want to follow its status, view your tickets, and view all tickets submitted by shared users on your account. 

To view a list of Subscribers for a selected ticket, simply click on the **Subscribers** link. 

![Image of Dashboard 7](https://github.com/help-documentation/img/Dashboard 7.png)

To have a conversation with one of our Blue Box support team experts, you can click the green **Post Reply** button, or use the chat feature. 

**To create a ticket:**

1. Open a new ticket from the **Support** page. 

![Image of Dashboard 8](https://github.com/help-documentation/img/Dashboard 8.png)

2. In the Modal window, your name should show up as the **Ticket Creator.**
3. Copy additional users in the **CC** field to make them aware of the ticket and track its status. 
4. Add a descriptive subject to the ticket. 
5. Collect and add all useful information to the **Description** section, such as: 
   * Date and time the issue began 
   * Frequency of the issue (permanent or constant, at a particular time of day, etc.) 
   * Steps you have taken to replicate the issue 
   * Affected server name(s) 
   * Affected data center(s) 
   * Any error messages returned
   * Applicable server logs 
   * Any additional useful information 
6. Include attachments, such as log files, right below the **Description** section. 
7. If your deployment is for a new cloud, check the **Deployment** box.

![Image of Dashboard 9](https://github.com/help-documentation/img/Dashboard 9.png)

**Note: Steps 8 and 9 can be skipped for non-urgent concerns.**

 8. If the issue is urgent, you can check the **Open this Ticket as Urgent** box to escalate the ticket. This will prompt an acknowledgement that you will consent to pay consulting charges if the issue is non-critical (critical items would include situations in which there are outages). 
 9. If you wish to open your ticket as **Urgent** and consent to pay the consulting charges for non-critical items, check the **I Agree** box. 
 10. Finally, click the **Create Ticket** box. 

**Note: For additional support, you can call Blue Box Support at 1-800-613-4305 or email us at support@bluebox.net.**

## ManagingUpdat Billing 

To view your contracts and monthly billing reports, simply click the **Billing** tab in the Box Panel Dashboard. Additional contracts with line items can be added by contacting Blue Box Support, and can be found under the same **Billing** tab.

**To become a new customer:**

1. Provide the Blue Box Support team with the billing manager’s name, email, and contact information associated with your company.
2. After your company’s billing information is received by the IBM Finance, a contract will be created based on your requirements. Every IBM customer has a CFTS (customer fulfillment) account assigned. These are documented and written on your contract. 
3. A billing start date will be set in order for your solution to begin to be billed (typically the start date is the same as your deployment date, and repeats monthly).
4. Once you’re able to log into Box Panel, you can view the billing contact's information under the **Account Vitals** section. 

## Professional Services 

(Edit) 

**More sections to be added**

