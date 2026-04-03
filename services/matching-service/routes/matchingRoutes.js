const express = require("express");
const router = express.Router();
const controller = require("../controllers/matchingController");

/**
 * @swagger
 * /api/match:
 *   post:
 *     summary: Create job match
 *     description: Match jobs based on resume data
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
 *           example:
 *             skills: ["Node.js", "AI"]
 *     responses:
 *       200:
 *         description: Match created successfully
 *         content:
 *           application/json:
 *             example:
 *               id: 123456
 *               jobs: ["Software Engineer", "AI Engineer"]
 */
router.post("/", controller.createMatch);

/**
 * @swagger
 * /api/match:
 *   get:
 *     summary: Get all matches
 *     description: Retrieve all job matches
 *     responses:
 *       200:
 *         description: List of matches
 *         content:
 *           application/json:
 *             example:
 *               - id: 123
 *                 jobs: ["Software Engineer", "AI Engineer"]
 */
router.get("/", controller.getAllMatches);

/**
 * @swagger
 * /api/match/{id}:
 *   get:
 *     summary: Get match by ID
 *     description: Retrieve a single match using ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Match found
 *         content:
 *           application/json:
 *             example:
 *               id: 123
 *               jobs: ["Software Engineer", "AI Engineer"]
 */
router.get("/:id", controller.getMatchById);

/**
 * @swagger
 * /api/match/{id}:
 *   put:
 *     summary: Update match
 *     description: Update job match details
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jobs:
 *                 type: array
 *                 items:
 *                   type: string
 *           example:
 *             jobs: ["Updated Job"]
 *     responses:
 *       200:
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Updated"
 */
router.put("/:id", controller.updateMatch);

/**
 * @swagger
 * /api/match/{id}:
 *   delete:
 *     summary: Delete match
 *     description: Remove a match by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Deleted"
 */
router.delete("/:id", controller.deleteMatch);

module.exports = router;