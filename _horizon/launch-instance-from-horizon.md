---
layout: page
title:  "How to launch an instance from Horizon"
tags: [horizon, instance, launch]
dateAdded: June 1, 2016
author: Ying Tang
featured: false
weight: 4
---


1. Log in to the Horizon dashboard.
2. Under the Project topic, expand **Compute** and click **Instances**. You can view a list of instances with their details such as name, IP address, and status. 
3. Click **Launch Instance**.
4. Enter the following values.

* The **Details** tab

| **Values             | **Description** 																																																																																															    | 
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Availability Zone    | By default, this value is set to the availability zone given by the cloud provider (for example, us-west or apac-south). It could be nova.																																																																		|
| Instance Name        | Assign a name to the virtual machine. Note: The name that you assign here becomes the initial host name of the server. After the server is built, changes to this name are not updated in the dashboard (if you change the server name in the API or if you change the host name directly). Server names are not guaranteed to be unique when created so you could have two instances with the same host name. |
| Flavor               | Specify the size of the instance to launch. The flavor must have enough resources to fit the image you are selecting. The Flavor Details table displays the details of the selected flavor.																																																				    |
| Instance Count	   | To launch multiple instances, enter a value greater than 1. The default is 1.																																																																															        |
| Instance Boot Source | See the descriptions under this table.																																																																																										    |
| Image Name           | This field changes based on your previous selection. Since you have chosen to launch an instance using an image, the Image Name field displays. Select the image name from the dropdown list.																																																			        |

You have the following options with *Instance Boot Source**:

* Boot from image: If you choose this option, a new field for Image Name displays. You can select from the list of private and public images.
* Boot from snapshot: If you choose this option, a new field for Instance Snapshot displays. You can select the snapshot from the list.
* Boot from volume: If you choose this option, a new field for Volume displays. You can select the volume from the list.
* Boot from image (creates a new volume): With this option, you can boot from an image and create a volume by entering the Device Size and Device Name for your volume. Click the Delete on Terminate option to delete the volume on terminating the instance.
* Boot from volume snapshot (creates a new volume): Using this option, you can boot from a volume snapshot and create a new volume by choosing Volume Snapshot from a list and adding a Device Name for your volume. Click the Delete on Terminate option to delete the volume on terminating the instance.

Since you are launching an instance from an image, Boot from image is chosen by default.

* The **Access & Security** Tab

| **Values **      | **Description** 																																																																							 | 
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Key pair	       | Specify a key pair. A list of stored key pairs are displayed to you to choose from or you can create and store a new key pair by clicking the + sign. If the image uses a static root password or a static key set (neither is recommended), you do not need to provide a key pair to launch the instance.  |
| Security Groups  | The default security group is automatically selected.              																																																										 |       
 
* The **Network** tab

| **Values**         | **Description** 																	   |	
|--------------------|-------------------------------------------------------------------------------------|          
| Selected Networks  | To add a network to the instance, click the + sign in the Available Networks field. |

* The **Post-Creation** tab
	
  For Linux instances: To enable password authentication through console and SSH, use the following script data for the Customization Script (with the relevant password in place of <YOUR_PASSWORD> ):

	```
	#cloud-config password: <YOUR_PASSWORD> chpasswd: { expire: False } ssh_pwauth: True
	```
  For Windows instances: To set the initial username and password, use the following script data for the Customization Script (with the relevant username and password in place of _<YOUR_USERNAME>_ and _<YOUR_PASSWORD>_).

	```
	rem cmd
	net user <YOUR_USERNAME> <YOUR_PASSWORD> /logonpasswordchg:yes /add /y
	net localgroup administrators <YOUR_USERNAME> /add
	```
  **Note**: If your password contains any of the cloud-init control characters (& < > ^ | ), you must escape the character by adding the ^ character. For example, if your password is MySecret&123, you must enter MySecret^&123 in the command. You also need to add /y at the end of the second line if your password is longer than 14 characters.

* The **Advanced Options** tab

| **Values**         | **Description** 																	   |	
|--------------------|-------------------------------------------------------------------------------------|  
| Disk Partition     | Select the type of disk partition from the dropdown list                            |
	
You have two options:

  * Automatic: Entire disk is single partition and automatically resizes.
  * Manual: Faster build times but requires manual partitioning.

		
![Launch an instance]({{site.baseurl}}/img/launch_instance_from_image.png)
