const express = require("express");
const app = express();

app.use(express.json());

// Routes
const routes = require("./routes/resumeRoutes");
app.use("/api/resumes", routes);

// Swagger setup
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Resume Service API",
      version: "1.0.0",
      description: "API for managing resumes",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },

  apis: [__dirname + "/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

// Better Swagger UI
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
  }),
);

// Root route
app.get("/", (req, res) => {
  res.send("Resume Service is running 🚀");
});

// Start server
app.listen(3001, () => {
  console.log("Resume Service running on port 3001...");
});
