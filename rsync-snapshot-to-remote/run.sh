#!/bin/bash
set -e

CONFIG_PATH=/data/options.json

# parse inputs from options
RSYNC_HOST=$(jq --raw-output ".rsync_host" $CONFIG_PATH)
RSYNC_USER=$(jq --raw-output ".rsync_user" $CONFIG_PATH)
RSYNC_PASSWORD=$(jq --raw-output ".rsync_password" $CONFIG_PATH)
REMOTE_DIRECTORY=$(jq --raw-output ".remote_directory" $CONFIG_PATH)

START=$(date +%s)
res1=$(date +%s.%N)

echo "$(date +"%Y-%m-%d-%H_%M_%S") - [INFO] Sync snapshots to remote started..."

function copy-backup-to-remote {
    rsyncurl="$RSYNC_USER@$RSYNC_HOST::$REMOTE_DIRECTORY"
    echo "[INFO] Local files:"
    ls -latrh /backup

    echo "[INFO] Remote files:"
    sshpass -p "${RSYNC_PASSWORD}" ssh "${RSYNC_USER}@${RSYNC_HOST}" "ls -latrh ${REMOTE_DIRECTORY}"

    echo "[INFO] Syncing /backup to ${REMOTE_DIRECTORY} on ${RSYNC_HOST} using rsync"
    sshpass -p "${RSYNC_PASSWORD}" rsync -av /backup/ "${rsyncurl}" --ignore-existing
}

copy-backup-to-remote

STOP=$(date +%s)

END=$((STOP - START))

echo "$(date +"%Y-%m-%d-%H_%M_%S") - [INFO] Sync snapshots to remote Completed!"
echo "$(date +"%Y-%m-%d-%H_%M_%S") - [INFO] Synced in ${END} seconds."

res2=$(date +%s.%N)
dt=$(echo "$res2 - $res1" | bc)
dd=$(echo "$dt/86400" | bc)
dt2=$(echo "$dt-86400*$dd" | bc)
dh=$(echo "$dt2/3600" | bc)
dt3=$(echo "$dt2-3600*$dh" | bc)
dm=$(echo "$dt3/60" | bc)
ds=$(echo "$dt3-60*$dm" | bc)

LC_NUMERIC=C printf "Total runtime: %d:%02d:%02d:%02.4f\n" "${dd}" "${dh}" "${dm}" "${ds}"
exit 0
