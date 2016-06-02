---
layout: page
title:  "How to launch an instance from Horizon"
tags: [horizon, instance, launch]
dateAdded: June 1, 2016
author: Ying Tang
featured: false
weight: 4
---

## How to launch an instance from Horizon

### Steps
1. Log in to the Horizon dashboard.
2. Under the Project topic, expand **Compute** and click **Instances**. You can view a list of instances with their details such as name, IP address, and status. 
3. Click **Launch Instance**.
4. Enter the following values in different tabs.

![Launch an instance]({{site.baseurl}}/img/launch_instance_from_image.png)

### Values in Lauch Instance tabs

#### The Details tab

| **Values**           | **Description** 																																																																																															    | 
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Availability Zone    | By default, this value is set to the availability zone given by the cloud provider (for example, us-west or apac-south). It could be nova.																																																																		|
| Instance Name        | Assign a name to the virtual machine. Note: The name that you assign here becomes the initial host name of the server. After the server is built, changes to this name are not updated in the dashboard (if you change the server name in the API or if you change the host name directly). Server names are not guaranteed to be unique when created so you could have two instances with the same host name. |
| Flavor               | Specify the size of the instance to launch. The flavor must have enough resources to fit the image you are selecting. The Flavor Details table displays the details of the selected flavor.																																																				    |
| Instance Count	   | To launch multiple instances, enter a value greater than 1. The default is 1.																																																																															        |
| Instance Boot Source | See the descriptions under this table.																																																																																										    |
| Image Name           | This field changes based on your previous selection. Since you have chosen to launch an instance using an image, the Image Name field displays. Select the image name from the dropdown list.																																																			        |

You have the following options with the **Instance Boot Source** field:

* **Boot from image**: If you choose this option, a new field for Image Name displays. You can select from the list of private and public images.
* **Boot from snapshot**: If you choose this option, a new field for Instance Snapshot displays. You can select the snapshot from the list.
* **Boot from volume**: If you choose this option, a new field for Volume displays. You can select the volume from the list.
* **Boot from image** (creates a new volume): With this option, you can boot from an image and create a volume by entering the Device Size and Device Name for your volume. Click the Delete on Terminate option to delete the volume on terminating the instance.
* **Boot from volume snapshot** (creates a new volume): Using this option, you can boot from a volume snapshot and create a new volume by choosing Volume Snapshot from a list and adding a Device Name for your volume. Click the Delete on Terminate option to delete the volume on terminating the instance.

**Boot from image** is chosen by default. You can select from default images, or use your own image. For information about how to upload an image to IBM Blue Box, see [Cloud images provided by IBM Blue Box](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/Cloud_Images_Provided_by_IBM/). 

#### The Access & Security tab

| **Values**       | **Description** 																																																																							 | 
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key pair	       | Specify a key pair. A list of stored key pairs are displayed to you to choose from or you can create and store a new key pair by clicking the + sign. If the image uses a static root password or a static key set (neither is recommended), you do not need to provide a key pair to launch the instance.  |
| Security Groups  | The default security group is automatically selected.              																																																										 |       
 
#### The Network tab

| **Values**         | **Description** 																	   |	
|--------------------|-------------------------------------------------------------------------------------|          
| Selected Networks  | To add a network to the instance, click the + sign in the Available Networks field. |


#### The Post-Creation tab
	
For Linux instances: To enable password authentication through console and SSH, use the following script data for the Customization Script (with the relevant password in place of `<YOUR_PASSWORD>`):

	#cloud-config password: <YOUR_PASSWORD> chpasswd: { expire: False } ssh_pwauth: True

	
For Windows instances: To set the initial username and password, use the following script data for the Customization Script (with the relevant username and password in place of `<YOUR_USERNAME>` and `<YOUR_PASSWORD>`).

	rem cmd
	net user <YOUR_USERNAME> <YOUR_PASSWORD> /logonpasswordchg:yes /add /y
	net localgroup administrators <YOUR_USERNAME> /add
	
#### The Advanced Options tab

| **Values**         | **Description** 																	   |	
|--------------------|-------------------------------------------------------------------------------------|  
| Disk Partition     | Select the type of disk partition from the drop-down list.                          |
	
You have two options:

* **Automatic**: Entire disk is single partition and automatically resizes.
* **Manual**: Faster build times but requires manual partitioning.

## How to connect to your instance

**Note:** Ensure that proper security group rules are defined for connecting to your instance over `ssh` or `rdp`.

1. Log in to the IBM Blue Box Cloud OpenStack dashboard.

2. Expand the **Project** panel, then the **Compute** tab in the left navigation area, and click on **Instances**.

3. Locate your instance in the list of running instances and note its IP address, such as `192.168.100.237`.

4. Create a connection to your instance by specifying its IP address.

![Locate your instance from the instance list]({{site.baseurl}}/img/locate_instance_from_list.png)

### Connecting to Linux instances
  
Connect to your instance through SSH or VNC. The default `userid` for the Linux images provided by IBM is **ibmcloud**. Once connected to your Linux instance, you can use the `sudo` command to execute commands that normally require root access. Sudo is configured not to require a password for the default `userid`.

* Use your favorite SSH client and open a connection to the correct IP address of the VM instance, using the private SSH key of the keypair that you specified during provisioning:
	 
	```  
	ssh -i <path_of_Your_SSH_private_key_file> <userid>@<ip_of_instance>
	```
	
* View the VNC console of the instance by clicking on the instance name in the IBM Blue Box Cloud OpenStack dashboard, and then click on the **Console** tab. The VNC console connects you with HTTPS.
  
  ![View the VNC console of your instance]({{site.baseurl}}/img/view_VNC_console.png)

**Note:** To be able to log in via the console to a new Linux instance as `ibmcloud` user, you must have specified a password in the Customization Script during provisioning.
  
### Connecting to Windows instances

Connect to your instance through Remote Desktop or VNC. You'll need to use the `userid` and `password` specified in the Customization Script during VM provisioning. On your first login, a prompt appears, requesting that you change your password. Please do.

* Use your favorite Remote Desktop client to connect.
* View the VNC console of the instance by clicking on the instance name in IBM Blue Box Cloud OpenStack dashboard, and then click on the **console** tab. The VNC console connects you with HTTPS.

 
## How to stop, start, pause, suspend, and restart an existing instance

Under the **Project** topic expand **Compute** and click **Instances**.

The dashboard displays the list of created instances for the current project. In the Actions column there is a **More** button that will display other options:

* Pause instance: pauses the instance and saves its state on memory. This option keeps the resources (vCPUs and memory).
* Suspend instance: suspends the instance and saves its state to the disk. This option frees up resources (vCPUs and memory).
* Soft Reboot instance: performs a graceful shutdown and restart of the instance.
* Hard Reboot instance: performs the equivalent of a power reset of the server.

Click the proper option for the operation you need to apply.

## How to view the VNC console

Under the **Project** topic expand **Compute** and click **Instances**.

The dashboard displays the list of created instances for the current project. To view the VNC console of an instance, click on the name of the instance.

## How to delete an instance

Under the **Project** topic expand **Compute** and click **Instances**.

There are two ways to terminate or delete an instance:

* In the Instances list, select the ones you want to delete and click **Terminate Instances**.
* In the Actions column there is a **More** button that displays other options for each instance. Click **Terminate Instance**.

A confirmation dialog appears where you can click **Terminate Instances**.

 

