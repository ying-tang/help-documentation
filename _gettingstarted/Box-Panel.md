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

To get started with Box Panel, you first need to log in. 

**To log into your Box Panel Account:**

1. Click the following URL to be directed to the login page: https://boxpanel.bluebox.net.
2. Log into your Box Panel account with the login credentials provided by the Blue Box Support Team. If you are a **Secondary** contact and don't yet have access, you can be added by an **Administrator**. See the **Managing Users and Projects** section for more details.
3. If you do not yet have a Box Panel account, refer to the **Billing** section to set up an account.
5. After logging in, you will be automatically directed to the Box Panel Dashboard UI.

## Navigating the Box Panel Dashboard

From the Box Panel Dashboard, you can see a consolidated asset view of all of your dedicated and local instances on one screen.

The top of the Dashboard displays the infrastructure currently being used with your list of hosts. 

![Image of Dashboard1](https://github.com/help-documentation/img/Dashboard1.png)

Right below, you can view your bandwidth usage and support tickets related to your cloud, along with your status. 

![Image of Dashboard 2](https://github.com/help-documentation/img/Dashboard 2.png)

On the right are additional details related to your account summary. 

## Managing Users and Projects

A **Project** is a group of resources that can be asssigned to a user or a group of users.

**Users** include the following four predefined roles: **cloud_admin**, **project_admin**, **\_member\_**, and **heat_stack_owner**. A fifth role, **heat_stack_user**, is assigned automatically. The table below contains the descriptions associated with each role.

|**Role**| **Description**
|:---------|:-----------
| **cloud_admin** | This role allows cloud-level access control. It lets you perform API execution tasks, irrespective of your project. This role can create and manage quotas, groups, users and projects, and it can perform administrative volume actions. 
| **project_admin** | This role allows project level access control. This user can perform user and project mangement within the specified project.
| **\_member\_** | This role lets the user utilize the resources (such as instances and volumes) that are allocated for the project.
| **heat_stack_owner** | This role lets the user create Heat stacks in the project. This role must be assigned manually, and it never should be assigned to a user that also is assigned the **heat_stack_user** role.
| **heat_stack_user** | This is a role automatically assigned by Heat to the users it creates. This role is restricted from all API access, and it never should be assigned to any user explicitly. 

With your IBM Blue Box Cloud installation you'll receive one user with `cloud_admin` privileges who can create other projects and users. The `cloud_admin` can grant users `cloud_admin` and lower privileged roles. The table below displays which features you are able to access, depending on your role.

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

Version 3 of the Keystone API with IBM Blue Box Cloud introduces the concept of **groups**. You can use groups to quickly and easily make multiple assignments simultaneously. For more information on Keystone v3, **groups** and use cases, please refer to the following document: help-documentation/_keystone/Managing_Users_and_Projects.md

## Creating a Project

As shown in the table above, only `cloud_admin` roles can create projects and users.

**To create a project:**

1. Click the **Identity** tab, then click **Projects**
2. Click the **Create Project** button.
3. Assign a **Project Name** and **Description** under the **Project Information** tab shown in the Modal window.
4. Assign **Users** to your project by clicking the search bar in the **Project Members** tab. Users can later be added and deleted.
5. Enter resource allocation information under the **Quotas** tab to set and customize quotas for the new project.
6. Click the **Create Project** button.

To add or delete a user, click the **Modify Users** drop-down under the **Actions** section.

**To create a new user:**

1. Click the **Identity** tab.
2. Click **Create User**.
3. Enter a user name and their email in the Modal window.
4. Assign a password.
5. Select the primary project you would like to add them to from the **Primary Project** drop-down.
6. Assign their role from the **Role** drop-down.
7. Confirm that you would like to create the user by clicking the **Create User** button.

## Disabling a Project

**Consequences of disabling projects:**
Users with the `cloud_admin` role can enable and disable projects. When you disable a project, it has these consequences:

- In the dashboard, users no longer have access to the project from the CURRENT PROJECT list on the Project tab.
- Users who are members of only the disabled project can no longer log in.
- You cannot launch instances for a disabled project. Instances that are running already are not terminated automatically. You must stop them manually.
- The data for a disabled project is maintained so that you can re-enable the project at any time.

To disable a project:

## Creating a Custom Flavor

In OpenStack, a **Flavor** is a template for describing the resource configuration of a Virtual Machine.

**To create a Custom Flavor:**

1. From the **Project** menu, click the **System** drop-down.
2. Click **Flavors**. Here you will see a list of your current **Flavors**.
3. Click the **Create Flavor** button.
4. Enter a name and assign custom configuration information.
5. If you would like to limit your **Flavor** to a specific project, click the **Flavor Access* tab, and click the **Plus** symbol to move your **Flavor** to the **Selected Projects** section.

## Adding a Virtual Machine 

**To add an asset or machine:**

1. From the **Project** menu, select **Instances**.
2. Click the **Launch Instance** button.
3. Enter an **Instance Name** in the Modal window.
4. Assign an **Instance Flavor** from the options in the drop-down menu. You can view **Flavor Details** when you select your option to receive feedback on whether you have enough quota to allow this machine to be built. If the **Instance Flavor** exceeds your consumption, you will be notified before creating your instance.
5. Select a **Boot Source**.
6. Under the **Access and Security** tab, enter autentication information.
7. Under the **Networking** tab, assign your machine to your **Selected Networks**. Your **Available Networks** will be shown in the drop-down menu.
8. Click **Launch Instance**.

On the **Instances** page, you find your machine from the list and select the **Actions** drop-down menu to manage your machine.

## Deleting a Virtual Machine

**To delete an asset or machine:** 

1. Visit the **Instances** page. 
2. As long as you have the proper permissions to delete an asset, you will have the ability to **Power Cycle** the machine’s PDUs, or **Delete Asset.** 
3. Confirm that you want to delete the asset by clicking **OK** from the Modal window. This will permanently delete your asset. 

![Image of Dashboard 3](https://github.com/help-documentation/img/Dashboard 3.png)

## Working with Cloud Images 

The **Cloud Images** page in Box Panel is available to customers who have at least one cloud, and are either a **Primary** or **Technical** customer contact. If you qualify as a user, the **Services** navigation will include a **Cloud Images** link with access to the page. 

![Image of Dashboard 4](https://github.com/help-documentation/img/Dashboard 4.png)

Each image is displayed as a card. Cards are grouped by operating system. 

**To download a Cloud Image:** 

1. Hover over the card associated with the image you would like to download. 
2. Click the card. This will open a modal window containing download links to the image and Checksum. 
3. Click the **copy** button to the left of the Image URL. This will add the URL to your clipboard. 
4. This can also be done using OpenStack APIs. For instructions, click here: https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/_gettingstarted/Cloud_Images_Provided_by_IBM.md 

![Image of Dashboard 5](https://github.com/help-documentation/img/Dashboard 5.png) 

## Managing Access and Security

A software-based firewall must be opened before the instance can receive external traffic.

**To set firewall rules:**

1. Click **Access and Security** from the **Compute** drop-down menu of your project.
2. Click the **Create Security Group** button.
3. Assign a name, then click the **Create Security Group** button from the Modal window.
4. From the main **Security Group Rules** list, find your new security group and click the **Manage Rules** button. You can also delete a rule from this view.
5. Add a single **Rule** to the **Port** that your Virtual Machines are members of the security group.
6. Click the **Add** button.

To receive internet traffic, you must also assign a **Floating IP** that routes to your machine.

**To assign a Floating IP:**

1. Click **Instances** from the **Compute** drop-down menu of your project.
2. Find your Virtual Machine, then select **Edit Instance**.
3. From the Modal window, add your **Security Group**.
4. Click the **Save** button.
5. From the **Actions** menu on your instance, click **Associate Floating IP**.
6. From the Modal window, click **+** to assign a **Floating IP** that routes from the **Pool**.
7. Click **Associate**.
8. In the next Modal window, select the **Floating IP** from your **Pool**.
9. Click **Allocate IP**.

## Managing Support Tickets 

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

## HIPAA Compliance Reporting

For customers with a HIPAA-enabled cloud, you can access HIPAA compliance features, including security compliance reporting, from your Box Panel Dashboard.

## Managing Billing 

To view your contracts and monthly billing reports, simply click the **Account** tab in the Box Panel Dashboard, then click the **Billing** tab.

**To become a new customer:**

1. Provide the Blue Box Support team with the billing manager’s name, email, and contact information associated with your company.
2. After your company’s billing information is received by the IBM Finance, a contract will be created based on your requirements. Every IBM customer has a CFTS (customer fulfillment) account assigned. These are documented and written on your contract. 
3. A billing start date will be set in order for your solution to begin to be billed (typically the start date is the same as your deployment date, and repeats monthly).

Once you’re able to log into Box Panel, you can view your billing information by selecting **Billing** under the **Account** drop-down menu. From here, you can view your **Account Services** and **Billing History**.

By clicking **Billing History**, you can download all of your invoices and save them in PDF format.

For further billing support, please contact the Blue Box Support Team, and we will be happy to assist you.
To add additional line items to your infrastructure, we also invite you to contact the Blue Box Support Team. We will create a new contract and help with your setup process in any way that we can.
