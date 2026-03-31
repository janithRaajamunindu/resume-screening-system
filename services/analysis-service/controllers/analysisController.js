const model = require("../models/analysisModel");

// CREATE
exports.createAnalysis = (req, res) => {
  const result = model.create(req.body);
  res.json(result);
};

// READ ALL
exports.getAllAnalyses = (req, res) => {
  res.json(model.getAll());
};

// READ ONE
exports.getAnalysisById = (req, res) => {
  res.json(model.getById(req.params.id));
};

// UPDATE
exports.updateAnalysis = (req, res) => {
  model.update(req.params.id, req.body);
  res.json({ message: "Updated" });
};

// DELETE
exports.deleteAnalysis = (req, res) => {
  model.delete(req.params.id);
  res.json({ message: "Deleted" });
};