const books = require("../books");

const getBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;
  // [Mandatory] Get All Books
  // *fix bug: result compare before push.books on addBooks.js routes/handlers.
  if (!name && !reading && !finished) {
    const response = h.response({
      status: "success",
      data: {
        books: books.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  // [Optional] Get All Reading Books
  if (reading) {
    const book = books.filter((item) => Number(item.reading) === Number(reading));

    const response = h.response({
      status: "success",
      data: {
        books: book.map((item) => ({
          id: item.id,
          name: item.name,
          publisher: item.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }

  // [Optional] Get All Books Contains "Dicoding" Name
  if (name) {
    const booksName = books.filter((item) => {
      const nameRegex = new RegExp(name, "ig");
      return nameRegex.test(item.name);
    });
    const response = h.response({
      status: "success",
      data: {
        books: booksName.map((item) => ({
          id: item.id,
          name: item.name,
          publisher: item.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }
  // [Optional] Get All Finished Books
  if (finished) {
    const booksFinished = books.filter((item) => Number(item.finished) === Number(finished));
    const response = h.response({
      status: "success",
      data: {
        books: booksFinished.map((item) => ({
          id: item.id,
          name: item.name,
          publisher: item.publisher,
        })),
      },
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: "fail",
    message: "Buku tidak ditemukan",
  });
  response.code(404);
  return response;
};

module.exports = getBooksHandler;
