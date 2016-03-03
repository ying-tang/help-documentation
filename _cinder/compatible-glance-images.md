---
layout: page
title:  "How Can I Resize a Cinder Volume?"
tags: [cinder, resize]
date: October 13th, 2015
featured: false
weight: 4
---

Resizing of **Cinder** volumes is not supported yet.  Until it becomes supported, you can accomplish the same thing with these steps:

* Unmount the Cinder volume from inside the instance:

{% highlight bash %}
umount /mnt/volume
{% endhighlight %}

* Detach the Cinder volume:

{% highlight bash %}
nova volume-detach <instanceid> <volumeid>
{% endhighlight %}

* Snapshot the volume.
* Deploy a new volume from the snapshot, with the new size.
