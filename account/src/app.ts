import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import { RequestContext } from "@mikro-orm/core";
import { DI } from "./ioc/di";

import router from "./routes";
import * as errors from "./middlewares/error";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));

app.use((req, res, next) => RequestContext.create(DI.em, next));
app.use("/api/account", router);

app.use(errors.catch404);
app.use(errors.catchError);

export default app;
