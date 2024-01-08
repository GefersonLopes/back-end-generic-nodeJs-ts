import express from "express";
import { error } from "./middlewares/Error";
import router from "./config/index.routes";

const app = express();

app.use(express.json());
app.use(require('cors')());

app.use("", router);
app.use('', (req, res) => res.send('Hello World'));



app.use(error);

export default app;
