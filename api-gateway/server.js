const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

/* ================= SERVICES ================= */

// Resume Service
app.use(
  "/api/resumes",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
  }),
);

// Analysis Service
app.use(
  "/api/analyze",
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true,
  }),
);

// Matching Service
app.use(
  "/api/match",
  createProxyMiddleware({
    target: "http://localhost:3003",
    changeOrigin: true,
  }),
);

// HR Service
app.use(
  "/api/hr",
  createProxyMiddleware({
    target: "http://localhost:3004",
    changeOrigin: true,
  }),
);

/* ================= SWAGGER ROUTES ================= */

// Resume Swagger
app.use(
  "/resume/api-docs",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
    pathRewrite: { "^/resume": "" },
  }),
);

// Analysis Swagger
app.use(
  "/analysis/api-docs",
  createProxyMiddleware({
    target: "http://localhost:3002",
    changeOrigin: true,
    pathRewrite: { "^/analysis": "" },
  }),
);

// Matching Swagger
app.use(
  "/matching/api-docs",
  createProxyMiddleware({
    target: "http://localhost:3003",
    changeOrigin: true,
    pathRewrite: { "^/matching": "" },
  }),
);

// HR Swagger
app.use(
  "/hr/api-docs",
  createProxyMiddleware({
    target: "http://localhost:3004",
    changeOrigin: true,
    pathRewrite: { "^/hr": "" },
  }),
);

// Root
app.get("/", (req, res) => {
  res.send("API Gateway running 🚀");
});

// Start Gateway
app.listen(3000, () => {
  console.log("API Gateway running on port 3000...");
});
