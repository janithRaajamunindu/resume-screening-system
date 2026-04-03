let candidates = [];

module.exports = {
  getAll: () => candidates,

  getById: (id) => candidates.find((c) => c.id == id),

  create: (data) => {
    const candidate = { id: Date.now(), ...data };
    candidates.push(candidate);
    return candidate;
  },

  update: (id, data) => {
    candidates = candidates.map((c) => (c.id == id ? { ...c, ...data } : c));
  },

  delete: (id) => {
    candidates = candidates.filter((c) => c.id != id);
  },
};