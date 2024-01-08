import { AppDataSource } from "../../data-source";
import { User } from "../../entities/userEntity.entity";
import { AppError } from "../../Errors/AppError";

export const deleteUser_Service = async (id: string): Promise<void> => {
    
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if(!user) {
    throw new AppError(404, "user not found");
  };

  await userRepository.delete({ id });
};
