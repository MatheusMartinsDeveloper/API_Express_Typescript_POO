import express from "express";
import { UserRoutes } from "./routes/UserRoutes";

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    } 

    private middlewares(): void {
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.use('/api', UserRoutes);
    }
}

export default new App().app;