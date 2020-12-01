var forever = require('forever')

forever.list(false, function (err, data) {
  console.dir(data)
})