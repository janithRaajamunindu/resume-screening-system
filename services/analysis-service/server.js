const express = require("express");
const app = express();

app.use(express.json());

// Routes
const routes = require("./routes/analysisRoutes");
app.use("/api/analyze", routes);

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Analysis Service API",
      version: "1.0.0",
      description: "API for resume analysis",
    },
    servers: [
      {
        url: "http://localhost:3002",
      },
    ],
  },

  //
  apis: [__dirname + "/routes/*.js"], // ensures correct path
};

const swaggerSpec = swaggerJsdoc(options);

// for better UI
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
  }),
);

// Root route (for demo)
app.get("/", (req, res) => {
  res.send("Analysis Service is running 🚀");
});

// Start server
app.listen(3002, () => {
  console.log("Analysis Service running on port 3002...");
});