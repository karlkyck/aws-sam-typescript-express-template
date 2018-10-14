import {Request, Response, Router} from "express";

export class HandlerApp {
    public constructor(expressRouter: Router) {
        expressRouter.get('/test', (request: Request, response: Response) => {
            response.sendStatus(200);
        });
    }
}