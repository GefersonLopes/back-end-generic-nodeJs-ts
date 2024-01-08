import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/AppError";
import { findOneUser_Service } from "../../services/user/findOneUser.service";



export const findOneUser = async (req: Request, res: Response) => {
  try {
    const user = await findOneUser_Service(req.params.id);    

    return res.status(201).json(user);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
