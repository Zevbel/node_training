import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import { send } from 'process';

export function ValidationHandler(err: Error, req: Request, res: Response, next: NextFunction)
{
    try {
        // Add validations
        /*
        if (!Types.ObjectId.isValid(req.params.id)) {
            res.status(400).send("Invalid Id.");
        };
        */
        next();
    } catch (error) {
        next(error);
    }
}
    