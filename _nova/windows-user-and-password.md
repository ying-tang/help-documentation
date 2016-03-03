---
layout: page
title:  "How do I set an initial username and password on a Windows instance in OpenStack?"
tags: [nova, windows, initial setup]
date: December 16th, 2015
featured: false
weight: 4
---

To set the initial username and password, use the following command (with the relevant username and password in place of `<USERNAME>` and `<YOUR_PASSWORD>`). The password must comply with the rules described in **Managing and monitoring compute resources**, or you will not be able to log in to your instance:

{% highlight bash %}
rem cmd
net user <USERNAME> <YOUR_PASSWORD> /logonpasswordchg:yes /add /y
net localgroup administrators <USERNAME> /add
{% endhighlight %}

Put that command in the user data (that is, under the **Post-Creation** tab in **Horizon**) and it will be run by `cloud-init`.
