
# rsync snapshots to remote location

Automatically rsync snapshots to remote server.


## Table of Contents

* [Configuration](#configuration)
* [Example](#example)

## Configuration

|Parameter|Required|Description|
|---------|--------|-----------|
|`rsync_host`|Yes|The hostname/url to the rsync server.|
|`rsync_user`|Yes|Username to use for `rsync`.|
|`rsync_password`|Yes|Password to use for `rsync`.|
|`remote_directory`|Yes|The directory to put the backups on the remote server.<br />For example, on a Synology NAS, this would be the name of the Share.|


## Example

Example of a configuration that would do daily backups at 4 AM.

_configuration.yaml_
```yaml
automations:
  - alias: Daily Backup at 4 AM
  trigger:
    platform: time
    at: '4:00:00'
  action:
  - service: hassio.addon_start
    data:
      addon: ce20243c_rsync_remote_backup
```

_Add-on configuration_:
```yaml
rsync_host: 192.168.1.2
rsync_user: hass
rsync_password: 'some_password'
remote_directory: 'homeassistant'
```

**Note**: _This is just an example, don't copy and past it! Create your own!_
