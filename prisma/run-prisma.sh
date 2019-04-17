#!/bin/bash
set -e

export PRISMA_CONFIG="
port: 4466
databases:
  default:
    connector: postgres
    host: $AA_DB_HOST
    port: '$AA_DB_PORT'
    database: $AA_DB_NAME
    user: $AA_DB_USER
    password: $AA_DB_PASSWORD
    migrations: true
    rawAccess: true
"
/app/start.sh
