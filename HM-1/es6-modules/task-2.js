import csv from 'csvtojson';
import { createReadStream, createWriteStream, writeFile } from 'fs';

const csvFilePath = `${__dirname}/../csv/node_mentoring_t1_2_input_example.csv`;

writeFile('books.txt', null, (err) => console.log(err));

const readStream = createReadStream(csvFilePath);
const writeStream = createWriteStream("books.txt");

readStream.on('error', (err) => console.log(err));
writeStream.on('error', (err) => console.log(err));

readStream.pipe(csv()).pipe(writeStream);
