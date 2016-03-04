---
layout: page
title:  "How can I get hypervisor statistics?"
featured: true
weight: 8
tags: [getting started, hypervisor, statistics]
dateAdded: June 23rd, 2015
---

A hypervisor creates and runs virtual machines (VMs).  Sometimes it's useful to get statistics on the state of your hypervisors across all compute nodes.  You can do so by running the command `nova hypervisor-stats`:

{% highlight bash %}
$ nova hypervisor-stats
+----------------------+--------+
| Property             | Value  |
+----------------------+--------+
| count                | 3      |
| current_workload     | 3      |
| disk_available_least | 761    |
| free_disk_gb         | 1139   |
| free_ram_mb          | 103396 |
| local_gb             | 3294   |
| local_gb_used        | 2155   |
| memory_mb            | 386020 |
| memory_mb_used       | 282624 |
| running_vms          | 18     |
| vcpus                | 96     |
| vcpus_used           | 83     |
+----------------------+--------+
{% endhighlight %}
