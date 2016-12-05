---
layout: page
title:  "Horizon Troubleshooting FAQ"
featured: true
weight: 8
tags: [troubleshooting, faq, server, cookie, timezone, quotas]
author: Leslie Lundquist, Ulysses Kanigel
dateAdded: December 16, 2016

---

**Q. Why am I getting the error "Can't create server" in Horizon?**

**A.** You might be running low on one of your project quotas, potentially the port quota.  You can view quotas by running `neutron quota-show --tenant-id <UUID>`  Try adjusting your project quotas.

**Q. Why don't my timezone settings stick in Horizon after I clear my cookies?**

**A.** Horizon stores your timezone in a cookie on your computer that persists for 1 year.  It does not store the timezone on the server.  If you clear your cookies or use a new browser, the timezone will be set to UTC, and you will need to recreate the cookie by reconfiguring your timezone in Horizon.
