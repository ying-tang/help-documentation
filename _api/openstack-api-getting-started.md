---
layout: page
title:  "Getting Started with the OpenStack API"
featured: true
tags: [api, getting started, openstack]
author: Eric French
date: November 16th, 2015
---

Your **IBM Blue Box** Cloud was provisioned with API endpoints for all of the major services running underneath.  Here is how to set up your local system to access these services.

**Install python**

**On Mac OSX:**

{% highlight bash %}
sudo easy_install pip
sudo pip install python-novaclient
{% endhighlight %}

**Set up your local `stackrc` file**

A `stackrc` file defines the environment variables that will let your **Nova** client connect to the **Nova API**:

{% highlight bash %}
# ~/stackrc
export NOVA_VERSION=1.1
export OS_PASSWORD=yoursecretpassword
export OS_AUTH_URL=https://example.openstack.blueboxgrid.com:5001/v2.0
export OS_USERNAME=yourname
export OS_TENANT_NAME=projectname
export COMPUTE_API_VERSION=1.1
export OS_NO_CACHE=True
{% endhighlight %}

Create a `stackrc` for yourself, replacing the `OS_TENANT_NAME`, `OS_USERNAME`, and `OS_PASSWORD` fields with your own.

**Note**: If you are concerned about storing your password in this file, leave the password field blank; you will be asked to enter a password after sourcing the `stackrc` file.

It is also possible to download an **OpenStack RC File** from **Horizon**. Log in to **Horizon**, navigate to the **Access & Security** page and select the **API Access** tab.  

 ![API Access Tab](https://help.bluebox.net/hc/en-us/article_attachments/201813957/Access___Security_-_OpenStack_Dashboard.png)

Click the **Download OpenStack RC File** button and modify it as desired.

**Source the `stackrc` file**

{% highlight bash %}
source ~/tardis_stackrc
{% endhighlight %}

**Test the Nova client**

{% highlight bash %}
nova image-list
{% endhighlight %}

This command will return a list of all running instances in your project.

**Further Reading**

[Installing OpenStack Command Line Clients](http://docs.openstack.org/user-guide/content/install_clients.html)

[API Versions Supported](https://www.openstack.org/marketplace/hosted-private-clouds/page-20/blue-box-cloud---private-cloud-as-a-service)

[What To Do If You Get An ImportError: No module named xmlrpc_client When Running Nova Client on Mac OS X](https://github.com/major/supernova/issues/55#issuecomment-59891149">What To Do If You Get An ImportError: No module named xmlrpc_client When Running Nova Client on Mac OS X)

[Command Line Client Cheat Sheet](http://docs.openstack.org/user-guide/cli_cheat_sheet.html)

**Troubleshooting**

If you get the error **A true SSLContext object is not available**, you can run
`sudo easy_install requests[security]` or `pip install requests[security]`

Also see what to do if you get the error [**AttributeError: '_socketobject' object has no attribute 'set_tlsext_host_name'**](http://stackoverflow.com/questions/31576258/attributeerror-socketobject-object-has-no-attribute-set-tlsext-host-name)
