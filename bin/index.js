#! /usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Please enter the name of the application');
  process.exit(1);
}

const projectName = args[0];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = 'git@github.com:akbarik/rev-boilerplate.git';

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(
      `The folder ${projectName} already exists in the current directory, please give it another name.`
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log('Downloading files...');
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

    process.chdir(projectPath);

    console.log('Installing dependencies...');
    execSync('yarn');

    console.log('Removing useless files');
    execSync('rm -rf ./.git');
    execSync('rm README.md');
    fs.rmdirSync(path.join(projectPath, 'bin'), { recursive: true });

    console.log(`Adding corresponding changes to package.json`);
    const packageJsonPath = './package.json';

    const packageJsonData = fs.readFileSync(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonData);

    // Update the "name" field
    packageJson.name = projectName;

    // Update the "version" field
    packageJson.version = '0.0.1';

    // Remove the "bin" field
    delete packageJson.bin;

    // Write the updated JSON back to the file
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    console.log('The installation is done, you can proceed with developing your new app!');
  } catch (err) {
    console.log(err);
  }
}
main();
