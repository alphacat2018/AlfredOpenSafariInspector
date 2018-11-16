#!/usr/local/bin/node
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const historyUtils = require("./historyUtil");

async function main() {
  try {
    let output = { items: [] };

    let historyArr = historyUtils.getHistoryFile();
    historyArr.forEach(history => {
      let args = history.split("####");
      output.items.push({
        title: args[1],
        subtitle: args[0],
        arg: history
      });
    });

    let devices = await listDevices();
    devices.forEach(device => {
      output.items.push({
        title: device,
        arg: device
      });
    });

    console.log(JSON.stringify(output));
  } catch (err) {
    console.warn(err);
  }
}

async function listDevices() {
  const { stdout, stderr } = await exec("osascript ./listDevices.applescript");

  if (stdout) {
    let filteredMenuItems = stdout
      .split(", ")
      .filter(x => x != "missing value");
    let lowIndex = filteredMenuItems.findIndex(x => x == "User Agent");
    let highIndex = filteredMenuItems.findIndex(x => x == "Service Workers");

    let deviceArr = filteredMenuItems.slice(lowIndex + 1, highIndex);

    return deviceArr;
  }
}

main();
