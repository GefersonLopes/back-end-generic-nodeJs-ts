import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/AppError";
import { findAllUsers_Service } from "../../services/user/findAllUsers.service";


export const findAllUser = async (req: Request, res: Response) => {
  try {
    const users = await findAllUsers_Service();

    return res.status(201).json(users);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
