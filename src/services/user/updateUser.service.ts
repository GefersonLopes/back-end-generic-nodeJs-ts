import { AppError } from "../../Errors/AppError";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/userEntity.entity";
import { IRequestCreateUser, IResponseCreateUser } from "../../interfaces/user";

export const updateUser_Service = async (id: string, data: IRequestCreateUser): Promise<IResponseCreateUser | null> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if (!user) throw new AppError(404, "user not found");
  await userRepository.update(id, data)

  return userRepository.findOne({ where: { id } }) ;
};
