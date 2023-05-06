const { addNoteHandler, getAllNoteshandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNoteshandler,
  },
];

module.exports = routes;
