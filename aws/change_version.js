const awsCli = require('aws-cli-js');

const aws = new awsCli.Aws();

const BUCKET_NAME = require('./credentials.json').S3.URL.website_main;

const VERSION = process.argv[2];
if (VERSION === undefined || !VERSION.match(/\d.\d.\d/)) {
  throw Error('Invalid Version.');
}

aws.command(`s3 cp ${BUCKET_NAME}${VERSION}/index.html ${BUCKET_NAME}index.html`).then((data) => {
  console.log(data.raw);
});

const DIST_NAME = require('./credentials.json').Cloudfront.ID.website_main;

aws.command(`cloudfront create-invalidation --distribution-id ${DIST_NAME} --paths / /index.html`).then((data) => {
  console.log(data.raw);
});
