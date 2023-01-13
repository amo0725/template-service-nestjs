#!/usr/bin/env bash

RED='\033[0;31m'
NC='\033[0m' # No Color

ACTIONS="init|set"
ACTION=$1
ACTIONS_PATTERN="^($ACTIONS)$"
ENVS="local|development|staging|production|test|ci"
ENVS_PATTERN="^($ENVS)$"
ENV=$2
ENVS_PATH="env"

usage() {
    echo -e "${RED}current" "$(grep NODE_ENV .env)" "${NC}"
    echo -e "${RED}Usage: $0 [${ACTIONS}] [${ENVS}]${NC}"
    exit 1
}

set() {
    pwd
    cp ${ENVS_PATH}/.env."${ENV}" .env
}

init() {
    pwd
    cp .env.example ${ENVS_PATH}/.env."${ENV}"
}

if [[ ${ENV} =~ $ENVS_PATTERN && ${ACTION} =~ $ACTIONS_PATTERN ]]; then
    case $ACTION in
        init)
            init "${ENV}"
            ;;
        set)
            set "${ENV}"
            ;;
        *)
            usage
            ;;
    esac
else
    usage
fi



