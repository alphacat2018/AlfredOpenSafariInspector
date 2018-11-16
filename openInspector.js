#!/usr/local/bin/node
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const historyUtil = require('./historyUtil')

async function main() {
  try {
    const args = process.argv[2];
    let argArr = args.split ('####')
    let device = argArr[0]
    let app = argArr[1]

    historyUtil.updateHistory(args)
    
    const { stdout, stderr } = await exec(`osascript ./openInspector.applescript "${device}" "${app}"`);
  } catch (err) {
    console.warn(err);
  }
}

main();
