import { User } from "../models/UserModel";

export default class UserService {
    private users: User[] = [];

    public createUser(name: string, email: string): User {
        const id = this.users.length + 1;
        const newUser = new User(id, name, email);
        this.users.push(newUser);
        return  newUser;
    }

    public getAllUser(): User[] {
        return this.users;
    }
}