const express = require("express");
const app = express();

app.use(express.json());

// Routes
const routes = require("./routes/matchingRoutes");
app.use("/api/match", routes);

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Matching Service API",
      version: "1.0.0",
      description: "API for job matching",
    },
    servers: [
      {
        url: "http://localhost:3003",
      },
    ],
  },

  // 🔥 IMPORTANT FIX (same as other services)
  apis: [__dirname + "/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

// 🔥 Better Swagger UI (consistent)
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
  }),
);

// Root route
app.get("/", (req, res) => {
  res.send("Matching Service is running 🚀");
});

// Start server
app.listen(3003, () => {
  console.log("Matching Service running on port 3003..");
});