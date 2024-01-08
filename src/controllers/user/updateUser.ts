import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/AppError";
import { updateUser_Service } from "../../services/user/updateUser.service";


export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await updateUser_Service(req.params.id, req.body);

    return res.status(201).json(user);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
