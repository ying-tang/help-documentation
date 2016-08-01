---
layout: page
title:  "Why Can't I See My New vCPUs Listed in Horizon?"
dateAdded: August 1st, 2016
featured: false
weight: 4
tags: [troubleshooting, horizon, nova, overcommit, vcpu]
---

**Q.** After you enabled 2x CPU overcommit on my cluster, why aren't the new VCPUs listed in Horizon?

**A.** The `cpu_allocation_ratio` (overcommit) is internally factored in to the decisions made by the Nova scheduler. As a result, while the API (Horizon) only lists, for example, 283 vCPUs total, you will find that you are able to concurrently schedule new instances that require significantly more, up to the expected total (in this example) of 566. This is handled by the CoreFilter filter in the scheduler.

Also see https://bugs.launchpad.net/horizon/+bug/1202965 and
https://ask.openstack.org/en/question/12699/nova-compute-question-about-cpu_allocation_ratio/?answer=24673#post-id-24673
for more information.
(This answer is courtesy of sgordon on ask.openstack.org)
