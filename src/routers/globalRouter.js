import express from "express";
import { home, addDo, remove } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.post("/", addDo);
globalRouter.post("/removeDo", remove);

export default globalRouter;
