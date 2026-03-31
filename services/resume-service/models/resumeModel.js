let resumes = [];

module.exports = {
  getAll: () => resumes,

  getById: (id) => resumes.find((r) => r.id == id),

  create: (data) => {
    const resume = { id: Date.now(), ...data };
    resumes.push(resume);
    return resume;
  },

  update: (id, data) => {
    resumes = resumes.map((r) => (r.id == id ? { ...r, ...data } : r));
  },

  delete: (id) => {
    resumes = resumes.filter((r) => r.id != id);
  },
};
