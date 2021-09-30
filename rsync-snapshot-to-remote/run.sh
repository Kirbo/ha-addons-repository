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
    SSH_URL="${RSYNC_USER}@${RSYNC_HOST}"
    RSYNC_URL="${SSH_URL}::${REMOTE_DIRECTORY}"
    echo "[INFO] Local files:"
    ls -ltrh /backup

    LOCAL_FILES=$(ls -trh /backup)

    export SSHPASS="${RSYNC_PASSWORD}"

    echo "[INFO] Remote files:"
    sshpass -ve ssh -o StrictHostKeyChecking=no ${SSH_URL} "ls -ltrh ${REMOTE_DIRECTORY}"
    REMOTE_FILES=$(sshpass -ve ssh -o StrictHostKeyChecking=no ${SSH_URL} "ls -trh ${REMOTE_DIRECTORY}")

    echo "[INFO] New files to be synced $(diff <(echo "${LOCAL_FILES}") <(echo "${REMOTE_FILES}"))"

    echo "[INFO] Syncing /backup to ${REMOTE_DIRECTORY} on ${RSYNC_HOST} using rsync"
    sshpass -ve rsync -av /backup/ "${RSYNC_URL}" --ignore-existing
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
