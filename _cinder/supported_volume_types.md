---
layout: page
title:  "Which Cinder Volume Types are supported in Cloud Instance?"
tags: [cinder, volumetype, multibackend, multitier]
dateAdded: October 7th, 2016
featured: false
weight: 5
---


## Introduction

OpenStack Cinder Block Storage Service uses Storage Hardware as backend to support its volumes.
Typically it is configured with a single backend. Currently, IBM Bluebox Cloud can support two backends using Ceph Storage, namely `rbd_hybrid` and `rbd_ssd`. The `rbd_hybrid` backend uses Ceph Storage Pool corresponding to `Hybrid` type. Similarly, `rbd_ssd` uses Ceph Storage Pool corresponding to `SSD` type.

Each Cinder Backend is associated with a Volume Type. The Volume Type assignment provides a mechanism to provide scheduling to a specific backend.

## Supported Volume Types
   - CEPH_HYBRID
   - CEPH_SSD

## Supported Ceph Storage
   - SSD
   - Hybrid
   - Multi Tier (SSD and Hybrid)

| Storage Type    | Supported Volume Types   | Cinder Backend Name  |
| --------------- | ----------------------   | ------------------   |
| SSD             |  CEPH_SSD                | rbd_ssd              |
| Hybrid          |  CEPH_HYBRID             | rbd_hybrid           |
| Multi Tier      |  CEPH_HYBIRD, CEPH_SSD   | rbd_hybrid, rbd_ssd  |

### Note:

    In case of Multi Tier Storage, Cinder volumes are created with type `CEPH_HYBRID` by default.
    Please [contact our support team](https://support.bluebox.net/) if this default behavior needs to be changed.
