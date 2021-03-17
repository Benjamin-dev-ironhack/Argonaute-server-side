const { Schema, model } = require("mongoose");

const argonauteSchema = new Schema ({
  name: String,
  description: String,
});

const Argonaute = model("Argonaute", argonauteSchema);

module.exports = Argonaute;