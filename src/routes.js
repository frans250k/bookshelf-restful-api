const addBookHandler = require("./handlers/addBooks");
const getBooksHandler = require("./handlers/getBooks");
const getBookHandler = require("./handlers/getDetailBook");
const editBookHandler = require("./handlers/editBook");
const deleteBookHandler = require("./handlers/deleteBook");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBookHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookHandler,
  },
];

module.exports = routes;
