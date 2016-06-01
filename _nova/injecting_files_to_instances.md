---
layout: page
title:  "Can I create an instance with files injected?"
tags: [nova, inject files]
dateAdded: June 1, 2016
featured: false
author: Ying Tang
weight: 4
---

In IBM Blue Box Release 3.0, this feature is by default **not enabled** for better user experience: The `force_config_drive` parameter in the `nova.conf` file is set to `false`. If you want to inject files while booting an instance, you can pass the `--config-drive true` option to the `nova boot` command to enable this feature. For example,

{% highlight bash %}
$nova boot --image <image-name> --flavor <flavor> --nic <net-id=net-uuid> --security_group <security_group> --key-name <key_name> --file <dst-path=src-path> --config-drive true <instance_name>
{% endhighlight %}
	
See the [Compute command-line client reference](http://docs.openstack.org/cli-reference/nova.html) in [OpenStack document](http://docs.openstack.org/index.html) for more information. 



