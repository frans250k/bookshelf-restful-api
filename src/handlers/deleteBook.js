const books = require("../books");

const deleteBookHandler = (request, h) => {
  const { id } = request.params;
  const index = books.findIndex((item) => item.id === id);

  // [Mandatory] Delete Book with Correct Id
  if (index !== -1) {
    books.splice(index, 1);
    const response = h.response({
      status: "success",
      message: "Buku berhasil dihapus",
    });
    response.code(200);
    return response;
  }

  // [Mandatory] Delete Book with Invalid Id
  const response = h.response({
    status: "fail",
    message: "Buku gagal dihapus. Id tidak ditemukan",
  });
  response.code(404);
  return response;
};

module.exports = deleteBookHandler;
