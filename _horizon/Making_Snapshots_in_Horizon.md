---
layout: page
title: Using Horizon for Snapshots
author: Leslie Lundquist
dateAdded: December 12, 2016
tags: [Horizon, snapshots, OpenStack, Cinder, image, error, token expires, glance]
featured: true
weight: 4
---

When running either the 3.0 or 3.1 release using Horizon, snapshot errors can occur if there is not sufficient space to store volumes.  

**Best Practice:**
 When using Horizon it is best to detach the data volume, perform the instance snapshot, and then reattach the data volume.

Here’s why:

**Using Horizon:** When creating an instance snapshot, ensure there is enough storage capacity for all the attached volumes. If there is not enough quota available to store snapshots of all attached volumes, the instance snapshot fails. The quota problem may not be visible as the root cause of the problem. The workaround is to detach the data volume, perform the instance snapshot, and reattach the data volume.  

![instance_snapshot_error.png]({{site.baseurl}}/img/Instance_Snapshot_Error.png)

If you think you are having this problem, you can also [open a support ticket](http://ibm-blue-box-help.github.io/help-documentation/gettingstarted/commonadmin/report-issue/), and our support team will help you diagnose it by looking at logs.

**Using the Command Line:** When using the `cinder-snapshot-create command`, you can perform the snapshot on a single volume only, for example, the root volume. In this case, the snapshot is likely to be successful because the quota would be able to accommodate the volume capacity of a single volume.

### Errors may occur when creating multiple lengthy instance snapshots in parallel and switching projects or logging out

If you switch projects or log out in the middle of creating instance snapshots in parallel, you may notice the process never ends with a status of "Saving".  

If our support team checks the Glance API logs at the time of the snapshot creation, they will notice something similar to "Could not find token".  

This happens because your user token can expire during project switching and logging out.  Nova will call Glance to update the final bits and that request will be invalidated by Keystone due to expired user token.  As of this writing, OpenStack upstream has a fix for this for Cinder and Neutron and that is going into the OpenStack Ocata release.  The final Glance fix is deferred until OpenStack Pike.  You can check the status of the complete fix at https://blueprints.launchpad.net/nova/+spec/use-service-tokens-pike
