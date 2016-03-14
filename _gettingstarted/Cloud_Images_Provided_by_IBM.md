---
layout: page
title: Cloud Images Provided by IBM Blue Box
featured: false
weight: 13
tags: [images, glance, image-create, instance, gettingstarted]
date: March 9th, 2016
author: Yanqi Dou
---

# **Working with cloud images provided by IBM Blue Box**

## **Pre-requisites**

1. If you are going to use the command line (CLI) tools, ensure you have OpenStack Glance Client installed. You can find installation instructions in our knowledge base: **Getting started with the OpenStack API**

2. Ensure you have access to Box Panel, so you can get the temporary download URLs for the IBM-provided cloud images.

## **Basic concepts**

Item | Description
------------ | -------------

Images | A virtual machine image, referred to in this document simply as an image, is a single file that contains a virtual disk with a bootable operating system installed on it. Use images to create virtual machine instances within the cloud.

Instances | Instances are virtual machines (VMs) that run inside the OpenStack cloud.

Flavor | The term Flavor describes an instance's size, and it defines the pre-determined resource specifications for amount of vCPU, RAM, and disk space available to an instance.

## **1. Image Catalog**

#### **1.1 Alternative Cloud Images Provided by IBM Blue Box**

You, the customer, may upload and install separately-acquired operating system software, or you may provision any of the following operating system images, which we make available to you, as a virtual machine instance.  You, the customer, are responsible to comply with all applicable operating system license terms and to acquire proper entitlements for each virtual machine instance.

* CentOS 6.7 x86_64
* CentOS 7.2 x86_64
* Ubuntu Server 12.04 LTS x86_64
* Ubuntu Server 14.04 LTS x86_64
* Windows Server 2008 R2 SP1 Datacenter
* Windows Server 2008 R2 SP1 Enterprise
* Windows Server 2008 R2 SP1 Standard
* Windows Server 2012 R2 Datacenter
* Windows Server 2012 R2 Standard

For any Microsoft Windows operating system virtual computing instances, these are the specific Client provisions: the Client is required to have and maintain Client’s own Microsoft Windows License server for activating such Windows operating system virtual computing instances. Please refer to this document for more information [**How to activate Windows licenses in IBM Blue Box Cloud.**](Windows_License_Activation.md "How to activate Windows licenses in IBM BlueBox Cloud")


## **2. Download images**

#### **2.1 Download .qcow2 & .md5sum files of the image**

**Get image download URL from Box Panel**

1. Log into Box Panel with Box Panel credentials and navigate to the page for **<TBD>"Cloud Images Download"**

2. Click on **<TBD>"Get Download URL"** for the image of interest to you.

3. The tempURLs displayed  will be valid for next 24 hours so you can download the cloud image.

**Download** the `.qcow2` image file & `.md5sum` checksum file using the tempURL and put these 2 files under the same folder.

For example:
```
ubuntu-guest-image-14.04-20160301-x86_64.qcow2
ubuntu-guest-image-14.04-20160301-x86_64.md5sum
```

#### **2.2 Verify the downloaded `.qcow2` image file using the `.md5sum` checksum file**

For example:
```
# md5sum -c ubuntu-guest-image-14.04-20160301-x86_64.md5sum
ubuntu-guest-image-14.04-20160301-x86_64.qcow2: OK
```
If the result returns "OK", the downloaded `qcow2` image is valid.


## **3. Upload an image to IBM Blue Box Cloud Glance repository**

#### **3.1 Upload an image to Glance using the OpenStack Dashboard**
1. Log in to the IBM Blue Box Cloud OpenStack dashboard
2. Under the **Project** panel, expand **Compute** and click **Images**.
3. Click **"Create Image"** in the page. Specify the following parameters in the new page:

Item | Description
------------ | -------------
Name | Enter a name for the image.

Description | Optionally, enter a brief description of the image.

Image Source | Choose **Image File**.

Image File | Browse to the directory of the image binary file.

Format | Select the correct format (for example, `QCOW2`) for the image.

Architecture | Specify the architecture (for example, i386 for a 32-bit architecture or x86-64 for a 64-bit architecture).

Minimum Disk (GB) | For Linux Image, use 5; For Windows Image, use 25

Minimum RAM (MB) | For Linux Image, use 512; For Windows Image, use 2048

Public | Select this check box to make the image public to all users on all projects.

Protected | Select this check box to ensure that only users with permissions can delete the image.	 

For example:
```
Name: Ubuntu Server 14.04 LTS x86_64 - 20160301
Description: Ubuntu Server 14.04 LTS x86_64 guest image released on 2016/03/01
Image Source: Image File
Image File: C:\Documents\ubuntu-guest-image-14.04-20160301-x86_64.qcow2
Format: QCOW2 - QEMU Emulator
Architecture: x86-64
Minimum Disk(GB): 5
Minimum RAM(MB): 512
Public: True
```
4. Click **"Create Image"**.  
Check the created image is in image list. The image is queued for upload. It might take some time before the status changes from "Queued" to "Active".

#### **3.2 Upload an image to Glance using the OpenStack Command Line Client**
You can upload images through the Glance client. [Installing OpenStack Clients](http://docs.openstack.org/cli-reference/common/cli_install_openstack_command_line_clients.html)

* **Create image**  
    For Linux Images, use "-- min-disk 5 --min-ram 512"  
    For Windows Images, use "--min-disk 25 --min-ram 2048"
    ```
    # glance --os-image-api-version 1 image-create --name <image_name> --min-disk 5 --min-ram 512 --disk-format qcow2 --container-format bare --is-public True --file <path_to_qcow2_image_file>
    ```

* **Check if the image is created successfully**  
    The image is queued for upload. It might take some time before the status changes from "Queued" to "Active".
    ```
    # glance image-show <image-id>
    ```

**NOTE:** For large images, the web upload may time out. For those, we've recommended that people launch an instance in their cloud, download the image to that instance, and then upload from that instance to Glance. All the traffic would stay within SoftLayer, and the upload would be within their own cloud.


## **4. Create VM instances using your uploaded images**

#### **4.1 Create a VM instance using the OpenStack Dashboard**

1. Log in to the IBM Blue Box Cloud OpenStack dashboard.

2. Expand the **Project** and **Compute** sections in the navigation area, and select **Images**. The dashboard shows the images that have been uploaded to OpenStack Glance repository and made available for this project.

3. Select an image and click **Launch**.

4. In the **Launch Instance** dialog box, specify field values in the **Details**, **Access & Security**, **Networking**, and **Post-Creation** tabs. For more details about these fields, see the following tables.

5. Click **"Launch"**

Then you will see the newly created instance in your instances list. The instance is queued for creation. It might take some time before the status changes from "Build" to "Active".

**Details tab**

Field | Description
------------ | -------------

Availability Zone | Select an availability zone for your instance. Currently, only one zone is available: `nova`.
Instance Name | Assign a name to the virtual machine. 

**Note:** The name that you assign here becomes the initial host name of the server. After the server is built, changes to this name are not updated in the dashboard (if you change the server name in the API or if you change the host name directly). Server names are not guaranteed to be unique when created, so you could have two instances with the same host name.

Flavor | Specify the size of the instance to launch.

Instance Count | To launch multiple instances, enter a value greater than 1. The default is 1.

Instance Boot Source | Since you are launching an instance from an image, **Boot from Image** is chosen by default.

Image Name | This field changes based on your previous selection. Since you have chosen to launch an instance using an image, the **Image Name** field displays with the name of the image you selected.	 


**Access & Security tab**
Field | Description
------------ | -------------
Key pair | Specify a key pair. If no key pairs are available, you can upload a new public key by clicking the + sign next to the dropdown box and pasting in your ssh-rsa public key.

Security Groups | Activate the security groups that you want to assign to the instance. Security groups are a kind of cloud firewall. They define the ways that incoming network traffic is forwarded to instances. If you have not created any security groups, you can assign only the default security group to the instance. If you want your instances to be accessible by ping or SSH, you can create unlocked security groups.

**Networking tab**

Field | Description
------------ | -------------
Selected Networks | To add a network to the instance, click the + in the **Available Networks** field.

**Post-Creation tab**

Field | Description
------------ | -------------
Customization Script | Specify a customization script that runs after your instance is launched.

* **For Linux instances:**

To enable password authentication in console and ssh, use the following script data for the Customization Script (with the relevant password in place of _<YOUR_PASSWORD>_):
    ```
    #cloud-config
    password: <YOUR_PASSWORD>
    chpasswd: { expire: False }
    ssh_pwauth: True
    ```

* **For Windows instances:**  
To set the initial username and password, use the following script data for the Customization Script (with the relevant username and password in place of `_<YOUR_USERNAME>_` and `_<YOUR_PASSWORD>_`).

    ```
    rem cmd
    net user <YOUR_USERNAME> <YOUR_PASSWORD> /logonpasswordchg:yes /add /y
    net localgroup administrators <YOUR_USERNAME> /add
    ```

#### **4.2 Connecting to your instance**

1. Log in to IBM Blue Box Cloud OpenStack dashboard.

2. Expand the **Project** panel, then the **Compute** tab in the left navigation area, and click on **Instances**.

3. Locate your instance in the list of running instances and note its IP address, such as `192.168.100.237`.

4. Create a connection to your instance by specifying its IP address.

* **For Linux instances**  
Connect to your instance through SSH or VNC. The default `userid` for the Linux images provided by IBM is **ibmcloud**. Once connected to your Linux instance, you can use the `sudo` command to execute commands that normally require root access. Sudo is configured not to require a password for the default `userid`.

  * Use your favorite SSH client and open a connection to the correct IP address of the VM instance, using the private SSH key of the keypair that you specified during provisioning:  
    ```
    # ssh -i <path_of_Your_SSH_private_key_file> <userid>@<ip_of_instance>
    ```
    **Note:** The default `userid` for the Linux images provided by IBM is **ibmcloud**.

  * View the VNC console of the instance by clicking on the instance name in the IBM Blue Box Cloud OpenStack dashboard, and then click on the **Console** tab. The VNC console connects you with HTTPS. 
  * 
  NOTE: To be able to log in via the console to a new Linux instance as `ibmcloud` user, you must have specified a password in the Customization Script during provisioning.

* **For Windows instances**  
Connect to your instance through Remote Desktop or VNC. You need to use the userid and password specified in the Customization Script during VM provisioning. On your first login, a prompt displays requesting that you change your password.

  * Use your favorite Remote Desktop client to connect.
  * View the VNC console of the instance by clicking on the instance name in IBM Blue Box Cloud OpenStack dashboard, and then click on the **console** tab. The VNC console connects you with HTTPS.

## **5. Image update**
When there is a notification from Blue Box operations that cloud images are updated, you can deactivate the existing image and re-create a new image using the download URL you obtained from Box Panel for the updated image.

**Using the OpenStack Command Line Client to deactivate the existing image**
1. Get the existing image id
    ```
    # glance image-list
    ```

2. Deactivate the image
    ```
    # glance image-deactivate <image_id>
    ```

3. Show the image status
    ```
    # glance image-show <image_id>
    ```

4. After deactivating the existing image, please re-create the new image by following the steps of **[3. Upload an image to IBM Blue Box Cloud Glance repository]** in this guide.


## **6. Get support from IBM Blue Box operations regarding cloud images**

When there is a need to get support from IBM Blue Box operations regarding a specific cloud image, it will help if the **buildID** of the image can be provided. Please get the `buildID` of the image as follows, and then create a support ticket with IBM Blue Box operations and mention the `buildID`.

* **From the image file name:**  
    e.g. `ubuntu-guest-image-14.04-20160301-x86_64.qcow2`

* **From the buildID file in the VM provisioned from the cloud image:**

    * For **Linux** instances:  
    The `buildID` file will be located at: `/etc/buildID`

    * For **Windows** instances:  
    The `buildID` file will be located at: `C:\buildID`
