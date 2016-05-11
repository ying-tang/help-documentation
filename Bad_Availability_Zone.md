



I'm trying to deploy a VM using Bluemix and am getting an error: OpenStack API Bad Request (Invalid input received: Availability zone 'compute_enterprise' is invalid)

This error will go away in the next few months after we upgrade you to OpenStack Mitaka, but until that happens, we recommend updating your microbosh YML file to ignore the volume availability zone, via ignore_server_availability_zone.
