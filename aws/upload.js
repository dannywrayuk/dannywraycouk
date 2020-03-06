const awsCli = require('aws-cli-js');

const aws = new awsCli.Aws();

const BUCKET_NAME = require('./credentials.json').S3.url.website_main;

aws.command(`s3 cp build/ ${BUCKET_NAME} --recursive`).then((data) => {
  console.log(data.raw);
});
