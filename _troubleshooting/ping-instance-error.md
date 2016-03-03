---
layout: page
title:  "Why can't I SSH to an instance, or ping it?"
tags: [troubleshooting, ssh, ping]
time: December 10th, 2015
featured: true
---

A common problem occurs when customers are unable to SSH or ping an instance.  Here's what you can do to resolve this issue:

1. In your security groups, have you enabled port 22 TCP and all ICMP access?  You can do this task using the **Horizon** dashboard, or you can do it using the command line.

2. Have you assigned a floating IP address to the instance?

3. When you created the instance, did you assign just the Internal network to it?  If you assigned both the Internal and the External networks, you will need to recreate the instance using the Internal network only, and then assign a floating IP to it after the instance is created.

4. Is the floating IP address routable from the location you're pinging / SSHing from?  Try `route -n`.  Verify that the public subnet in **OpenStack** is accessible from the client.

5. Check to see if the private subnet and public subnet are connected to the router with `neutron router-show router1`.

If you have done all of these steps and you can't get SSH or ping to work, and `ssh -vvv` isn't providing any clues, contact us.  We will check the following items from our side:

1. Does the public network match the local LAN?

{% highlight bash %}
ip netns <public namespace id> ping <floating IP>
{% endhighlight %}

2. Is traffic is being routed correctly out of the instance?

{% highlight bash %}
ip netns exec <private namespace id>
{% endhighlight %}
