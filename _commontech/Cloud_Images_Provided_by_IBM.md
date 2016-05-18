---
layout: page
title: Cloud images provided by IBM Blue Box
featured: false
weight: 13
tags: [getting started, images, glance, image-create, instance]
dateAdded: March 9th, 2016
author: Yanqi Dou
editor: Leslie Lundquist, Niraj Patel
---

## Pre-requisites

1. If you are planning to use the command line (CLI) tools, be sure that you have the OpenStack Glance Client installed. You can find installation instructions in our knowledge base: [Getting started with the OpenStack API](http://ibm-blue-box-help.github.io/help-documentation/openstack/api/openstack-api-getting-started/).

2. Ensure you have access to Box Panel, so you can get the temporary download URLs for the IBM-provided cloud images.

3. Uploading an image to Glance using `tempUrl` as an image location is supported only on Blue Box Cloud 2.1.0 and onwards.

## Basic concepts

|  **Item**    | **Description**                                                                                                                                                           |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Image**    | A virtual machine image, referred to in this document simply as an image, is a single file that contains a virtual disk with a bootable operating system installed on it. |               | Use images to create virtual machine instances within the cloud.                                                                                                          |
| **Instance** | Instances are virtual machines (VMs) that run inside the OpenStack cloud.                                                                                                 |
|  **Flavor**  | The term _flavor_ describes an instance's size, and it defines the pre-determined resource specifications for the amount of vCPU, RAM, and disk space available to an     |
|              | instance.                                                                                                                                                                 |

## Select from alternative cloud images provided by IBM Blue Box

The IBM Blue Box Cloud in this release comes pre-populated with Cirros 0.3.3 x86_64 images. Additional cloud images are available, provided as a customer courtesy by IBM Blue Box.

You may upload and install separately-acquired operating system software, or you may provision any of the following operating system images that we make available to you as a virtual machine instance.  You are responsible to comply with all applicable operating system license terms and to acquire proper entitlements for each virtual machine instance.

* CentOS 6.7 x86_64
* CentOS 7.2 x86_64
* Ubuntu Server 12.04 LTS x86_64
* Ubuntu Server 14.04 LTS x86_64
* Windows Server 2008 R2 SP1 Datacenter
* Windows Server 2008 R2 SP1 Enterprise
* Windows Server 2008 R2 SP1 Standard
* Windows Server 2012 R2 Datacenter
* Windows Server 2012 R2 Standard


For any Microsoft Windows operating system virtual computing instances, these are the specific customer provisions: the customer is required to have and maintain customer's own Microsoft Windows License server for activating such Windows operating system virtual computing instances. Refer to [How to activate Windows licenses in IBM Blue Box Cloud](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/Windows_License_Activation/) for more information.


## Get cloud image downloads from Box Panel

1. Log into Box Panel with Box Panel credentials. The Cloud Images page in Box Panel is available if you have at least one cloud, and if you are either a Primary or Technical customer contact.

2. From the Box Panel Dashboard, click on **Services** and select **Cloud Images**.

3. The Cloud Images page will appear. Each image is displayed as a card.

4. Click on the card that displays the image of interest to you. A modal window will pop up that contains your `tempURL`.

5. The `tempURL` displayed will be valid for next 24 hours so you can download the cloud image.

## Upload an image to IBM Blue Box Cloud Glance repository using your cloud image `tempURL`

**Notes:**

* Only users with the `cloud_admin` role will be able to make an image public to other users and to the project.
* Uploading an image to Glance by using the `tempUrl` directly as an image location cannot be used for IBM Blue Box Cloud that has blocked the outbound Internet access from the OpenStack control plane.
* Uploading an image to Glance by using the `tempUrl` directly as an image location is supported *only* on Blue Box Cloud 2.1.0 and later, **not** on releases PRIOR to 2.1.0.
* For IBM Blue Box Clouds on releases PRIOR to 2.1 or with no outbound Internet access, follow the instructions in "Upload an image to an IBM Blue Box Cloud Glance repository using downloaded image files".

You can either upload an image with the OpenStack dashboard or the command line client.

### Upload an image using the OpenStack dashboard

1. Log in to the IBM Blue Box Cloud OpenStack dashboard.
2. Under the **Project** panel, expand **Compute** and click **Images**.
3. Click **Create Image** in the page. Specify the following parameters in the new page:

	| **Item**               | **Description**                                                                                                  |
	|------------------------|------------------------------------------------------------------------------------------------------------------|
	| **Name**               | Enter a name for the image.                                                                                      |
	| **Description**        | Optionally, enter a brief description of the image.                                                              |
	| **Image Source**       | Choose **Image Location**.                                                                                       |
	| **Image Location**     | Specify the Cloud Image download `tempURL`.                                                                      |
	| **Format**             | Select the correct format (for example, `QCOW2`) for the image.                                                  |
	| **Architecture**       | Specify the architecture (for example, `i386` for a 32-bit architecture or `x86-64` for a 64-bit architecture).  |
	| **Minimum Disk(GB)**   | For Linux Image, use 5; For Windows Image, use 25.                                                               |
	| **Minimum RAM(MB)**    | For Linux Image, use 512; For Windows Image, use 2048.                                                           |
	| **Copy Data**          | This option must be checked to copy image data to image service.                                                 |
	| **Public**             | Select this check box to make the image public to all users on all projects.                                     |
	| **Protected**          | Select this check box to ensure that only users with permissions can delete the image.	                        |
   	
	For example:

	```
	Name: Ubuntu Server 14.04 LTS x86_64 - 20160301
	Description: Ubuntu Server 14.04 LTS x86_64 cloud image released on 2016/03/01
	Image Source: Image Location
	Image File: <tempURL_for_QCOW2>
	Format: QCOW2 - QEMU Emulator
	Architecture: x86-64
	Minimum Disk(GB): 5
	Minimum RAM(MB): 512
	Copy Data: True
	Public: True
	```	
	
4. Click **Create Image**.

5. Check that the created image appears in the image list. The image is queued for upload. It might take some time before the status changes from "Queued" to "Active."

**Note:** Only users with the `cloud_admin` role will be able to make an image public to other users and to the project.

### Upload an image using the OpenStack Command Line Client

You can upload images through the Glance client. See [Installing OpenStack Clients](http://docs.openstack.org/cli-reference/common/cli_install_openstack_command_line_clients.html) for more information.

1. Create an image.

    * For Linux Images, use `-- min-disk 5 --min-ram 512`
    * For Windows Images, use `--min-disk 25 --min-ram 2048`

	```
	# glance --os-image-api-version 1 image-create --name <image_name> --min-disk <min-disk> --min-ram <min-ram> --disk-format qcow2 --container-format bare --is-public True --copy-from  <tempURL_to_qcow2_image_file>
	```

2. Check whether the image was created successfully.

   The image is queued for upload. It might take some time before the status changes from "Queued" to "Active."

	```
	# glance image-show <image-id>
	```
	
## Upload an image to an IBM Blue Box Cloud Glance repository using downloaded image files

**Notes:**

* Only users with the `cloud_admin` role will be able to make an image public to other users and to the project.
* When downloading the cloud image using the `tempUrl` be sure that the `tempUrl` token is escaped or specified in quotes. For example:

	```
	curl -f -o <output_file> '<cloud_image_download_tempUrl>'

	curl -f -o ubuntu-guest-image-14.04-20160301-x86_64.qcow2 'https://dal05.objectstorage.softlayer.net/v1/AUTH_2201d7be-5d96-431c-9bd0-ec3ed5b62b19/cloud_images/test/ubuntu-guest-image-14.04-20160301-x86_64.qcow2?temp_url_sig=9e9678ad2d81489cebd032dff2332ec8ee50ebba&temp_url_expires=1458956867'
	```

Follow these steps:
	
1. Download .qcow2 and .md5sum files of the image. 
  
	Download the `.qcow2` image file and `.md5sum` checksum file using the `tempURL` and put these 2 files under the same folder. For example:

	```
	ubuntu-guest-image-14.04-20160301-x86_64.qcow2
	ubuntu-guest-image-14.04-20160301-x86_64.md5sum
	```

2. Verify the downloaded `.qcow2` image file using the `.md5sum` checksum file. For example:

	```
	# md5sum -c ubuntu-guest-image-14.04-20160301-x86_64.md5sum
	ubuntu-guest-image-14.04-20160301-x86_64.qcow2: OK
	```
	If the result returns "OK", the downloaded `qcow2` image is valid.

3. Upload the image to Glance. You can upload the image either with the OpenStack dashboard or with the command line client.

	* Upload an image using the OpenStack dashboard

		1. Log in to the IBM Blue Box Cloud OpenStack dashboard.
		2. Under the **Project** panel, expand **Compute** and click **Images**.
		3. Click **Create Image** in the page. Specify the following parameters in the new page:

	     	| **Item**                | **Description**                                                                                                  |
			|-------------------------|------------------------------------------------------------------------------------------------------------------|
			| **Name**                | Enter a name for the image.                                                                                      |
			| **Description**         | Optionally, enter a brief description of the image.                                                              |
			| **Image Source**        | Choose **Image File**.                                                                                           |
			| **Image File**          | Browse to the directory of the image binary file.                                                                |
			| **Format**              | Select the correct format (for example, `QCOW2`) for the image.                                                  |
			| **Architecture**        | Specify the architecture (for example, `i386` for a 32-bit architecture or `x86-64` for a 64-bit architecture).  |
			| **Minimum Disk(GB)**    | For Linux Image, use 5; For Windows Image, use 25                                                                |
			| **Minimum RAM(MB)**     | For Linux Image, use 512; For Windows Image, use 2048                                                            |
			| **Public**              | Select this check box to make the image public to all users on all projects.                                     |
			| **Protected**           | Select this check box to ensure that only users with permissions can delete the image.                           |	 

			For example:

			```
			Name: Ubuntu Server 14.04 LTS x86_64 - 20160301
			Description: Ubuntu Server 14.04 LTS x86_64 cloud image released on 2016/03/01
			Image Source: Image File
			Image File: C:\Documents\ubuntu-guest-image-14.04-20160301-x86_64.qcow2
			Format: QCOW2 - QEMU Emulator
			Architecture: x86-64
			Minimum Disk(GB): 5
			Minimum RAM(MB): 512
			Public: True
			```
			![Upload the image with the OpenStack dashboard](https://github.com/IBM-Blue-Box-Help/help-documentation/tree/gh-pages/img/upload_image_file.png)
			
		4. Check **Create Image**.

		5. Check that the created image appears in the image list. The image is queued for upload. It might take some time before the status changes from "Queued" to "Active."

	* Upload an image using the OpenStack command line client

		See [Installing OpenStack Clients](http://docs.openstack.org/cli-reference/common/cli_install_openstack_command_line_clients.html) for more information.

		1. Create image.

			* For Linux Images, use `-- min-disk 5 --min-ram 512`
			* For Windows Images, use `--min-disk 25 --min-ram 2048`

			```
			# glance --os-image-api-version 1 image-create --name <image_name> --min-disk <min-disk> --min-ram <min-ram> --disk-format qcow2 --container-format bare --is-public True --file <path_to_qcow2_image_file>
			```

		2. Check whether the image was created successfully. The image is queued for upload. It might take some time before the status changes from "Queued" to "Active."

			```
			# glance image-show <image-id>
			```

		**Note:** For large images, the web upload may time out. For those, we've recommended that people launch an instance in their cloud, download the image to that instance, and then upload from that instance to Glance. All the traffic would stay within SoftLayer, and the upload would be within their own cloud.

## Create VM instances using your uploaded images

### Create a VM instance using the OpenStack Dashboard

1. Log in to the IBM Blue Box Cloud OpenStack dashboard.

2. Expand the **Project** and **Compute** sections in the navigation area, and select **Images**. The dashboard shows the images that have been uploaded to OpenStack Glance repository and made available for this project.

3. Select an image and click **Launch**.

4. In the **Launch Instance** dialog box, specify field values in the **Details**, **Access & Security**, **Networking**, and **Post-Creation** tabs. For more details about these fields, see the following tables.
   
   ![Launch an instance from your uploaded image](https://github.com/IBM-Blue-Box-Help/help-documentation/tree/gh-pages/img/launch_instance_from_image.png)

5. Click **Launch**.

Then you will see the newly created instance in your instances list. The instance is queued for creation. It might take some time before the status changes from "Build" to "Active."

### Set initial username and password in Post-Creation tab


| **Field**                 | **Description**                                                           |
|---------------------------|---------------------------------------------------------------------------|
| **Customization Script**  | Specify a customization script that runs after your instance is launched. |



**For Linux instances:**

To enable password authentication through console and SSH, use the following script data for the Customization Script (with the relevant password in place of `<YOUR_PASSWORD>` ):

```
#cloud-config password: <YOUR_PASSWORD> chpasswd: { expire: False } ssh_pwauth: True
```

**For Windows instances:**  
To set the initial username and password, use the following script data for the Customization Script (with the relevant username and password in place of `_<YOUR_USERNAME>_` and `_<YOUR_PASSWORD>_`).

```
rem cmd
net user <YOUR_USERNAME> <YOUR_PASSWORD> /logonpasswordchg:yes /add /y
net localgroup administrators <YOUR_USERNAME> /add
```

## Connecting to your instance

**Note:** Ensure that proper security group rules are defined for connecting to your instance over `ssh` or `rdp`.

1. Log in to the IBM Blue Box Cloud OpenStack dashboard.

2. Expand the **Project** panel, then the **Compute** tab in the left navigation area, and click on **Instances**.

3. Locate your instance in the list of running instances and note its IP address, such as `192.168.100.237`.
   
   ![Locate your instance from the instance list](https://github.com/IBM-Blue-Box-Help/help-documentation/tree/gh-pages/img/locate_instance_from_list.png)

4. Create a connection to your instance by specifying its IP address.

### Connecting to Linux instances
  
Connect to your instance through SSH or VNC. The default `userid` for the Linux images provided by IBM is **ibmcloud**. Once connected to your Linux instance, you can use the `sudo` command to execute commands that normally require root access. Sudo is configured not to require a password for the default `userid`.

* Use your favorite SSH client and open a connection to the correct IP address of the VM instance, using the private SSH key of the keypair that you specified during provisioning:
 
	```
	# ssh -i <path_of_Your_SSH_private_key_file> <userid>@<ip_of_instance>
	```

* View the VNC console of the instance by clicking on the instance name in the IBM Blue Box Cloud OpenStack dashboard, and then click on the **Console** tab. The VNC console connects you with HTTPS.
  
  ![View the VNC console of your instance](https://github.com/IBM-Blue-Box-Help/help-documentation/tree/gh-pages/img/view_VNC_console.png)

**Note:** To be able to log in via the console to a new Linux instance as `ibmcloud` user, you must have specified a password in the Customization Script during provisioning.
  
### Connecting to Windows instances

Connect to your instance through Remote Desktop or VNC. You'll need to use the `userid` and `password` specified in the Customization Script during VM provisioning. On your first login, a prompt appears, requesting that you change your password. Please do.

* Use your favorite Remote Desktop client to connect.
* View the VNC console of the instance by clicking on the instance name in IBM Blue Box Cloud OpenStack dashboard, and then click on the **console** tab. The VNC console connects you with HTTPS.

## Image update

When you receive a notification from IBM Blue Box operations that the cloud images are updated, you can deactivate the existing image and re-create a new image using the download URL you obtained from Box Panel for the updated image.

**Using the OpenStack Command Line Client to deactivate the existing image**

1. Get the existing image ID:

	```
	# glance image-list
	```

2. Deactivate the image:
	
	```
	# glance image-deactivate <image_id>
	```

3. Show the image status:

	```
	# glance image-show <image_id>
	```

4. After deactivating the existing image, please re-create the new image by following the steps in "Upload an image to IBM Blue Box Cloud Glance repository using your cloud image tempURL" in this guide.

## Get support from IBM Blue Box operations regarding cloud images

To get support from IBM Blue Box operations regarding a specific cloud image, it will help if the **buildID** of the image can be provided. Get the `buildID` of the image, and then create a support ticket with IBM Blue Box operations and mention the `buildID`. Here is how:

* From the image file name:  
    Example: `ubuntu-guest-image-14.04-20160301-x86_64.qcow2`

* From the buildID file in the VM provisioned from the cloud image:

  * For **Linux** instances: 
    The `buildID` file will be located at: `/etc/buildID`

  * For **Windows** instances:  
    The `buildID` file will be located at: `C:\buildID`
