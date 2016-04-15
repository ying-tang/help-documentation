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

1. To get started, log into your Box Panel account the login credentials provided by the Blue Box Administrative Support Team. The following URL will direct you to the login page: https://boxpanel.bluebox.net 
2. If you do not yet have a Box Panel account, refer to the **Billing** section to set up an account.
3. Box Panel's central authentication feature enables both **Primary** and **Secondary (Technical)** contacts to log in. If you are a **Secondary** contact and need login credentials to your organization's Box Panel account, have a team member open a support ticket that includes your contact information.
4. After logging in, you will be automatically directed to the Box Panel Dashboard UI. 

## Navigating the Box Panel Dashboard

The top of the Dashboard displays the infrastructure currently being used with your list of hosts. 

(screenshot 1) 

Right below, you can view your bandwidth usage and support tickets related to your cloud, along with your status. 

(screenshot 2) 

On the right are additional details related to your account summary. 

## Adding a Virtual Machine 

(Will Edit this Section) 

## Deleting a Virtual Machine

**To delete an asset or machine:** 

1. Visit the **Machine** page. 
2. As long as you have the proper permissions to delete an asset, you will have the ability to **Power Cycle** the machine’s PDUs, or **Delete Asset.** 
3. Confirm that you want to delete the asset by clicking **OK** from the Modal window. This will permanently delete your asset. 

(Screenshot 3) 

## Working with Cloud Images 

The **Cloud Images** page in Box Panel is available to customers who have at least one cloud, and are either a **Primary** or **Technical** customer contact. If you qualify as a user, the **Services** navigation will include a **Cloud Images** link with access to the page. 

(Screenshot 4) 

Each image is displayed as a card. Cards are grouped by operating system. 

**To download a Cloud Image:** 

1. Hover over the card associated with the image you would like to download. 
2. Click the card. This will open a modal window containing download links to the image and Checksum. 
3. Click the **copy** button to the left of the Image URL. This will add the URL to your clipboard. 
4. This can also be done using OpenStack APIs. For instructions, click here: https://github.com/IBM-Blue-Box-Help/help-documentation/blob/gh-pages/_gettingstarted/Cloud_Images_Provided_by_IBM.md 

(Screenshot 5) 

## Managing Support Tickets 

By clicking on a support ticket from the Dashboard, you can see the text of the associated ticket. This text includes additional ticket, as well as chat history and correspondence related to the selected ticket. The status of the support ticket is highlighted on the orange button in the top left corner. 

(Screenshot 6) 

From the panel on the left-hand side, you have options to create a new support ticket, subscribe to the ticket you have selected if you want to follow its status, view your tickets, and view all tickets submitted by shared users on your account. 

To view a list of Subscribers for a selected ticket, simply click on the **Subscribers** link. 

(Screenshot 7) 

To have a conversation with one of our Blue Box support team experts, you can click the green **Post Reply** button, or use the chat feature. 

### Creating a Ticket 

**To create a ticket:**

1. Open a new ticket from the **Support** page. 

(Screenshot 8) 

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

(Screenshot 9) 

**Note: Steps 8 and 9 can be skipped for non-urgent concerns. **

8. If the issue is urgent, you can check the **Open this Ticket as Urgent** box to escalate the ticket. This will prompt an acknowledgement that you will consent to pay consulting charges if the issue is non-critical (critical items would include situations in which there are outages). 
9. If you wish to open your ticket as **Urgent** and consent to pay the consulting charges for non-critical items, check the **I Agree** box. 
10. Finally, click the **Create Ticket** box. 

**Note: You also can call Blue Box Support at 1-800-613-4305 or email us at support@bluebox.net.**

## Managing Billing 

To view your contracts and monthly billing reports, simply click the **Billing** tab in the Box Panel Dashboard. Additional contracts with line items can be added by contacting Blue Box Support, and can be found under the same **Billing** tab.

**To become a new customer:**

1. Provide the Blue Box Support team with the billing manager’s name, email, and contact information associated with your company.
2. After your company’s billing information is received by the IBM Finance, a contract will be created based on your requirements. Every IBM customer has a CFTS (customer fulfillment) account assigned. These are documented and written on your contract. 
3. A billing start date will be set in order for your solution to begin to be billed (typically the start date is the same as your deployment date, and repeats monthly).
4. Once you’re able to log into Box Panel, you can view the billing contact's information under the **Account Vitals** section. 

## Professional Services 

(Edit) 

**More sections to be added**

