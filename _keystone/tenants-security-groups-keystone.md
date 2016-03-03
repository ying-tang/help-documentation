---
layout: page
title:  "Tenants and Security Groups"
tags: [keystone, tenants, security groups]
time: July 28th, 2015
featured: false
weight: 4
---

**How can I get a list of tenants from the command line?**

{% highlight bash %}
$ keystone tenant-list
+----------------------------------+-----------+---------+
| id                               | name      | enabled |
+----------------------------------+-----------+---------+
| 8f5b4c822c36476eb14b68de955b4ca6 | admin     | True    |
| 6d2987f9ef094d078745e955803f902d | company   | True    |
| 945ee99cfc2440a1ad85b9d33e31604c | service   | True    |
+----------------------------------+-----------+---------+
{% endhighlight %}

**Are security groups shared between tenants?**

No.  Each tenant has its own independent set of security groups.
