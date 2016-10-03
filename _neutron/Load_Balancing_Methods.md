---
layout: page
title: Load Balancing Methods
tags: [neutron, load balancing, round robin, least connections, source_ip, session persistence, http_cookie, app_cookie]
dateAdded: October 3, 2016
author: Leslie Lundquist
weight: 4
featured: FALSE
---

This document gives a brief explanation of the different load balancing methods.

**Types of algorithms:**

*ROUND_ROBIN*

Each server is used in turns, according to their weights.

*SOURCE_IP*

The source IP address is hashed and divided by the total weight of the running servers to designate which server will receive the request

*LEAST_CONNECTIONS*

The server with the lowest number of connections receives the connection.

Here is an explanation of the session persistence options:

**Types of session persistence:**

*SOURCE_IP*

All connections that originate from the same source IP address are handled by the same member of the pool.

*HTTP_COOKIE*

The load-balancing function creates a cookie on the first request from a client. Subsequent requests that contain the same cookie value are handled by the same member of the pool.

*APP_COOKIE*

The load-balancing function relies on a cookie established by the back-end application. All requests with the same cookie value are handled by the same member of the pool.

So, the SOURCE_IP load balancing method determines which server gets the traffic of a new session while the SOURCE_IP session persistence option determines the the destination for an existing session based solely on the source IP rather than a cookie.

For further information, please see: http://docs.openstack.org/admin-guide/networking-introduction.html#load-balancer-as-a-service-lbaas-overview
