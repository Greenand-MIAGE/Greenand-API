import express, { Express } from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "../config.json";
import { getFilesWithKeyword } from "./utils/getFilesWithKeyword";
import log from "../src/logger";
import { deserializeClient } from "./middleware";

require("dotenv").config();

const app: Express = express();
app.use(cookieParser());
app.use(deserializeClient);

/************************************************************************************
 *                              Basic Express Middlewares
 ***********************************************************************************/

app.set(`json spaces`, 4);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle logs in console during development
if (
  process.env.NODE_ENV === `development` ||
  config.NODE_ENV === `development`
) {
  app.use(morgan("dev"));
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );
}

// Handle security and origin in production
if (process.env.NODE_ENV === `production` || config.NODE_ENV === `production`) {
  app.use(helmet());
}

/************************************************************************************
 *                               MongoDB connection
 ***********************************************************************************/
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    log.info(`Database connected.`);
  })
  .catch((err) => {
    log.error(err);
  });

/************************************************************************************
 *                               Register all routes
 ***********************************************************************************/
getFilesWithKeyword(`router`, __dirname + `/app`).forEach((file: string) => {
  const { router } = require(file);
  app.use(`/`, router);
});
/************************************************************************************
 *                               Express Error Handling
 ***********************************************************************************/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    return res.status(500).json({
      errorName: err.name,
      message: err.message,
      stack: err.stack || `no stack defined`,
    });
  }
);

export default app;
