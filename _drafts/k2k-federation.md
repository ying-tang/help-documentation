---
layout: page
title: Keystone to Keystone (K2K) Federation on Blue Box
featured: false
tags: [federation, keystone, k2k]
dateAdded: June 24th, 2016
author: Elvin Tubillara
editor: Leslie Lundquist
---

* [What is K2K Federation?](#what_is_k2k?)
* [Managing Groups](#managin_groups)
* [Managing Mappings](#managing_mappings)
* [Using Horizon](#using_horizon)
* [Using the Python API Libraries](#using_the_python_api_libraries)
* [More Mappings and Groups](#more_mappings_and_groups)

## What is K2K Federation?
Keystone to Keystone (K2K) federation is a way to use credentials from one Keystone instance for logging in across multiple
Blue Box clouds. One IBM Blue Box cloud instance is designated as an Identity Provider and other cloud instances are designated as Service Providers. The Identity Provider stores the user's credentials and asserts to the Service Providers that the user is a valid user. The user's id and password are never sent to the Service Providers, only assertions from the Identity Provider are sent. 

## How does K2K work? 
The user signs into the Identity Provider, receives a signed SAML assertion from the Identity Provider
and then uses that SAML assertion to authenticate into the Service Providers. The log in process
for handling the SAML flow is handled by the K2K authentication plugin (found in `keystoneauth1`).
Credentials are managed only on the Identity Provider, and they are accepted by Service Providers through assertions.

If several Blue Box clouds have been set up with the K2K feature, one cloud instance
is designated as the Identity Provider and the others are designated as Service Providers. Service Providers use mappings to
select the user attributes from the Identity Provider that are utilized to map to a local group. Once the user logs in using K2K federation, the user is granted the roles assigned to the group.

By default, a mapping called `mapping-for-k2k-federation`
is created for the `cloud_admin` credentials on the Identity Provider by which they are mapped to a local group called `cloud_admin`. This group has the role `cloud_admin` access to the demo project.

The flow of setting up K2K federation is:
**1. Manage groups on the Service Provider (Federated users will have the same access rights as the group)**
**2. Manage mappings on the Service Provider (Map remote Identity Provider users to local service provider groups)**

## Managing Groups

K2K Federation works by federating Identity Provider users to a group on the Service Provider. The group is granted access by assigning that group a role on a project. The available roles are as follows:

 * `project_admin` - The `admin` role for the project.
 * `cloud_admin` - The `admin` role for the cloud instance.
 * `_member_` - A member of a project.
 * `heat_stack_owner` - An owner for heat stacks.

To use the group commands, a credential source file is required.
Create a file containing the credentials and replace the tags <> with
the appropriate information:

{% highlight bash %}
```
#This file is cloud_adminrc
export OS_IDENTITY_API_VERSION=3
export OS_PASSWORD=<cloud_admin password> #Change this
export OS_AUTH_URL=https://<service provider fqdn>:5000/v3
export OS_USERNAME=cloud_admin
export OS_TENANT_NAME=demo
export OS_CACERT=/opt/stack/ssl/openstack.crt
export OS_NO_CACHE=True
```
{% endhighlight %}

After the credential source file is made, you can source the file and use any of the OpenStack commands below to manage groups and roles.

**These commands run on the Service Provider.**

**Source the credentials into the environment**: `source cloud_adminrc`

**To list groups**: `openstack group list`

**To create a group**:
```
openstack group create --help
openstack group create <new group name here>
```
**To list roles**: `openstack role list`

**To list role assignments**: `openstack role assignment list --name`

**To list projects**: `openstack project list`

**For help looking at adding role assignment**: `openstack role add --help`

**To add a role assignment for a group to have a role on a project**:
`openstack role  add <role> --project <project> --group <group>`

Federated users are mapped into groups on the Service Provider. By default, a group called `cloud_admin` exists if K2K federation is enabled. This group has the role  `cloud_admin` on the "demo" project.

Here's the order of operations for granting access for groups:
1. First, create or edit the group.
2. Then, create or edit the role assignments for groups on projects.

**Example 1.** Creating a `cloud_admin` group.

The commands below show how to source a file with the authentication info for the Service Provider `cloud_admin` user.

```
$ source cloud_adminrc
$ openstack group list
$ openstack group create cloud_admin --or-show
$ openstack role assignment list --name --group cloud_admin
```
Next, create the role assignment if it doesn't exist.
**These commands add the role `cloud_admin` for the group `cloud_admin` for the "demo" project. **
```
openstack role add cloud_admin --group cloud_admin --project demo
openstack role assignment list --name --group cloud_admin
```
After executing the `openstack role assignment list` command you should see an output similar to this one:

```
# +-------------+------+---------------------+--------------+--------+-----------+
# | Role        | User | Group               | Project      | Domain | Inherited |
# +-------------+------+---------------------+--------------+--------+-----------+
# | cloud_admin |      | cloud_admin@Default | demo@Default |        | False     |
# +-------------+------+---------------------+--------------+--------+-----------+
```

**Example 2.** Creating a group with member access.

The commands below show how to ource a file with the authentication info for the Service Provider `cloud_admin` user.

```
source cloud_adminrc
openstack group list
openstack group create demo_member_group --or-show
openstack role assignment list --name --group demo_member_group
openstack role add _member_ --group demo_member_group --project demo
openstack role assignment list --name --group demo_member_group
```

After doing the `openstack role assignment list` command you should see an output similar to this one:

```
# +----------+------+---------------------------+--------------+--------+-----------+
# | Role     | User | Group                     | Project      | Domain | Inherited |
# +----------+------+---------------------------+--------------+--------+-----------+
# | _member_ |      | demo_member_group@Default | demo@Default |        | False     |
# +----------+------+---------------------------+--------------+--------+-----------+
```


## <a name="managing_mappings"></a>Managing Mappings
The cloud_admin user on the service provider will have access to read
and set mappings for K2K federation. Please note that the cloud_admin
service provider user cannot delete existing mappings or create new mappings.

In order to use the mapping commands, a v3 credentials source file is required.
Create a file containing the credentials and replace the tags <> with
the appropriate information:

More information on managing mappings can be found here:
http://docs.openstack.org/developer/keystone/mapping_combinations.html

When a user logs uses K2K federation and logs on to the service provider
using their identity provider account, a user account gets created locally
on the service provider. **Please note that the user account that gets
created during federation are treated as ephemeral and may be deleted
at a later time.** In the default mapping, the cloud_admin on the
identity provider user will be federated and a local cloud_admin user
will be created in the federated domain. This user is different from
the cloud_admin user which exists in the 'Default' domain. The
ephemeral cloud_admin user which exists in the federated domain
may be deleted in the future.

We need the source file from the previous section to run the following mapping commands.
{% highlight bash %}
    source cloud_adminrc
    openstack mapping list
    openstack mapping show mapping-for-k2k-federation
    openstack mapping set mapping-for-k2k-federation --rules <mappings file>

    # You can also use the --help flag for more help
    openstack mapping show --help

    # You can also format the output
    openstack mapping show mapping-for-k2k-federation --format json
{% endhighlight %}

The `openstack mapping list` command shows a list of mappings, this should
show the mapping-for-k2k-federation mapping.

The `openstack mapping show mapping-for-k2k-federation` command show
the details of the given mapping. It should contain a json of the rules
for the mapping.

The `openstack mapping set mapping-for-k2k-federation --rules newmappings.json`
command shows how to update and set the mapping-for-k2k-federation mapping.
The mappings file should follow the format:

```
[
   {
      "local": [
        <group>
      ],
      "remote": [
        <condition>
      ]
   }
]
```

The rules file should contain a list of rules that map remote users
to a group that exists on the service provider.
The local section contains a rule that contains the group that
the remote users should map to. The local group rule is required.

{% highlight json %}
{
  "group": {
    "domain": {
      "name": "Default"
    },
    "name": "cloud_admin"
  }
}
{% endhighlight %}

The remote section includes rules for which remote users should be allowed
access.
```
{
    "type": "openstack_user",
    "any_one_of": [
               "cloud_admin"
        ]
}
```

The possible user attributes types that can be used in the remote rules are:
```
openstack_user
openstack_user_domain
openstack_roles
openstack_project
openstack_project_domain
```

The possible actions to filter on remote attributes are:
```
empty
any_ony_of
not_any_of
blacklist
whitelist
```

Here are some example scenarios:
Example 1. mapping the cloud_admin user to a cloud_admin group and sets
the username to be cloud_admin in the federated domain:
This is the default mapping file:
{% highlight json %}
[
  {
    "local": [
      {
        "user": {
          "name": "{0}"
        }
      },
      {
        "group": {
          "domain": {
            "name": "Default"
          },
          "name": "cloud_admin"
        }
      }
    ],
    "remote": [
      {
        "type": "openstack_user"
      },
      {
        "type": "openstack_user",
        "any_one_of": [
          "cloud_admin"
        ]
      }
    ]
  }
]
{% endhighlight %}

Example 2. Member mappings
This maps users who have the role members on project demo
on the identity provider to a group (demo_member_group from group example 2)
on the service provider.
Here we assume that the demo_member_group is a group on the
service provider with the _member_ role on the demo project on the service
provider.
{% highlight bash %}
# We are running a series of bash commands to cat the following string
# into a file and then set the mapping.
cat <<EOF > federated_member_mapping.json
[
  {
    "local": [
      {
        "user": {
          "name": "{0}"
        }
      },
      {
        "group": {
          "domain": {
            "name": "Default"
          },
          "name": "demo_member_group"
        }
      }
    ],
    "remote": [
      {
        "type": "openstack_user"
      },
      {
        "type": "openstack_project",
        "any_one_of": [
          "demo"
        ]
      },
      {
        "type": "openstack_roles",
        "any_one_of": [
          "_member_"
        ]
      }
    ]
  }
]
EOF
openstack mapping set mapping-for-k2k-federation --rules federated_member_mapping.json
{% endhighlight %}

Example 3. Multiple rules
{% highlight json %}
[
  {
    "local": [
      {
        "user": {
          "name": "{0}"
        }
      },
      {
        "group": {
          "domain": {
            "name": "Default"
          },
          "name": "cloud_admin"
        }
      }
    ],
    "remote": [
      {
        "type": "openstack_user"
      },
      {
        "type": "openstack_user",
        "any_one_of": [
          "cloud_admin"
        ]
      }
    ]
  },
  {
    "local": [
      {
        "user": {
          "name": "{0}"
        }
      },
      {
        "group": {
          "domain": {
            "name": "Default"
          },
          "name": "demo_member_group"
        }
      }
    ],
    "remote": [
      {
        "type": "openstack_user"
      },
      {
        "type": "openstack_project",
        "any_one_of": [
          "demo"
        ]
      },
      {
        "type": "openstack_roles",
        "any_one_of": [
          "_member_"
        ]
      }
    ]
  }
]
{% endhighlight %}

## <a name="using_horizon"></a>Using Horizon
The OpenStack dashboard on the identity provider should have a
drop down labeled "Authenticate with Keystone to Keystone Federation".
If "Identity Provider" is selected, federation will not be used
and the user will be signed into the identity provider OpenStack.
If the service provider is selected, then federation will be used
and the identity provider user will be federated to the
service provider. To switch between providers, the user will need
to log out and select the provider.

```
Please note that the horizon login screen for K2K for Blue Box
is not a standard OpenStack feature and may change in the future.
```

## <a name="using_the_python_api_libraries"></a>Using the Python API Libraries

Make a source file which we will use to authenticate using
the K2K authentication plugin. The OS_SERVICE_PROVIDER is
the service provider id which can be obtained by running the
following command against the identity provider:

{% highlight bash %}
openstack server provider list
{% endhighlight %}

Here we can create a source file that will be used by our python script
to list instances on the service provider using the cloud_admin credentials
from the identity provider.
{% highlight bash %}
# This contains authentication credentials for logging into the Idp
# and Sp target information.
export OS_USERNAME=cloud_admin
export OS_PASSWORD=<cloud admin password>
export OS_AUTH_URL=https://k2kf-idp.open-test.ibmcloud.com:5000/v3
export OS_PROJECT_NAME=demo
export OS_DOMAIN_NAME=Default

# You can see the list of service providers by doing (on the identity provider):
# `openstack service provider list`
export OS_SERVICE_PROVIDER=<service provider id>
{% endhighlight %}

The following code uses the Keystone2Keystone auth plugin to get an unscoped token.
This unscoped token is used to get a scoped token which is scoped to one of the projects
that the federated user has access to. Once we have the scoped token then we can list the server instances on
the service provider.

{% highlight python %}
#!/usr/bin/python

from keystoneauth1 import session
from keystoneauth1.identity.v3 import Token
from keystoneauth1.identity.v3.k2k import Keystone2Keystone
from keystoneauth1.identity.v3.password import Password
from keystoneclient.v3.client import Client

from novaclient import client
import os

# Create a source file and export these variables
OS_AUTH_URL = os.environ.get('OS_AUTH_URL', 'https://127.0.0.1:5000/v3')
OS_USERNAME = os.environ.get('OS_USERNAME', 'cloud_admin')
OS_PASSWORD = os.environ.get('OS_PASSWORD', 'asdf')
OS_PROJECT_NAME = os.environ.get('OS_PROJECT_NAME', 'demo')
OS_DOMAIN_NAME = os.environ.get('OS_DOMAIN_NAME', 'default')
OS_SERVICE_PROVIDER = os.environ.get('OS_SERVICE_PROVIDER', 'k2kf-sp')
OS_VERIFY_CERT = os.environ.get('OS_VERIFY_CERT', 'True')


def get_project_and_federated_session():
    verify_cert = OS_VERIFY_CERT == 'True'
    # authenticate to the idp
    idp_auth = Password(auth_url=OS_AUTH_URL,
                        username=OS_USERNAME,
                        password=OS_PASSWORD,
                        user_domain_name=OS_DOMAIN_NAME,
                        project_name=OS_PROJECT_NAME,
                        project_domain_name=OS_DOMAIN_NAME,
                        )
    # get unscoped auth using k2k auth plugin
    unscoped_auth = Keystone2Keystone(base_plugin=idp_auth,
                                      service_provider=OS_SERVICE_PROVIDER)

    # get first available project and scoped auth
    sess = session.Session(verify=verify_cert)
    unscoped_access_info = unscoped_auth.get_access(sess)
    unscoped_client = Client(session=sess, auth=unscoped_auth)

    # Get first project
    projects = unscoped_client.federation.projects.list()
    project = projects[0]

    # Create a session with a scoped token for the project
    unscoped_token = unscoped_access_info.auth_token
    scoped_token = Token(auth_url=unscoped_auth.auth_url,
                         token=unscoped_token,
                         project_id=project.id,
                         reauthenticate=False)
    federated_session = session.Session(auth=scoped_token)
    return project, federated_session


def main():
    """Get a """
    project, scoped_session = get_project_and_federated_session()
    nova = client.Client(version=2, session=scoped_session)
    print "The servers running on project %s are: " % project.name
    for server in nova.servers.list():
        print server.name

if __name__ == '__main__':
    main()

{% endhighlight %}

## <a name="more_mappings_and_groups"></a>More Mappings and Groups
Example 1. Heat Users
Currently there is an issue with federated users and with the trustor/trustee feature in Keystone. This causes
the federated heat user to not be able to delegate their heat_stack_owner role.

Create heat federation group
{% highlight bash %}
# Source a file with the authentication info for the service provider
# cloud_admin user.
source cloud_adminrc
# Here we use the role heat_stack_owner and NOT heat_stack_user
openstack group list
openstack group create heat_stack_owner_group --or-show
openstack role assignment list --name --group heat_stack_owner_group
openstack role add heat_stack_owner --group heat_stack_owner_group --project demo
openstack role assignment list --name --group heat_stack_owner_group
# +------------------+------+--------------------------------+--------------+--------+-----------+
# | Role             | User | Group                          | Project      | Domain | Inherited |
# +------------------+------+--------------------------------+--------------+--------+-----------+
# | heat_stack_owner |      | heat_stack_owner_group@Default | demo@Default |        | False     |
# +------------------+------+--------------------------------+--------------+--------+-----------+
{% endhighlight %}

Create heat federation mappings
{% highlight bash %}
cat <<EOF > federated_heat_stack_owner_mapping.json
[
  {
    "local": [
      {
        "user": {
          "name": "{0}"
        }
      },
      {
        "group": {
          "domain": {
            "name": "Default"
          },
          "name": "heat_stack_owner_group"
        }
      }
    ],
    "remote": [
      {
        "type": "openstack_user"
      },
      {
        "type": "openstack_roles",
        "any_one_of": [
          "heat_stack_owner"
        ]
      }
    ]
  }
]
EOF
openstack mapping set mapping-for-k2k-federation --rules federated_heat_stack_owner_mapping.json
{% endhighlight %}

You will need to do a workaround for the trust delegation by assigning
the heat_stack_owner role to the user directly. This is the user
that gets created during federated log in.
The user's domain is federated and might have the
value of None (Federation=None).

{% highlight bash %}
openstack user list

# The federated user should have a domain of None
openstack user show <federated user>

# Here we use the user ID
openstack role add heat_stack_owner --user <federated user ID> --project <project>
{% endhighlight %}
