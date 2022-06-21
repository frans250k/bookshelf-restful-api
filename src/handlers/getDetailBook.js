const books = require("../books");

const getBookHandler = (request, h) => {
  const { id } = request.params;
  const book = books.filter((item) => item.id === id)[0];

  // [Mandatory] Get Detail Books With Correct Id
  if (book !== undefined) {
    return {
      status: "success",
      data: {
        book,
      },
    };
  }

  // [Mandatory] Get Detail Books With Correct Id
  const response = h.response({
    status: "fail",
    message: "Buku tidak ditemukan",
  });
  response.code(404);
  return response;
};

module.exports = getBookHandler;
