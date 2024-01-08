import { Router } from "express";

import { createUser } from "../controllers/user/createUser";
import { loginUser } from "../controllers/user/loginUser";
import { findAllUser } from "../controllers/user/findAllUsers";
import { findOneUser } from "../controllers/user/findOneUser";
import { updateUser } from "../controllers/user/updateUser";
import { deleteUser } from "../controllers/user/deleteUser";

export const User_Router = Router();
export const Login_Router = Router();

User_Router.post("/", createUser);
User_Router.get("/", findAllUser);
User_Router.get("/:id", findOneUser);
User_Router.patch("/:id", updateUser);
User_Router.delete("/:id", deleteUser);

Login_Router.post("/", loginUser);