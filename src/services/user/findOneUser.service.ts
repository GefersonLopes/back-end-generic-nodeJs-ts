import { AppError } from "../../Errors/AppError";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/userEntity.entity";
import { IResponseCreateUser } from "../../interfaces/user";

export const findOneUser_Service = async (id: string): Promise<IResponseCreateUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if (!user) throw new AppError(404, "user not found");

  return user;
};
