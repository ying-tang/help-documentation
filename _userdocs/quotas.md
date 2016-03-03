---
layout: page
title:  "Quotas"
date: June 13th, 2015
featured: true
weight: 4
tags: [openstack, quotas]
---

OpenStack has numerous quotas, and it doesn't always clearly notify you when you hit one of these quotas.  Not every quota is exposed in the **Horizon** user interface.  This article explains what quotas you may hit, what happens when you hit them, and how to modify them.

# Table of Contents

* [Common Questions](#common-questions)
  * [Common Quota Error Messages](#common-quota-error-messages)
  * [Most Commonly Hit Quotas](#most-comonly-hit-quotas)
* [Compute Quotas](#compute-quotas)
  * [How to list the Default Compute Quotas](#how-to-list-the-default-compute-quotas)
  * [How to view Tenant Compute Quotas](#how-to-view-tenant-compute-quotas)
  * [How to update Tenant Compute Quotas](#how-to-update-tenant-copute-quotas)
* [Network Quotas](#network-quotas)
  * [How to list Tenant Network Quotas](#how-to-list-tenant-network-quotas)
  * [How to update Tenant Network Quotas](#how-to-update-tenant-network-quotas)
* [Storage Quotas](#storage-quotas)
  * [How to list Cinder Quotas](#how-to-list-cinder-quotas)
  * [How to see current Cinder Storage usage](#how-to-see-current-cinder-storage-usage)
  * [How to update Cinder Quotas](#how-to-update-cinder-quotas)
* [Appendix](#appendix)


# Common Questions

## Common Quota Error Messages

The exact error you get depends on what interface you're using, the version of your command line client, and the cluster stack version.  Here are some examples of what you might see:

From Horizon:

{% highlight bash %}
ERROR (ClientException): The server has either erred or is incapable of performing the requested operation. (HTTP 500) (Request-ID: req-12276a72-b97f-4b41-9a86-12f32d9db5ec)
{% endhighlight %}

From the Neutron command-line client:

{% highlight bash %}
Conflict (HTTP 409)
{% endhighlight %}

From the log:
{% highlight bash %}
TRACE neutron.api.v2.resource OverQuota: Quota exceeded for resources: ['security_group_rule']
{% endhighlight %}


## Most Commonly Hit Quotas

The most commonly hit is **Number of Instances Allowed Per Tenant** - (**Nova Compute**) - The default is 10.  Read on to find out how to update this number.


# Compute Quotas

## How to list the Default Compute Quotas

List all default quotas for all tenants, as follows:

{% highlight bash %}
$ nova quota-defaults
{% endhighlight %}

For example:

{% highlight bash %}
$ nova quota-defaults
+-----------------------------+-------+
| Quota                       | Limit |
+-----------------------------+-------+
| instances                   | 10    |
| cores                       | 20    |
| ram                         | 51200 |
| floating_ips                | 10    |
| fixed_ips                   | -1    |
| metadata_items              | 128   |
| injected_files              | 5     |
| injected_file_content_bytes | 10240 |
| injected_file_path_bytes    | 255   |
| key_pairs                   | 100   |
| security_groups             | 10    |
| security_group_rules        | 20    |
+-----------------------------+-------+
{% endhighlight %}

Update a default value for a new tenant, as follows:

{% highlight bash %}
$ nova quota-class-update --key value default
{% endhighlight %}

For example:

{% highlight bash %}
$ nova quota-class-update --instances 15 default
{% endhighlight %}

## How to view Tenant Compute Quotas

Place the tenant ID in a useable variable, as follows:

{% highlight bash %}
$ tenant=$(keystone tenant-list | awk '/tenantName/ {print $2}')
{% endhighlight %}

List the currently set quota values for a tenant, as follows:

{% highlight bash %}
$ nova quota-show --tenant $tenant
{% endhighlight %}

For example:

{% highlight bash %}
$ nova quota-show --tenant $tenant
+-----------------------------+-------+
| Quota                       | Limit |
+-----------------------------+-------+
| instances                   | 10    |
| cores                       | 20    |
| ram                         | 51200 |
| floating_ips                | 10    |
| fixed_ips                   | -1    |
| metadata_items              | 128   |
| injected_files              | 5     |
| injected_file_content_bytes | 10240 |
| injected_file_path_bytes    | 255   |
| key_pairs                   | 100   |
| security_groups             | 10    |
| security_group_rules        | 20    |
+-----------------------------+-------+
{% endhighlight %}


## How to update Tenant Compute Quotas

Obtain the tenant ID, as follows:

{% highlight bash %}
$ tenant=$(keystone tenant-list | awk '/tenantName/ {print $2}')
{% endhighlight %}

Update a particular quota value, as follows:

{% highlight bash %}
# nova quota-update --quotaName quotaValue tenantID
{% endhighlight %}

For example:

{% highlight bash %}
# nova quota-update --floating-ips 20 $tenant
# nova quota-show --tenant $tenant
+-----------------------------+-------+
| Quota                       | Limit |
+-----------------------------+-------+
| instances                   | 10    |
| cores                       | 20    |
| ram                         | 51200 |
| floating_ips                | 20    |
| fixed_ips                   | -1    |
| metadata_items              | 128   |
| injected_files              | 5     |
| injected_file_content_bytes | 10240 |
| injected_file_path_bytes    | 255   |
| key_pairs                   | 100   |
| security_groups             | 10    |
| security_group_rules        | 20    |
+-----------------------------+-------+
{% endhighlight %}

# Network Quotas

## How to list Tenant Network Quotas

{% highlight bash %}
# neutron quota-show --tenant-id <tenant-id> --user-id <user-id>
{% endhighlight %}

For example:

{% highlight bash %}
# neutron quota-show
+-----------------------------+-------+
| Field                       | Value |
+-----------------------------+-------+
| floatingip                  | 50    |
| network                     | 10    |
| port                        | 50    |
| router                      | 10    |
| security_group              | 10    |
| security_group_rule         | 100   |
| subnet                      | 10    |
+-----------------------------+-------+
{% endhighlight %}

## How to update Tenant Network Quotas

{% highlight bash %}
# neutron quota-update --tenant-id <tenant-id> --user-id <user-id> --<resource> <limit>
{% endhighlight %}

# Storage Quotas

## How to view Cinder Quotas

{% highlight bash %}
# cinder quota-show tenant01
+-----------+-------+
|  Property | Value |
+-----------+-------+
| gigabytes |  1000 |
| snapshots |   10  |
|  volumes  |   10  |
+-----------+-------+
{% endhighlight %}

## How to see current Cinder Storage usage

{% highlight bash %}
# cinder absolute-limits | grep Used
| totalBackupGigabytesUsed |    0  |
| totalBackupsUsed         |    0  |
|  totalGigabytesUsed      |   82  |
| totalSnapshotsUsed       |    0  |
|  totalVolumesUsed        |    4  |
{% endhighlight %}

## How to update Cinder Quotas

Update a particular quota value, as follows:

{% highlight bash %}
# tenant=$(keystone tenant-list | awk '/tenantName/ {print $2}')
# cinder quota-update --quotaName NewValue tenantID
{% endhighlight %}

For example:
{% highlight bash %}
# cinder quota-update --volumes 15 $tenant
# cinder quota-show tenant01
+-----------+-------+
|  Property | Value |
+-----------+-------+
| gigabytes |  1000 |
| snapshots |   10  |
|  volumes  |   15  |
+-----------+-------+
 {% endhighlight %}

# Appendix

From [`http://docs.openstack.org/openstack-ops/content/projects_users.html#compute-quota-table `](http://docs.openstack.org/openstack-ops/content/projects_users.html#compute-quota-table):

_Table 9.1. Compute quota descriptions_ (Given as **Quota**,	Description,	`Property name`)

**Fixed IPs** :
Number of fixed IP addresses allowed per tenant. This number must be equal to or greater than the number of allowed instances.

`fixed-ips`

**Floating IPs** :
Number of floating IP addresses allowed per tenant.

`floating-ips`

**Injected file content bytes** :
Number of content bytes allowed per injected file.

`injected-file-content-bytes`

**Injected file path bytes** :
Number of bytes allowed per injected file path.

`injected-file-path-bytes`

**Injected files** :
Number of injected files allowed per tenant.

`injected-files`

**Instances** :
Number of instances allowed per tenant.

`instances`

**Key pairs** :
Number of key pairs allowed per user.

`key-pairs`

**Metadata items** :
Number of metadata items allowed per instance.

`metadata-items`

**RAM** :
Megabytes of instance RAM allowed per tenant.

`ram`

**Security group rules** :
Number of rules per security group.

`security-group-rules`

**Security groups** :
Number of security groups per tenant.

`security-groups`

**VCPUs** :
Number of instance cores allowed per tenant.

`cores`
