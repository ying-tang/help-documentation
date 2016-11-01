---
layout: page
title:  "Quotas"
dateAdded: June 13th, 2015
editor: Leslie Lundquist
updated: September 2, 2016
featured: true
weight: 4
tags: [openstack, quotas]
---

OpenStack has numerous quotas, and when you hit one of these quotas, it doesn't always notify you clearly.  Not every quota is exposed in the **Horizon** user interface.  This article explains what quotas you may hit, what happens when you hit them, and how to modify them. The first section contains a general introduction, followed by a more specific section. The Table of Contents lets you click through quickly, to find answers for your specific questions.

### Table of Contents
* [Introduction](#introduction)
* [Other Limits You May Encounter](#other-limits-you-may-encounter)
* [Neutron vs. Nova Rule Precedence](#neutron-vs-nova-rule-precedence)
* [Common Questions](#common-questions)
  * [Common Quota Error Messages](#common-quota-error-messages)
  * [Most Commonly Hit Quotas](#most-commonly-hit-quotas)
* [Compute Quotas](#compute-quotas)
  * [How to list the Default Compute Quotas](#how-to-list-the-default-compute-quotas)
  * [How to view Tenant Compute Quotas](#how-to-view-tenant-compute-quotas)
  * [How to update Tenant Compute Quotas](#how-to-update-tenant-compute-quotas)
* [Network Quotas](#network-quotas)
  * [How to list Tenant Network Quotas](#how-to-list-tenant-network-quotas)
  * [How to update Tenant Network Quotas](#how-to-update-tenant-network-quotas)
* [Storage Quotas](#storage-quotas)
  * [How to list Cinder Quotas](#how-to-list-cinder-quotas)
  * [How to see current Cinder Storage usage](#how-to-see-current-cinder-storage-usage)
  * [How to update Cinder Quotas](#how-to-update-cinder-quotas)
* [Appendix](#appendix)

### Introduction

You'll have an overall quota, which cannot be exceeded by the individual quotas you'll set for each project you're running within your cloud. The quotas you set depend on how many projects you have and how you want to distribute your resources among those projects. They're really up to you. If you only foresee making one project, you could allocate all available resources to that project and leave it like that.

Here is an example of a capacity report for CPU, RAM, and Disk. You can use the # total numbers (shown in output like this one) to help guide the numbers you plug in for your quotas. The actual limits of the system are those Total (#) numbers below the line. The one exception in this example is the CPU, which is overcommitted 2x.

```
(+) Overcommit Ratio   (%) Percent Used   (#) Total   (-) Used   (=) Available

Hypervisor                 CPU+  MEM%  DSK%  CPU# CPU- MEM#     MEM-     MEM=     DSK#   DSK-   DSK=
ds0.dal.bluebox.com        0.000 0.032 0.000 28   0    128828   4096     124732   723    0      723
ds11.dal.bluebox.com       0.000 0.032 0.000 28   0    128828   4096     124732   723    0      723
ds2.dal.bluebox.com        0.161 0.083 0.091 31   5    128828   10752    118076   989    90     899
---------------------------------------------------------------------------------------------------------------
TOTAL                      0.057 0.049 0.037 87   5    386484   18944    367540   2435   90     2345
```

### Other limits you may encounter:

**Floating IPs:** Please see [http://ibm-blue-box-help.github.io/help-documentation/neutron/network_ip_availability/](http://ibm-blue-box-help.github.io/help-documentation/neutron/network_ip_availability/)

**Security Groups:** Most customers go with the default limit and adjust upwards as needed. This keeps firewall rules to a manageable level, so as to not impact performance. At a certain point (we haven't seen what particular point this is yet), it is theoretically possible to end up with too many firewall rules and not enough CPU to process them quickly enough. The default limits may seem low, but they're more than enough for most people, who will never create more than a few security groups, with maybe half a dozen rules each.

**Instances:** Most customers go with the default limit and adjust upwards as needed. With enough hardware, you can get into hundreds of thousands of instances. For your particular hardware, you need to make your own calculations based on your desired resource consumption for each VM.

### Neutron vs. Nova Rule Precedence

There is some overlap between the quotas enforced by the Nova and Neutron services. In the event of a conflict, Neutron quotas always take precedence.

If you need to update security group rules, for instance, take note, there are three places you may need to make the update:

In Neutron: `neutron quota-update --security-group-rule 250 <project-ID>`

In Nova: 

 * For the project: `nova quota-update --security-group-rules 250 <project-ID>`

 * And potentially for the user: `nova quota-show --user <username> --tenant <project-ID>`


## Common Questions

The remaining sections of this document offer more detail about commons questions and errors you may encounter.

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

## How to list Cinder Quotas

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
