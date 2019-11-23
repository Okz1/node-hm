'use strict';

var _csvtojson = require('csvtojson');

var _csvtojson2 = _interopRequireDefault(_csvtojson);

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var csvFilePath = __dirname + '/../csv/node_mentoring_t1_2_input_example.csv';

(0, _fs.writeFile)('books.txt', null, function (err) {
  return console.log(err);
});

var readStream = (0, _fs.createReadStream)(csvFilePath);
var writeStream = (0, _fs.createWriteStream)("books.txt");

readStream.on('error', function (err) {
  return console.log(err);
});
writeStream.on('error', function (err) {
  return console.log(err);
});

readStream.pipe((0, _csvtojson2.default)()).pipe(writeStream);