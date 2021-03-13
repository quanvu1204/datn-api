import { Response } from 'express';
import httpStatus from 'http-status';

export const responseSuccess = (res: Response, data = null, code = httpStatus.OK, message = 'SUCCESS') => {
    return res.json({ code, message, data });
};

export const responseError = (res: Response, data = null, code = httpStatus.INTERNAL_SERVER_ERROR, message = 'FAILED') => {
    return res.json({ code, message, data });
};
