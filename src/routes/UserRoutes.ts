import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.post('/createUser', userController.createUser);
router.get('/getAllUsers', userController.getAllUsers);

export { router as UserRoutes };