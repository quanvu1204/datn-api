import passport from 'passport';

import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';
import { passportConfiguration } from './libraries/passports';
import httpErrorHandler from './helpers/httpErrorHandler';

class App {
    public app: Application;
    public port: number;

    constructor(appInit: { port: number; middleWares: any }) {
        this.app = express();
        this.port = appInit.port;
        this.assets();
        this.middlewares(appInit.middleWares);
        this.initPassport();
        this.initRoutes();
        this.handleError();
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
        middleWares.forEach((middleWare) => {
            this.app.use(middleWare);
        });
    }

    private initRoutes() {
        this.app.use(routes);
    }

    private assets() {
        this.app.use(cors());
    }

    private initPassport() {
        passportConfiguration(passport);
        this.app.use(passport.initialize());
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${this.port}`);
        });
    }

    private handleError() {
        this.app.use(httpErrorHandler);
    }
}

export default App;
