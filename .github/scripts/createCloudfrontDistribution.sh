#!/bin/bash
set -e

if [[ $(aws cloudfront list-distributions --query "DistributionList.Items[0].Id") != null ]] && [[ $(aws cloudfront list-distributions --query "DistributionList.Items[?Origins.Items[?OriginPath=='/web/$1']].Id" --output text) ]] ; then 
    echo "Distribution for PR #$1 already exists!"
    exit 0;
else
    echo $(aws cloudfront create-distribution --origin-domain-name ad-hoc-expensify-cash.s3.us-east-1.amazonaws.com --default-root-object index.html) >> cloudfront.config.json

    CONFIG=$(cat "./cloudfront.config.json")
    DISTRIBUTION_ID=$(echo $CONFIG | jq -r .Distribution.Id) 
    ETAG=$(echo $CONFIG | jq -r .ETag) 

    echo $CONFIG | jq -r .Distribution.DistributionConfig >> dist.config.json

    tmp=$(mktemp /tmp/tmp.XXXXXXX)
    NEW_ORIGIN_PATH=$(echo "/web/$1")
    jq --arg originPath "$NEW_ORIGIN_PATH" '(.Origins.Items[] | select(.OriginPath == "")).OriginPath |= $originPath' dist.config.json  > "$tmp" && mv "$tmp"  dist.config.json

    aws cloudfront update-distribution --id $DISTRIBUTION_ID --if-match $ETAG --distribution-config file://dist.config.json 
fi
