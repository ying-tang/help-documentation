---
layout: page
title:  "Cinder Volume Stuck"
tags: [troubleshooting, cinder volume stuck]
time: November 19th, 2015
featured: true
---

Occasionally, you may run across a Cinder volume that becomes stuck.  In this example, two volumes were stuck in a "creating" state:

{% highlight bash %}
$ cinder list --all-tenants | egrep "1439ebc1|47405ffa"
| 0589360d-2d0b-49fc-9069-8f68a614fb03 | creating | volume-47405ffa-acbc-4382-a7c4-ebfe9c2998aa | 4 | None | false | |
| 8654f34f-22a2-4f43-b8cd-002b2ff85375 | creating | volume-1439ebc1-1acf-4aeb-9839-d86577700696 | 4 | None | false | |
{% endhighlight %}

If this happens to you, you can reset the state of these volumes, like so:

{% highlight bash %}
$ cinder reset-state 0589360d-2d0b-49fc-9069-8f68a614fb03
$ cinder reset-state 8654f34f-22a2-4f43-b8cd-002b2ff85375
{% endhighlight %}

After resetting their states, you'll see that they're now in an available status:

{% highlight bash %}
$ cinder list --all-tenants | egrep "1439ebc1|47405ffa"
| 0589360d-2d0b-49fc-9069-8f68a614fb03 | available | volume-47405ffa-acbc-4382-a7c4-ebfe9c2998aa | 4 | None | false | |
| 8654f34f-22a2-4f43-b8cd-002b2ff85375 | available | volume-1439ebc1-1acf-4aeb-9839-d86577700696 | 4 | None | false | |
{% endhighlight %}

You can then delete the volumes:

{% highlight bash %}
$ cinder delete 0589360d-2d0b-49fc-9069-8f68a614fb03
$ cinder delete 8654f34f-22a2-4f43-b8cd-002b2ff85375
{% endhighlight %}

If the volumes cannot be deleted even after resetting the state, you may need one of our support technicians to investigate further.  One problem that could cause a stuck volume is a process on the hypervisor end that's holding the volume open.  Our technicians can diagnose and repair this situation, if needed.

If you want to inspect a snapshot using the API and find out whether it has child volumes, you can back into it this way:

{% highlight bash %}
cinder show [VOLUME-ID] 2>/dev/null | grep snapshot_id | awk '{print $4}'
[SNAPSHOT-ID]
{% endhighlight %}

If you are unable to attach a Cinder volume, or if nothing happens in the Horizon dashboard when you try to do so, the `open-iscsi` service daemon may need to be restarted on your Cinder volume host.  Please **open a support ticket** to have us check whether this restart needs to be done.
