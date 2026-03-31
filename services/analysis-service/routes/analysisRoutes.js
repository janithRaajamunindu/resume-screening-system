const express = require("express");
const router = express.Router();
const controller = require("../controllers/analysisController");

/**
 * @swagger
 * /api/analyze:
 *   post:
 *     summary: Analyze a resume
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *             example:
 *               skills: ["Node.js", "AI"]
 *     responses:
 *       200:
 *         description: Analysis created successfully
 */
router.post("/", controller.createAnalysis);

/**
 * @swagger
 * /api/analyze:
 *   get:
 *     summary: Get all analyses
 *     responses:
 *       200:
 *         description: List of analyses
 */
router.get("/", controller.getAllAnalyses);

/**
 * @swagger
 * /api/analyze/{id}:
 *   get:
 *     summary: Get analysis by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Analysis found
 */
router.get("/:id", controller.getAnalysisById);

/**
 * @swagger
 * /api/analyze/{id}:
 *   put:
 *     summary: Update analysis
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             score: 95
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put("/:id", controller.updateAnalysis);

/**
 * @swagger
 * /api/analyze/{id}:
 *   delete:
 *     summary: Delete analysis
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
router.delete("/:id", controller.deleteAnalysis);

module.exports = router;