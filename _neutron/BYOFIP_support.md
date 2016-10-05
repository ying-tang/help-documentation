---
layout: Page
title: BYOFIP_customer_doc.md
featured: FALSE
weight: 5
tags: [networking, epic, softlayer, byofip]
date: August 12, 2016
author: Xiang Wang
editor:
---

# Support for BYOFIP Connectivity Between Blue Box Cloud and Customer Site

## Overview
BYOFIP (Bring Your Own Floating IP) is a feature that allows customers to bring their own floating IPs to and set up a BYOFIP network in their IBM Blue Box cloud. Upon the enablement of this feature, customers will be able to assign these floating IPs directly to their guest VMs. Customers will then be able to connect to the guest VMs over the BYOFIP network from customer site. Customers may open a ticket and request to have this feature enabled via the ticketing system. Additional fees may apply.

## Request
Upon opening a ticket, customer would provide the subnet or subnets that they would like to bring into their Blue Box cloud. A BYOFIP external network will be created and a tunnel endpoint would be set up in the Vyattas by an IBM engineer. This information would be passed back to the customer via the ticket allowing customer to set up the tunnel endpoint on their end.

## Connecting to a guest VM
After an IBM engineer has confirmed that the feature is turned on, customer can proceed to connect over the BYOFIP network by performing the following steps on Horizon or via CLI:
  1. Create a neutron router with **SNAT enabled**
  2. Set router gateway to the BYOFIP network
  3. Create a private network
  4. Add an interface on the router to the private network
  5. Create guest VMs on the private network, ensure that the security group has the proper security rules
  6. Allocate floating IPs from the BYOFIP network
  7. Assign floating IPs from previous step to the guest VMs
