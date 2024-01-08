import { AppDataSource } from "../../data-source";
import { User } from "../../entities/userEntity.entity";
import { IResponseUser } from "../../interfaces/user";

export const findAllUsers_Service = async (): Promise<IResponseUser[]> => {
  const userRepository = AppDataSource.getRepository(User);
  return userRepository.find();
};
