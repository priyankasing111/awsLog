/***
Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
***/

'use strict';

var config = module.exports = {
    kinesis: {
        region: 'ap-south-1'
    },

    sampleProducer: {
        stream: 'testing',
        shards: 2,
        waitBetweenDescribeCallsInSeconds: 5
    }
};