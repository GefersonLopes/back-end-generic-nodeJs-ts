import { AppDataSource } from "../../data-source";
import { User } from "../../entities/userEntity.entity";
import { AppError } from "../../Errors/AppError";
import { IRequestLogin, IToken } from "../../interfaces/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser_Service = async ({
    email,
    password,
}: IRequestLogin): Promise<IToken> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
        where: { email: email },
    });
    if (!user) {
        throw new AppError(400, "Email or password incorrect");
    }

    const verifyPassword = bcrypt.compareSync(password, user!.password);
    if (!verifyPassword) {
        throw new AppError(400, "Email or password incorrect");
    }

    const token = jwt.sign({ email: email }, process.env.SECRET_KEY!, {
        expiresIn: process.env.EXPIRES_IN,
    });

    return { token, id: user.id };
};
