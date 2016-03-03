---
layout: page
title:  "How do I set up DNS records pointing to OpenStack instances?"
tags: [neutron, configuring dns, instances]
time: November 24th, 2015
featured: false
weight: 4
---

You can set up DNS for the floating IP associated with your instance using your current DNS server.  For example, [**BlueBox DNS**](https://boxpanel.bluebox.net/), [**DNSimple**](https://dnsimple.com), etc.

As for DNS for the private IPs of instances, OpenStack does not currently provide DNS services, aside from the `dnsmasq` daemon, which lives on `nova-network` hosts and manages DHCP.  You can set up an internal DNS server, or `/etc/hosts` file, if you prefer.
