---
layout: page
title:  "Why Can't I See My New vCPUs Listed in Horizon?"
dateAdded: August 1st, 2016
featured: false
weight: 4
tags: [troubleshooting, horizon, nova, overcommit, hypervisor, vcpu]
---

**Q.** After you enabled 2x CPU overcommit on my cluster, why aren't the new vCPUs listed in Horizon's Hypervisor Summary Screen?

**A.** The `cpu_allocation_ratio` (overcommit) is internally factored in to the decisions made by the Nova scheduler. As a result, while the API (Horizon) only lists, for example, 283 vCPUs total, as shown in the figure below, you will find that you are able to concurrently schedule new instances that require significantly more, up to the expected total (in this example) of 566. This is handled by the CoreFilter filter in the scheduler.

![Hypervisor Summary Screen]({{site.baseurl}}/img/Hypervisor_Summary.png)

**Q.** How do I view the Hypervisor Summary Screen?

**A.** Login to Horizon as a user with the cloud_admin role.  Hit System on the left, and then Hypervisors to see the summary.

**Q.** Why don't my currently running virtual machines show the extra CPUs after overcommit was enabled?

**A.** Enabling overcommit does not affect any currently running virtual machines.  It only affects new virtual machines you create after overcommit is enabled.

**Q.** Why does my vCPU quota look so low?

**A.** Are you perhaps looking at the "Limit Summary" instead of the "Hypervisor Summary"?  Under "Limit Summary" in Horizon, the top graph is actually showing the *quota limits* for the project you're currently looking at. In each cloud, when you're looking at the Limits graphs in Horizon, you're viewing Quota Limits for the Project you're currently under, not total CPUs across the cluster and across all projects.

You can update quotas using the command line by following the examples at http://ibm-blue-box-help.github.io/help-documentation/openstack/userdocs/quotas/#compute-quotas

For more information, see:
* https://bugs.launchpad.net/horizon/+bug/1202965
* https://ask.openstack.org/en/question/12699/nova-compute-question-about-cpu_allocation_ratio/?answer=24673#post-id-24673 (Thanks to _sgordon_ on ask.openstack.org for this information.)
