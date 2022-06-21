# Changelog

## [1.2.0] - 2022-06-21

### Feat
- New setting `keep_days`, default empty. If set, the script will remove any backups older than the value of this variable.
  E.g., if you define `keep_days = 7`, past 7 days backups are stored, any older are automatically deleted after the rsync.
