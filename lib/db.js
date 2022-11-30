const fs = require("fs");
const path = require("path");

function newNote(body, notes) {
  const note = body;
  notes.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/notes.json"),
    JSON.stringify({ notes }, null, 2)
  );
  return note;
}

function deleteNote(id, notes) {
  let note = notes.filter((el) => {
    if (el.id == id) {
      return false;
    } else {
      return true;
    }
  });
  let index = 0;
  note.forEach((note) => {
    note.id = index;
    index += 1;
  });

  fs.writeFileSync(
    path.join(__dirname, "../db/notes.json"),
    JSON.stringify({ notes }, null, 2)
  );
  return note;
}

module.exports = {
  newNote,
  deleteNote,
};
