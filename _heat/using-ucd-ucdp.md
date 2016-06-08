---
layout: page
title: Using IBM UrbanCode Deploy with IBM Blue Box
featured: no
weight: 10
tags: [heat, UCD]
author: Ying Tang, Pan Xia Zou
dateAdded: June 7, 2016
---

IBM UrbanCode Deploy with Patterns (UCDP) is an environment management and deployment solution that you can use to deploy applications to multiple clouds, and manage their lifecycles. 
Whereas UCDP provides a graphic and text editor for you to design, test, and promote your full-stack environments, IBM UrbanCode Deploy (UCD) is a more complete solution that helps you fully configure your components.

The Heat engine with IBM Blue Box can interact with UCDP and UCD. If you have UCDP and UCD installed on your instance, you can establish a secured connection from your instance to the Heat engine, and then deploy an application quickly on your instance through UCDP and UCD.

You can either install the UCDP and UCD servers on instances in the same Blue Box environment that you want to integrate with, or on external servers outside IBM Blue Box.

The following sections cover both cases by introducing the steps to install UCDP and UCD and then integrate them with IBM Blue Box.


## Prerequisites

1. Download the UCDP and UCD installation packages from [IBM Fix Central](http://www-933.ibm.com/support/fixcentral/).

2. To install UCDP and UCD on your instances:

   * You must have two instances that are provisioned on the same cloud environment. You will install UCDP on one instance and UCD on the other.
   * These two instances must have a public floating IP available, and they must share the same IP type.

3. To install UCDP and UCD on external servers:

   * Ensure that your servers meet the system requirements of UCDP and those of UCD. For more details, see [UCDP system requirements](http://www-01.ibm.com/support/knowledgecenter/SSWS3W_6.1.1/com.ibm.edt.doc/topics/install_sysreqs.html) and [UCD system requirements](https://www-01.ibm.com/support/knowledgecenter/SS4GSP_6.1.1/com.ibm.udeploy.install.doc/topics/sysRequire.html?cp=SS4GSP_6.1.1%2F3-0).

## Installing UCDP

Follow these steps to install UCDP:

1. Install a database. Refer to the [Installing the database chapter](http://www-01.ibm.com/support/knowledgecenter/SSWS3W_6.1.1/com.ibm.edt.doc/topics/install_database_ov.html) in the IBM UCDP Knowledge Center.
2. Install the design server in the interactive mode. Refer to the [Installing the design server chapter](http://www-01.ibm.com/support/knowledgecenter/SSWS3W_6.1.1/com.ibm.edt.doc/topics/install_server.html) in the IBM UCDP Knowledge Center.

**Notes:**

* Only the default ports (8080 and 8443) are supported. If you want to use different ports, open a support ticket.
* During installation, accept the default trial license path 27000@localhost unless you have your own license. You can update the license after installation.
* When prompted with the question "What host name will users access the web UI at?", if your host name is not registered, specify the IP address instead of the host name.
* It is best practice to make the versions of the database server and the database driver consistent.

For the complete UCDP documentation, see [IBM UCDP Knowledge Center](http://www-01.ibm.com/support/knowledgecenter/SSWS3W_6.1.1/com.ibm.edt.doc/edt61_welcome.html).

## Installing UCD

Follow these steps to install UCD:

1. Install a database. Refer to the [Installing the database chapter](https://www-01.ibm.com/support/knowledgecenter/SS4GSP_6.1.1/com.ibm.udeploy.install.doc/topics/DBinstall.html) in the IBM UCD Knowledge Center.
2. Install the server in the interactive mode. Refer to the [Install the server chapter](https://www-01.ibm.com/support/knowledgecenter/SS4GSP_6.1.1/com.ibm.udeploy.install.doc/topics/serverInstall.html) in the IBM UCD Knowledge Center.

For the complete UCD documentation, see [IBM UCD Knowledge Center](https://www-01.ibm.com/support/knowledgecenter/SS4GSP_6.1.1/com.ibm.udeploy.doc/ucd61_welcome.html).

**Note:**

* Only the default ports (7918, 8080, and 8443) are supported. If you want to use different ports, open a support ticket.
* It is best practice to make the versions of the database server and the database driver consistent.

## Integrating UCD with UCDP

Integrate your UCD with UCDP by following the instructions in [Connecting to IBM UrbanCode Deploy](http://www-01.ibm.com/support/knowledgecenter/SSWS3W_6.1.1/com.ibm.edt.doc/topics/integrate_ucd.html).

## Connecting to IBM Cloud OpenStack Servers with UCDP and UCD

1. For UCD and UCDP installed on external servers only: Use an OpenVPN client to connect to the cloud environment that you want to integrate with. For more information about accessing the environment, see [Setting up OpenVPN server on your instance](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commontech/openvpn-setup/).

2. Connect the UCDP server to IBM Cloud OpenStack Services by following the instructions in Connecting to OpenStack-based clouds with Keystone authentication.

**Note:** In Step 2 Create an authentication realm that points to the Keystone server, keep the Use default orchestration engine check box checked when configuring realm.


With the connection established, you can now deploy applications to IBM Blue Box within IBM UrbanCode Deploy and IBM UrbanCode Deploy with Patterns.

**Note:** If you use an image that has a period (.) in the image name, update the VM name created in Blueprint in the Properties field to remove the period (.). Otherwise, the name of the VM created will contain a period (.) by default, which causes software deployment to fail.
