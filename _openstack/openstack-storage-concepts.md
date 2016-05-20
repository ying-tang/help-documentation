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

# OpenStack Storage Concepts

The following table explains the OpenStack storage concepts:

|                            | **Ephemeral storage**                                      |	**Block storage**                                                                  |	**Object storage**                  |
|----------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------|----------------------------------------|
| Used to:                   | Run operating system and scratch space                     | Add additional persistent storage to an instance                                   | Store data, including instance images  |
| Accessed through:          | A file system 	                                          | A block device that can be partitioned, formatted, and mounted (such as, /dev/vdc) | REST API                               |
| Accessible from:           | Within an instance                                         | Within an instance 	                                                               | Anywhere                               |
| Managed by: 	             | OpenStack Compute (nova)                                   |	OpenStack Block Storage (cinder)                                                   | OpenStack Object Storage (swift)       |
| Persists until:            | Instance is terminated                                     |	Deleted by user                                                                    | Deleted by user                        |
| Sizing determined by:      | Administrator configures size settings, known as flavors   | Specified by user in initial request 	                                           | Amount of available physical storage   |
| Example of typical usage   | 10 GB first disk, 30 GB second disk                        |  1 TB disk                                                                         | 10s of TBs of dataset storage          |
	 	 	


