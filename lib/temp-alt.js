var _ = require('lodash'),
    PROPS = [
      'baro_temp',
      'baro_alt'
    ]

function parse_string(input, cb) {
  var data = input.split('|')
  var p = _.zipObject(PROPS,
          _.map(data, function (n) { return parseFloat(n) }))
  p.type = 'temp_alt'
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
