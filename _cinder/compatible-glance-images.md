---
layout: page
title:  "How Can I Resize a Cinder Volume?"
tags: [cinder, resize]
dateAdded: October 13th, 2015
featured: false
weight: 4
---


**Cinder** volumes are block storage devices that you attach to instances to enable persistent storage. Cinder volumes are not deleted when you terminate an instance. You can attach a volume to a running instance or detach a volume and attach it to another instance at any time. You can also delete a volume.

Resizing of Cinder volumes is not supported yet. Until it becomes supported, you can accomplish the same thing with these steps:

1. Unmount the Cinder volume from inside the instance:

	{% highlight bash %}
	umount /mnt/volume
	{% endhighlight %}

2. Detach the Cinder volume:

	{% highlight bash %}
	nova volume-detach <instanceid> <volumeid>
	{% endhighlight %}

3. Snapshot the volume.

4. Deploy a new volume from the snapshot, with the new size.
