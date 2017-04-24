


## Requirements for OpenStack client versions

When operating your IBM Bluemix Private Cloud, it is a best practice to follow the list of suggested OpenStack package versions, as given on the OpenStack website.

Using an unexpected version of `python-openstackclient` can cause problems in your cloud operations. The OpenStack website contains a list of requirements with the package compatibility for each release of OpenStack. For example, to review the Newton package requirements, please see this page:

Newton:
https://github.com/openstack/requirements/blob/stable/newton/upper-constraints.txt

Mitaka:
https://github.com/openstack/requirements/blob/stable/mitaka/upper-constraints.txt

It’s recommended that you use the versions listed in these requirements documents, so that the behavior of your cloud is predictable.

#### Known issues:

When using `python-openstack` version 2.6.0 or higher, and `openstackdk` 0.9.2 or higher, you may receive the following error message when using `openstack -debug quota` commands, as shown in the example below:

```
>openstack --debug quota set --floating-ips 2 $project
>openstack --debug quota show $project
SDKException: Connection failure that may be retried.
```
