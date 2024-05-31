"use strict";
/**
 * @file test.routes.ts
 * @description This file contains all routes for test module
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_controller_1 = require("../controllers/test.controller");
const testRouter = (0, express_1.Router)();
/**
 * @swagger
 * /test:
 *   get:
 *     summary: Example Summary
 *     tags: [Test]
 *     components:
 *       securitySchemes:
 *         bearerAuth:
 *           type: http
 *           scheme: bearer
 *           bearerFormat: JWT
 *     security:
 *        - bearerAuth: []
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: The ID of the resource
 *                 message:
 *                   type: string
 *                   description: The name of the resource
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       testTitle:
 *                         type: string
 *                         description: Test title
 *                         example: test title
 *                       testQualityIndex:
 *                         type: number
 *                         description: Quality Index value
 *                         example: 93.13
 *               required:
 *                 - statusCode
 *                 - message
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status Code of the error response
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Custom Error message
 *                   example: Database connection failed
 *                 error:
 *                   type: string
 *                   description: A error message
 *                   error: system generated error message
 */
testRouter.get("/test", test_controller_1.readTest);
/**
 * @swagger
 * /test:
 *   post:
 *     summary: Example Summary
 *     tags: [Test]
 *     components:
 *       securitySchemes:
 *         bearerAuth:
 *           type: http
 *           scheme: bearer
 *           bearerFormat: JWT
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               testTitle:
 *                 type: string
 *                 description: Test title value
 *                 example: Test title
 *               testQualityIndex:
 *                 type: number
 *                 description: Quality Index value
 *                 example: 99.34
 *             required:
 *               - testTitle
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                 statusCode:
 *                   type: integer
 *                   description: HTTP status code
 *                   example: 200
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: "Success true"
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       testTitle:
 *                         type: string
 *                         description: Test title
 *                         example: test title
 *                       testQualityIndex:
 *                         type: number
 *                         description: Quality Index value
 *                         example: 93.13
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status Code of the error response
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Custom Error message
 *                   example: Database connection failed
 *                 error:
 *                   type: string
 *                   description: A error message
 *                   error: system generated error message
 */
testRouter.post("/test", test_controller_1.addNewTest);
/**
 * @swagger
 * /test/:id:
 *   patch:
 *     summary: Example Summary
 *     tags: [Test]
 *     components:
 *       securitySchemes:
 *         bearerAuth:
 *           type: http
 *           scheme: bearer
 *           bearerFormat: JWT
 *     security:
 *        - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               testTitle:
 *                 type: string
 *                 description: Test title value
 *                 example: Test title
 *               testQualityIndex:
 *                 type: number
 *                 description: Quality Index value
 *                 example: 99.34
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Some ID
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status code of the success response
 *                 message:
 *                   type: string
 *                   description: Custom success message
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       testTitle:
 *                         type: string
 *                         description: Test title
 *                         example: test title
 *                       testQualityIndex:
 *                         type: number
 *                         description: Quality Index value
 *                         example: 93.13
 *               required:
 *                 - statusCode
 *                 - message
 *       500:
 *         description: Some server erro
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status Code of the error response
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Custom Error message
 *                   example: Database connection failed
 *                 error:
 *                   type: string
 *                   description: A error message
 *                   error: system generated error message
 */
testRouter.patch("/test/:id", test_controller_1.modifyTest);
/**
 * @swagger
 * /test/:id:
 *   delete:
 *     summary: Example Summary
 *     tags: [Test]
 *     components:
 *       securitySchemes:
 *         bearerAuth:
 *           type: http
 *           scheme: bearer
 *           bearerFormat: JWT
 *     security:
 *        - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Some ID
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status code for the success response
 *                 message:
 *                   type: string
 *                   description: Custom message for the success response
 *                 data:
 *                   type: array
 *                   description: Array of data
 *                   items:
 *                     type: object
 *                     properties:
 *                       testTitle:
 *                         type: string
 *                         description: Test title
 *                         example: test title
 *                       testQualityIndex:
 *                         type: number
 *                         description: Quality Index value
 *                         example: 93.13
 *               required:
 *                 - statusCode
 *                 - message
 *       500:
 *         description: Some server error
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   description: Status Code of the error response
 *                   example: 500
 *                 message:
 *                   type: string
 *                   description: Custom Error message
 *                   example: Database connection failed
 *                 error:
 *                   type: string
 *                   description: A error message
 *                   error: system generated error message
 *
 */
testRouter.delete("/test/:id", test_controller_1.removeTest);
exports.default = testRouter;
