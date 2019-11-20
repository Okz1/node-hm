const csv = require('csvtojson');
const fs = require("fs");

const csvFilePath= './csv/node_mentoring_t1_2_input_example.csv';

const convertToJson =  async (path) => {
	const convertedJson = await csv().fromFile(path);
	convertedJson.map(book => {
		const mappedBook = {book: book.Book, author: book.Author, price: book.Price};
		appendBook(mappedBook);
		return mappedBook;
	});
};

const appendBook = (book) => {
	fs.appendFile('books.txt', JSON.stringify(book) + '\n', (err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log('Saved!');
	});
};

convertToJson(csvFilePath);
