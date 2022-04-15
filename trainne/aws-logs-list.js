/*
[
[345366 89921 45],
[029323 38239 23],
[38239 345366 15],
[029323 38239 77],
[345366 38239 23],
[029323 345366 13],
[38239 38239 23]
]
threshold: 3

Output: [345366 , 38239, 029323]
*/
function processLogs(logs, threshold) {
  const logsLength = logs.length;
  let values = [];
  let idMap = {};
  var count;
  for (var i = 0; i < logsLength; i++) {
    var log = logs[i][0].split(' ');
    if (log[0] == log[1]) {
      idMap[log[0]] ? idMap[log[0]]++ : (idMap[log[0]] = 1);
    } else {
      idMap[log[0]] ? idMap[log[0]]++ : (idMap[log[0]] = 1);
      idMap[log[1]] ? idMap[log[1]]++ : (idMap[log[1]] = 1);
    }
  }

  for (var id in idMap) {
    if (idMap[id] >= threshold) values.push(id);
  }

  return values.sort();
}

console.log(
  processLogs(
    [
      ["345366 89921 45"],
      ["029323 38239 23"],
      ["38239 345366 15"],
      ["029323 38239 77"],
      ["345366 38239 23"],
      ["029323 345366 13"],
      ["38239 38239 23"],
    ],
    3
  )
);
