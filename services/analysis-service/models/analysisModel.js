
let analyses = [];

module.exports = {
  getAll: () => analyses,

  getById: (id) => analyses.find((a) => a.id == id),

  create: (data) => {
    const analysis = {
      id: Date.now(),
      score: Math.floor(Math.random() * 100),
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