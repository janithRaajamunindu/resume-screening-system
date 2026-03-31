const model = require("../models/resumeModel");

// CREATE
exports.createResume = (req, res) => {
  const result = model.create(req.body);
  return res.status(200).json(result);
};

// READ ALL
exports.getAllResumes = (req, res) => {
  return res.status(200).json(model.getAll());
};

// READ ONE
exports.getResumeById = (req, res) => {
  return res.status(200).json(model.getById(req.params.id));
};

// UPDATE
exports.updateResume = (req, res) => {
  model.update(req.params.id, req.body);
  return res.status(200).json({ message: "Updated" });
};

// DELETE
exports.deleteResume = (req, res) => {
  model.delete(req.params.id);
  return res.status(200).json({ message: "Deleted" });
};
