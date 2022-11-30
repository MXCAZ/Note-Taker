const router = require("express").Router();
const { newNote, deleteNote } = require("../../lib/db");

let { notes } = require("../../db/notes.json");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  if (notes) {
    req.body.id = notes.length.toString();
  } else {
    req.body.id = 0;
  }
  res.json(newNote(req.body, notes));
});

router.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;
  notes = await deleteNote(id, notes);
  res.json(notes);
});

module.exports = router;
