const csv = require("csvtojson");
const { createReadStream, createWriteStream } = require("fs");
const csvFilePath = "./csv/node_mentoring_t1_2_input_example.csv";

const readStream = createReadStream(csvFilePath);
const writeStream = createWriteStream("./books.txt");

readStream.pipe(csv()).pipe(writeStream);
