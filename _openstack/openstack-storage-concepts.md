--- 

layout: page 

title: "OpenStack Storage Concepts" 

featured: false 

weight: 2

tags: [OpenStack, concepts] 

Author: Ying Tang

Editor: Leslie Lundquist

dateAdded: May 20, 2016 

--- 

## Basic Concepts

| **Concept**   |  **Description**                                      																																																																											|
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Volume**    |  Volumes are block storage devices that you attach to instances to enable persistent storage. Persistent storage is not deleted when you terminate an instance. You can attach a volume to a running instance or detach a volume and attach it to another instance at any time. You can also delete a volume. Only administrative users can create volume types.  |
| **Ephemeral** |  The disks associated with the instances are ephemeral, meaning that the data is deleted when the instance is terminated. Snapshots created from a running instance will remain, but any additional data added to the ephemeral storage since last snapshot will be lost.                                                                                         |


The following table compares three OpenStack storage concepts:

|                            | **Ephemeral storage**                                      |	**Block storage**                                                                  |	**Object storage**                  |
|----------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------|----------------------------------------|
| Used to:                   | Run operating system and scratch space                     | Add additional persistent storage to an instance                                   | Store data, including instance images  |
| Accessed through:          | A file system 	                                          | A block device that can be partitioned, formatted, and mounted (such as, /dev/vdc) | REST API                               |
| Accessible from:           | Within an instance                                         | Within an instance 	                                                               | Anywhere                               |
| Managed by: 	             | OpenStack Compute (nova)                                   |	OpenStack Block Storage (cinder)                                                   | OpenStack Object Storage (swift)       |
| Persists until:            | Instance is terminated                                     |	Deleted by user                                                                    | Deleted by user                        |
| Sizing determined by:      | Administrator configures size settings, known as flavors   | Specified by user in initial request 	                                           | Amount of available physical storage   |
| Example of typical usage   | 10 GB first disk, 30 GB second disk                        |  1 TB disk                                                                         | 10s of TBs of dataset storage          |
	 	 	


