import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import * as errors from "./middlewares/error";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));

app.use("/api/auth", router);

app.use(errors.catch404);
app.use(errors.catchError);

export default app;
