const express = require("express");
const router = express.Router();
const controller = require("../controllers/resumeController");

/**
 * @swagger
 * /api/resumes:
 *   post:
 *     summary: Create a new resume
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *           example:
 *             name: "Janith"
 *             skills: ["Node.js", "AI"]
 *     responses:
 *       200:
 *         description: Resume created successfully
 */
router.post("/", controller.createResume);

/**
 * @swagger
 * /api/resumes:
 *   get:
 *     summary: Get all resumes
 */
router.get("/", controller.getAllResumes);

/**
 * @swagger
 * /api/resumes/{id}:
 *   get:
 *     summary: Get a resume by ID
 */
router.get("/:id", controller.getResumeById);

/**
 * @swagger
 * /api/resumes/{id}:
 *   put:
 *     summary: Update a resume
 */
router.put("/:id", controller.updateResume);

/**
 * @swagger
 * /api/resumes/{id}:
 *   delete:
 *     summary: Delete a resume
 */
router.delete("/:id", controller.deleteResume);

module.exports = router;
