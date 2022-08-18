import express from 'express';
import * as bodyParser from 'body-parser';
import { routes } from './routes/routes';
import mongoose, { Types } from 'mongoose';
//import { ValidationHandler } from './middlewares/validation-handler';
//import { logger } from 'morgan';
//const logger = require('morgan'); //??

const app: express.Express = express();

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/', routes);

// TODO: Add custom validations
//app.use(ValidationHandler);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).send(`Error custom handler: ${err}`);
})


const start = async () => {
    console.log('Trying to connect to mongodb with mongoose: mongodb://localhost:27017');
    await mongoose.connect('mongodb://localhost:27017');
    console.log('Mongoose connected.');

    app.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
}

start();