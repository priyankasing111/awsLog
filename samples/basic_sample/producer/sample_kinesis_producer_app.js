/***
Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
***/

'use strict';

var AWS = require('aws-sdk');
var config = require('./config');
var producer = require('./sample_producer');

AWS.config.update({
    accessKeyId: "AKIAJPLX2GNZSWYQ4UQA",
    secretAccessKey: "y1a/ABHgWRxw2h9s/r7ZkeTKa/zFN0B8Rg0ePPAx",
    "region": "ap-south-1"
});
//var kinesis = new AWS.Kinesis({ region: config.kinesis.region });
var kinesis = new AWS.Firehose;
console.log(kinesis);
producer(kinesis, config.sampleProducer).run();