import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/AppError";
import { createUser_Service } from "../../services/user/createUser.service";

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const result = await createUser_Service({ name, email, password });

        return res.status(201).json(result);
    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res);
        }
    }
};
