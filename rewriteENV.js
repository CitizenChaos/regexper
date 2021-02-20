const fs = require('fs')

let env = process.env.NODE_ENV

fs.writeFileSync('./env.js', `module.exports.RUN_MODE = '${env}'`)
