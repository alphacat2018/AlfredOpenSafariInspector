#!/usr/local/bin/node
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function main() {
  try {
    const device = process.argv[2];

    let output = { items: [] };

    let devices = await listApplications(device);
    devices.forEach(application => {
      output.items.push({
        title: application,
        arg: `${device}####${application}`
      });
    });

    console.log(JSON.stringify(output));
  } catch (err) {
    console.warn(err);
  }
}

async function listApplications(device) {
  const { stdout, stderr } = await exec(`osascript ./listApplications.applescript "${device}"`);

  if (stdout) {
    let filteredMenuItems = stdout
      .split(", ")
      .filter(x => x != "missing value");

    return filteredMenuItems;
  }
}

main();
