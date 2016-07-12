---
layout: page
title: Unable to Delete Cinder Volumes?
featured: false
weight: 5
tags: [troubleshooting, cinder, snapshots ]
dateAdded: July 11, 2016
author: Leslie Lundquist
---

**Q.** Why am I getting "ERROR: Unable to delete any of specified volumes." when trying to delete a volume?

**A.** Please check to see if the volume has any snapshots, with the command `cinder snapshot-list --all`. If so, you'll need to delete the snapshots prior to deleting the volume.

In older versions of OpenStack, there's a small chance the `cinder-volume` service may be wedged. Contact support if this is the case, and we can restart the `cinder-volume` service on the affected node. In all cases, when you contact support, please include your Cinder Request ID so we can quickly trace what happened when you tried to delete the volume.
