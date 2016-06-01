---
layout: page
title:  "Can I create an instance with files injected?"
tags: [nova, inject files]
dateAdded: June 1, 2016
featured: false
author: Ying Tang
weight: 4
---

**Can I create an instance with files injected?**

By default in IBM Blue Box Release 3.0, this feature is **not supported** for better experience: The `config-drive` parameter is in the `nova.conf` file in set to `false`. If you want to inject files with instance boot, you can pass the `--config-drive true` option to the `nova boot` command to enable this feature. For example,

    nova boot --image "ubuntu14.04" --flavor 2 --nic net-id=98fa96d9-321b-457e-b84c-20d5bd078334 --security_group sample_secgrp --key-name sample_KP --file /samplepath/samplefilename --config-drive true sample_instance_name
	
See the [Compute command-line client reference](http://docs.openstack.org/cli-reference/nova.html) in [OpenStack document](http://docs.openstack.org/index.html) for more information. 



