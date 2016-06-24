---
layout: page
title:  "Using Heat with self-signed certificate"
tags: [heat, deployment, self-signed]
dateAdded: June 24th, 2016
author: Pan Xia Zou, Ying Tang
featured: false
weight: 12
---

Heat resource types such as `OS::Heat::SoftwareDeployment ` call back to Heat during stack creation. In an environment with Certificate Authority signed certificate, Heat tools such as `os-collect-config` can be used. But in an environment with self-signed certificate, they might fail with the error _ssl.c:510:

	error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate.

### How to fix this issue

The resolution addresses the following resource types:

* Stack with `OS::Heat::SoftwareDeployment`
* Stack with `OS::Nova::Server and the user_data_format: SOFTWARE_CONFIG` setting

Take these steps:

1. Use the following command to download the IBM Blue Box certificate into an .crt file, for example, example.crt.
   
		echo -n | openssl s_client -connect  example.open-test.ibmcloud.com:5000 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p'  > example.crt
   
   **Note:** The certificate file of Heat and Keystone are the same at this moment. If not, copy them to cacert.pem separately.   
2. Copy the content of example.crt to cacert.pem with either of the following options (against image or against VM). You have two options: 

Option 1: Copy the content of example.crt to the cacert.pem files in the image, register the image to OpenStack, and use it in the Heat template:

{% highlight bash %}
cat example.crt >> /opt/stack/venvs/os-collect-config/lib/python2.7/site-packages/requests/cacert.pem
cat example.crt >> /usr/local/lib/python2.7/dist-packages/requests/cacert.pem
cat example.crt >> /etc/ssl/certs/ca-certificates.crt
{% endhighlight %}

Option 2: Use user_data in `OS::Nova::Server` to copy the content of example.crt to cacert.pem files. The detailed steps are described as below. 


1. Use the following command:

		user_data:
		get_file: <your_path>/importCAcert.sh

2. In the content of importCAcert.sh file, replace the certificate with your own:

		#!/bin/sh
        echo "-----BEGIN CERTIFICATE-----
        certificate contents
        -----END CERTIFICATE-----" >/tmp/example.crt

3. Use the following commands to copy the content of example.crt to cacert.pem files:

		cat /tmp/example.crt >> /opt/stack/venvs/os-collect-config/lib/python2.7/site-packages/requests/cacert.pem
		cat /tmp/example.crt >> /usr/local/lib/python2.7/dist-packages/requests/cacert.pem
		cat /tmp/example.crt >> /etc/ssl/certs/ca-certificates.crt

