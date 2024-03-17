// mantener la configuracion de express
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.routes.js";
import petRouter from "./routes/pets.routes.js"
import userRouter from "./routes/user.routes.js"


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRouter);
app.use("/api", petRouter);
app.use("/api", userRouter);

export default app;