The Cinder API allows calling snapshot on attached volumes, and this action can be forced (when calling `snapshot-create` via the CLI client), as follows:

```
cinder snapshot-create --display-name <SNAPSHOT-DISPLAY-NAME> <CINDER-VOLUME-ID> --force True
```

Warning: If the volume is being written to actively, your snapshot's filesystem consistency could be corrupted. Please test the snapshot after it is created and do a full filesystem check on it. 
