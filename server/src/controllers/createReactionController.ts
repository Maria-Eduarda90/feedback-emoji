import { Request, Response } from "express";
import { createReactionService } from "../services/createReactionService";

class createReactionController {
    async handle(req: Request, res: Response){
        const { reaction } = req.body;

        const service = new createReactionService();

        const result = await service.create(reaction);

        return res.status(201).json(result);
    }
}

export { createReactionController };