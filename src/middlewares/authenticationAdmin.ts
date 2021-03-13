import passport from 'passport';
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', {}, (error, user, info) => {
        if (error) {
            return next();
        }
        if (!user.isAdmin) {
            return next(new Error('Failed'));
        }

        if (user) {
            req.user = user.dataValues;
            res.locals = res.locals || {};
            res.locals.user = user;
            return next();
        }
        return next(new Error('Failed'));
    })(req, res, next);
};
