---

layout: page
title: Resizing an Instance (Non-live)
featured: False
weight: 12
tags: [getting started, instances, resize, migration]
dateAdded: May 23, 2016
author: Jesse Keating
editor: Leslie Lundquist

---

### How Can I Resize my Instances or Migrate them to a New Host?

**Feature:** Instance Resize (up) / or (Non-live) Instance Migration

**Description:** Starting with the 1.3 release of Blue Box Cloud, we have supported instance resizing (up). The resize operation is not live: it _does_ stop and re-start the instance. A resize can happen on the same host, which is helpful in small environments.

Instance resizing lets an instance change its flavor to a larger flavor. An instance can be resized to a larger flavor **only**. This change incurs a small amount of interruption while the instance is stopped, migrated to a larger-sized flavor, and started again. This resize may also relocate the instance to a new hypervisor.  

**Note:** There may be a short delay until networking resumes once an instance has been resized or migrated and is in VERIFY_RESIZE state.

For more information, please see http://docs.openstack.org/user-guide/enduser/cli_change_the_size_of_your_server.html for documentation on how to perform a resize.
