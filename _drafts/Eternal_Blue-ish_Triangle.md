## Box Panel, Site Controller, and IBM Blue Box Local Cloud

## “An Eternal Blue-ish Triangle”

**(with a nod to Douglas Hofstadter for no particular reason)**

PRELIMINARY DRAFT
IBM INTERNAL USE ONLY

Drafted by Leslie Lundquist with info from Tom Spoonemore August 5, 2016

This document offers an introduction to the fundamental concepts about Box Panel, Site Controller, and how they work together to control and manage IBM Blue Box Local Cloud environments. The document includes links and pointers to external documents, so you can find even more information.

### What Is Box Panel?

Box Panel is a suite of applications used to deliver IBM Blue Box Cloud. Box Panel is consumed by internal support staff, as well as our IBM customers. It is the way we manage cloud infrastructure.

Along with other functionalities, Box Panel is a system of record for all datacenters, machine assets, clusters, IP addresses, and customer account information.

The Box Panel suite is delivered as a SaaS application accessible through a Web browser and through custom APIs. The Box Panel Suite includes applications for Support, Ticketing, and Chat, and it includes links to product documentation.

For more information about Box Panel, you can review our Box Panel User’s Guide on our customer help website:
[link]

### Box Panel Manages the Complete Operational Stack

As shown in the figure below: Box_Panel_Manages_the_Stack.png [figure]

### What Is Box Panel Site Controller?

The Box Panel Site Controller is a software tool that provides distributed control plane
operations, configuration management, and automation Services to the Box Panel Suite, and to the Blue Box Support and Engineering teams.

The Box Panel Site Controller runs in each Local and Dedicated data center, where it communicates with the Box Panel Software-as-a-Service (SaaS) through a Central Control Pod.

The capabilities of Box Panel Site Controller include:

 * Administrative Remote Access
 * IPMI Proxy
 * Bare Metal Provisioning
 * Central Package Mirror
 * Monitoring / Alerting
 * Sensu
 * Graphite
 * PagerDuty
 * Log Management (ELK)
 * Automation Services
 * HTTP Proxy Services
 
The figure below shows an overview of the relationship between Box Panel and its associated Site Controller, when deployed.
[figure] Box_Panel_Site_Controller_Overview.png

### Terminology FAQ: What is.....

**Q: Box Panel Queue?**

**A:** The Box Panel Queue is the job queue for administrative functions coming from Box Panel.
These functions include automated software patching, new node deployment, and rebooting servers.

**Q: Box Panel Worker?**

**A:** The Worker is a process that receives job requests from Box Panel Queue and executes those requests, then returns the results to the Box Panel Queue.

**Q: Sensu on the Central Control Pod?**

**A:** Provides monitoring of the remote site controllers in SoftLayer and customer-owned
data centers.

**Q: Sensu on a Site Controller?**

**A:** Monitors the Blue Box Cloud physical nodes (pNodes) and provides alerts back to the Central Control Pod. The pNodes include the control, compute, and storage nodes.

**Q: IPMI Proxy?**
**A:** Provides secure IPMI access to the cloud nodes.

**Q: HTTP Proxy?**
**A:** Provides HTTP interface to the ELK and Sensu User Interfaces on the Site Controller.

**Q: Mirror?**
**A:** A central software repository for the Cloud operations software. This repository does not include client workloads.

**Q: Bastion?**
**A:** The Bastion host provides secure remote access to the Site Controllers and to customer cloud nodes, by using Role-Based Access Control (RBAC). For more information about RBAC, please refer to this document:

[link]

**Q: Yama?**
**A:** Provides Multifactor Authentication for access into customer clouds and has logging of cloud support personnel access.

**Q: ELK (Elasticsearch, Logstash & Kibana)?**
**A:** Used for log management of cloud resources. These logs do not leave the customer site.

**Q: Boot-strapper?**
**A:** Provides bare metal provisioning of servers. The Boot-Strapper is a replica of the Mirror repository.

### Security FAQ:

**Q: Who has access to the Local Cloud from IBM Support?**
**A:** Members of the OpenStack Engineering and Operations teams have access to the Controllers, Compute and Nodes, OpenStack API, and Horizon. They use this access to deploy, and operate the private cloud service. These support engineers do not have any access to customer data or workloads above the hypervisor.

**Q: Can the IBM support representatives gain access to customer resources?**
**A:** Blue Box Engineering and Operations teams do not have credentials to give them
access to any Cloud VMs or applications deployed in the cloud.

**Q: What information flows over the VPN?**
**A:** Only those Command and Control messages that are required to deploy and operate the private cloud service flow over the VPN. There is no routing between the VPN and the customer data plane (VMs, workloads, storage, Neutron networks). Secure Administrative Remote Access sessions initiated by OpenStack Support personnel. Software packages used to install and patch the private cloud servers. Monitoring alerts and messages initiated by the cloud nodes. All logging data is maintained on customer premises equipment.

**Q: Who can obtain this information?**
**A:** Blue Box OpenStack Engineering and Operations staff have access to this information for purposes of cloud management and troubleshooting.

**Q: What is the access control policy for the support team?**
**A:** The support team follows a strict IBM Cloud Security Policy to grant, re-evaluate, and revoke access to our customer clouds.

**Q: Can Blue Box use a customer registration process?**
**A:** Blue Box does not currently support and our processes align with ISO27002.

**Q: What does Blue Box manage?**
**A:** Blue Box manages the OpenStack cloud from bare metal up to and including the hypervisor. Our processes, policies, and tools are complaint with IBM Cloud Security Policy (CSP). CSP aligns with the industry standard ISO27002, which is the Information technology standard of practice for information security controls—that is, for security techniques.

For more complete information about the security of your IBM Cloud, please download our IBM Cloud Security White Paper at this link:
[link]
