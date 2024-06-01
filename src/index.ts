/**
 * @file index.ts
 * @description This file contains main server code
 * @author Manisha Jadhav
 * @created May 30, 2024
 * @license ISC License

 * @version 1.0.0
 * @requires express
 * @requires dotenv
 * @requires swagger-js
 * @requires swagger-ui-express
 */

import express from "express";
import dotenv from "dotenv";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import testRouter from "./template/routes/template.routes";
import userRouter from "./user/routes/user.routes";
import { DBConnectivity } from "../src/common/utils/mongo-db";
import { CustomConstant } from "./common/config/constants";
import cors from "cors";

dotenv.config();

export const bootstrapServer = () => {
  const specs = swaggerJsdoc(CustomConstant.SWAGGER_CONFIG);
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use("/", testRouter);
  app.use("/", userRouter);
  app.use(
    `${CustomConstant.SWAGGER_BASE_URI}`,
    swaggerUi.serve,
    swaggerUi.setup(specs, CustomConstant.SWAGGER_UI_OPTIONS)
  );

  app.listen(process.env.PORT, async () => {
    console.log(`[Node.js] Server started at PORT ${process.env.PORT} `);
    await DBConnectivity.connectToMongo();
  });
};

process.on("SIGINT" || "SIGTERM", () => {
  process.exit(0);
});

bootstrapServer();
