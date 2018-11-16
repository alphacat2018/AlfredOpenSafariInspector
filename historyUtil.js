const fs = require('fs');

const RECENT_HISTORY_NUM = 2;
function updateHistory(history) {
  let historyJson = readHistoryFile() || [];
  let index = historyJson.findIndex (x => x == history)
  if (index > -1) {
    historyJson.splice(index, 1)
  }

  historyJson.unshift(history);
  if (historyJson.length > RECENT_HISTORY_NUM) {
    historyJson.splice(
      RECENT_HISTORY_NUM,
      historyJson.length - RECENT_HISTORY_NUM
    );
  }

  writeHistoryFile(JSON.stringify(historyJson));
}

function readHistoryFile() {
  try {
    let str = fs.readFileSync("./history.txt");
    return JSON.parse(str);
  } catch (err) {
    console.warn ("historyJson err", err)
    return [];
  }
}

function writeHistoryFile(history) {
  try {
    fs.writeFile("./history.txt", history, function(err) {
      if (err) {
        return console.log(err);
      }
    });
  } catch (err) {}
}

module.exports = {
    updateHistory: updateHistory,
    getHistoryFile: readHistoryFile,
}