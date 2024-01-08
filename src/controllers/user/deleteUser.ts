import { Request, Response } from "express";
import { AppError, handleError } from "../../Errors/AppError";
import { deleteUser_Service } from "../../services/user/deleteUser.service";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await deleteUser_Service(req.params.id);

    return res.status(201).json();
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
