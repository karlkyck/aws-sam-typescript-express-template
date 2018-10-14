import * as awsServerlessExpress from 'aws-serverless-express';
import {HandlerModule} from "./HandlerModule";
import {Context} from 'aws-lambda';

let handlerModule: HandlerModule;

try {
    handlerModule = new HandlerModule();
} catch (error) {
    console.error(error);
}

const server = awsServerlessExpress.createServer(handlerModule.getExpressApp());

export const handler = (event: any, context: Context) => awsServerlessExpress.proxy(server, event, context);