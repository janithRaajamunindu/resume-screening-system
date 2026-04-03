const model = require("../models/matchingModel");

// CREATE
exports.createMatch = (req, res) => {
  const result = model.create(req.body);
  return res.status(200).json(result);
};

// READ ALL
exports.getAllMatches = (req, res) => {
  return res.status(200).json(model.getAll());
};

// READ ONE
exports.getMatchById = (req, res) => {
  return res.status(200).json(model.getById(req.params.id));
};

// UPDATE
exports.updateMatch = (req, res) => {
  model.update(req.params.id, req.body);
  return res.status(200).json({ message: "Updated" });
};

// DELETE
exports.deleteMatch = (req, res) => {
  model.delete(req.params.id);
  return res.status(200).json({ message: "Deleted" });
}; 