#!/bin/bash
set -e

CONFIG_PATH=/data/options.json

# parse inputs from options
RSYNC_HOST=$(jq --raw-output ".rsync_host" $CONFIG_PATH)
RSYNC_USER=$(jq --raw-output ".rsync_user" $CONFIG_PATH)
RSYNC_PASSWORD=$(jq --raw-output ".rsync_password" $CONFIG_PATH)
REMOTE_DIRECTORY=$(jq --raw-output ".remote_directory" $CONFIG_PATH)

echo "[INFO] Sync snapshots to remote started..."

function copy-backup-to-remote {
    rsyncurl="$RSYNC_USER@$RSYNC_HOST::$REMOTE_DIRECTORY"
    echo "[INFO] Syncing /backup to ${REMOTE_DIRECTORY} on ${RSYNC_HOST} using rsync"
    sshpass -p "${RSYNC_PASSWORD}" rsync -av /backup/ "${rsyncurl}" --ignore-existing --progress
}

copy-backup-to-remote

echo "[INFO] Sync snapshots to remote Completed!"
exit 0
