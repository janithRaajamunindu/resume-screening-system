const express = require("express");
const router = express.Router();
const controller = require("../controllers/hrController");

/**
 * @swagger
 * /api/hr:
 *   post:
 *     summary: Add a new candidate
 *     description: Create a candidate record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               position:
 *                 type: string
 *           example:
 *             name: "John Doe"
 *             position: "Software Engineer"
 *     responses:
 *       200:
 *         description: Candidate created successfully
 *         content:
 *           application/json:
 *             example:
 *               id: 123456
 *               name: "John Doe"
 *               position: "Software Engineer"
 */
router.post("/", controller.createCandidate);

/**
 * @swagger
 * /api/hr:
 *   get:
 *     summary: Get all candidates
 *     description: Retrieve all candidates
 *     responses:
 *       200:
 *         description: List of candidates
 *         content:
 *           application/json:
 *             example:
 *               - id: 123
 *                 name: "John Doe"
 *                 position: "Software Engineer"
 */
router.get("/", controller.getAllCandidates);

/**
 * @swagger
 * /api/hr/{id}:
 *   get:
 *     summary: Get candidate by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Candidate details
 *         content:
 *           application/json:
 *             example:
 *               id: 123
 *               name: "John Doe"
 *               position: "Software Engineer"
 */
router.get("/:id", controller.getCandidateById);

/**
 * @swagger
 * /api/hr/{id}:
 *   put:
 *     summary: Update candidate
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               position:
 *                 type: string
 *           example:
 *             name: "Updated Name"
 *             position: "Senior Developer"
 *     responses:
 *       200:
 *         description: Candidate updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Updated"
 */
router.put("/:id", controller.updateCandidate);

/**
 * @swagger
 * /api/hr/{id}:
 *   delete:
 *     summary: Delete candidate
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Candidate deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Deleted"
 */
router.delete("/:id", controller.deleteCandidate);

module.exports = router;