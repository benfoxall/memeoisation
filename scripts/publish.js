const { execSync } = require('child_process');

const { version: current, name } = require('../package.json');

const published = JSON.parse(execSync(`npm info ${name} --json`));

if (!published.versions.includes(current)) {
  console.log(`publish! ${current} (current: ${published.versions})`);
  execSync('npm publish');
} else {
  console.log(`skiping deploy ${current}`);
}
