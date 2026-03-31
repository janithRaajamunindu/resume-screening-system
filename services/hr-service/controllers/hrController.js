const model = require("../models/hrModel");

// CREATE
exports.createCandidate = (req, res) => {
  const result = model.create(req.body);
  return res.status(200).json(result);
};

// READ ALL
exports.getAllCandidates = (req, res) => {
  return res.status(200).json(model.getAll());
};

// READ ONE
exports.getCandidateById = (req, res) => {
  return res.status(200).json(model.getById(req.params.id));
};

// UPDATE
exports.updateCandidate = (req, res) => {
  model.update(req.params.id, req.body);
  return res.status(200).json({ message: "Updated" });
};

// DELETE
exports.deleteCandidate = (req, res) => {
  model.delete(req.params.id);
  return res.status(200).json({ message: "Deleted" });
};