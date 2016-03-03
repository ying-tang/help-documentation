---
layout: page
title:  "Error: No valid host was found (when launching a new instance)"
tags: [troubleshooting, no valid host]
date: July 31st, 2015
featured: false
weight: 4
---

**When spinning up an instance, I sometimes get an error "No valid host was found.  Exceeded max scheduling attempts ..."  How do I resolve this?**

Sometimes this error can be due to exceeding a quota.  For example, if we check the logs on the hypervisor for this error, we might see

`PortLimitExceeded: Maximum number of ports exceeded`

To resolve this problem, you can increase the quota by running the command

`neutron quota-update --tenant-id [TENANT-ID] --port 200`

If that doesn't work, `https://bugs.launchpad.net/nova/+bug/1247844` might apply, and you may need to delete any instances with conflicting fixed IP addresses.
