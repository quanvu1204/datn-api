import { NextFunction, Request, Response } from 'express';
import { responseError } from './response';

class HttpError extends Error {
    messageKey: string;
    statusCode: number;

    constructor(message = 'Unknown HTTP Error') {
        super();

        Object.setPrototypeOf(this, HttpError.prototype);
        this.name = this.constructor.name;
        this.message = message;
    }
}

export default (error: HttpError, _req: Request, res: Response, next: NextFunction) => {
    if (error instanceof HttpError) {
        return responseError(res, null, error.statusCode);
    }

    return next(error);
};
