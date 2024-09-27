import { Request, Response } from "express";
import UserService from "../services/UserServices";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public createUser = (request: Request, response: Response): void => {
        const { name, email } = request.body;
        const newUser = this.userService.createUser(name, email);
        response.status(201).json(newUser);
    }

    public getAllUsers = (response: Response): void => {
        const users = this.userService.getAllUser();
        response.status(201).json(users);
    }
}