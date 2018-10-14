import * as express from "express";
import * as awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import {HandlerApp} from "./HandlerApp";

export class HandlerModule {
    private expressApp: express.Express;

    public constructor() {
        this.initialise();
    }

    public getExpressApp(): express.Express {
        return this.expressApp;
    }

    private initialise(): void {
        const app = express();
        app.use(awsServerlessExpressMiddleware.eventContext());
        const handlerApp = new HandlerApp(express.Router());
        this.expressApp = app;
    }
}