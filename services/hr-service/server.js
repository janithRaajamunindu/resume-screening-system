const express = require("express");
const app = express();

app.use(express.json());

// Routes
const routes = require("./routes/hrRoutes");
app.use("/api/hr", routes);

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HR Service API",
      version: "1.0.0",
      description: "API for managing candidates",
    },
    servers: [
      {
        url: "http://localhost:3004",
      },
    ],
  },

  // 🔥 IMPORTANT FIX (same as analysis service)
  apis: [__dirname + "/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

// 🔥 Better Swagger UI
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
  }),
);

// Root route
app.get("/", (req, res) => {
  res.send("HR Service is running 🚀");
});

// Start server
app.listen(3004, () => {
  console.log("HR Service running on port 3004...");
});