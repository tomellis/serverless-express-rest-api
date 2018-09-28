// index.js

const serverless = require('serverless-http');
const express = require('express')
const app = express()
// include AWS x-ray tracing
const awsXRay = require('aws-xray-sdk');
const awsSdk = awsXRay.captureAWS(require('aws-sdk'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

module.exports.handler = serverless(app);
