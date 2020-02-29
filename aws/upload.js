const awsCli = require('aws-cli-js');

const aws = new awsCli.Aws();

const BUCKET_NAME = 's3://dannywray.co.uk/';

aws.command(`s3 cp build/ ${BUCKET_NAME} --recursive`).then((data) => {
  console.log(data.raw);
});
