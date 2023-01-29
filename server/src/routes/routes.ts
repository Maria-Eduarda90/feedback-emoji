import { Router } from "express";
import { createReactionController } from "../controllers/createReactionController";

const router = Router();

router.post("/reaction", new createReactionController().handle);

export { router }