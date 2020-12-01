const path = require('path')
const forever = require('forever')

forever.startDaemon(path.resolve(__dirname, 'tick-continuously.script.js'), {
  logFile: path.resolve(__dirname, '../forever-log.txt'),
  outFile: path.resolve(__dirname, '../script-log.txt'),
  silent: true
})