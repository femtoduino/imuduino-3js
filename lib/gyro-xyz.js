var _ = require('lodash'),
    PROPS = [
      'gyro_x',
      'gyro_y',
      'gyro_z'
    ]

function parse_string(input, cb) {
  var data = input.split('|')
  var p = _.zipObject(PROPS,
          _.map(data, function (n) { return parseFloat(n) }))
  p.type = 'gyro_xyz'
  if (cb instanceof Function) {
    cb(p)
  }
}

function parse_buffer(data, cb) {
  parse_string(data.toString(), cb)
}

module.exports = {
  'parse_string': parse_string,
  'parse_buffer': parse_buffer
}
