import { Router } from "express";
import { Login_Router, User_Router } from "../routes/user.routes";

const router = Router();

router.use("/user", User_Router);
router.use("/login", Login_Router)

export default router;