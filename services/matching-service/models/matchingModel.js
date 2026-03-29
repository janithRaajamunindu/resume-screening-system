let matches = [];
 
module.exports = {
  getAll: () => matches,
 
  getById: (id) => matches.find((m) => m.id == id),
 
  create: (data) => {
    const match = {
      id: Date.now(),
      jobs: ["Software Engineer", "AI Engineer"], // can be dynamic later
    };
    matches.push(match);
    return match;
  },
 
  update: (id, data) => {
    matches = matches.map((m) => (m.id == id ? { ...m, ...data } : m));
  },
 
  delete: (id) => {
    matches = matches.filter((m) => m.id != id);
  },
};
 
 