let analyses = [];

module.exports = {
  getAll: () => analyses,

  getById: (id) => analyses.find((a) => a.id == id),

  create: (data) => {
    const analysis = {
      id: analyses.length + 1,
      name: data.name || "Unknown Candidate",
      score: data.score || Math.floor(Math.random() * 100),
      skills: data.skills || ["JavaScript", "AI"],
    };
    analyses.push(analysis);
    return analysis;
  },

  update: (id, data) => {
    analyses = analyses.map((a) => (a.id == id ? { ...a, ...data } : a));
  },

  delete: (id) => {
    analyses = analyses.filter((a) => a.id != id);
  },
};