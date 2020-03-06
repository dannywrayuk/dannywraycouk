const awsCli = require('aws-cli-js');

const aws = new awsCli.Aws();

const DIST_NAME = require('./credentials.json').Cloudfront.ID.website_main;

aws.command(`cloudfront create-invalidation --distribution-id ${DIST_NAME} --paths / /index.html`).then((data) => {
  console.log(data.raw);
});
