---
layout: page
title:  "Why Can't I See My New vCPUs Listed in Horizon?"
dateAdded: August 1st, 2016
featured: false
weight: 4
tags: [troubleshooting, horizon, nova, overcommit, hypervisor, vcpu]
---

**Q.** After you enabled 2x CPU overcommit on my cluster, why aren't the new VCPUs listed in Horizon?

**A.** The `cpu_allocation_ratio` (overcommit) is internally factored in to the decisions made by the Nova scheduler. As a result, while the API (Horizon) only lists, for example, 283 vCPUs total, as shown in the figure below, you will find that you are able to concurrently schedule new instances that require significantly more, up to the expected total (in this example) of 566. This is handled by the CoreFilter filter in the scheduler.

**Please also note:** Enabling overcommit does not affect any currently running virtual machines.  It only affects new virtual machines you create after overcommit is enabled.

![Hypervisor Summary Screen]({{site.baseurl}}/img/Hypervisor_Summary.png)


**Q.** Why does my quota look so low?

**A.**  Under "Limit Summary" in Horizon, the top graph is actually showing the vCPU quota limits for the project you're currently looking at. In each cloud, when you're looking at the Limits graphs in Horizon, you're viewing Quota Limits for the Project you're currently under, not total CPUs across the cluster and across all projects. This should be more clearly noted in Horizon, but for now, it is what it is.

You can update quotas using the command line by following the examples at http://ibm-blue-box-help.github.io/help-documentation/openstack/userdocs/quotas/#compute-quotas

Also see https://bugs.launchpad.net/horizon/+bug/1202965 and
https://ask.openstack.org/en/question/12699/nova-compute-question-about-cpu_allocation_ratio/?answer=24673#post-id-24673
for more information.
(This answer is courtesy of _sgordon_ on ask.openstack.org)
