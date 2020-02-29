const awsCli = require('aws-cli-js');

const aws = new awsCli.Aws();

const DIST_NAME = 'E3CI2I43CYNJR9';

aws.command(`cloudfront create-invalidation --distribution-id ${DIST_NAME} --paths /index.html`).then((data) => {
  console.log(data.raw);
});
