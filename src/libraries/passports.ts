import passportJWT from 'passport-jwt';
import * as jwt from 'jsonwebtoken';
import { PassportStatic } from 'passport';
import env from '../../config/env';
import { CustomerAttributes } from '../interfaces/customer';
import customerModel from '../models/customer.model';

const { ExtractJwt } = passportJWT;
const JwtStrategy = passportJWT.Strategy;

export function passportConfiguration(passport: PassportStatic) {
    const opts: passportJWT.StrategyOptions = {
        secretOrKey: env.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    };

    passport.use(
        new JwtStrategy(opts, async (jwtPayload, cb) => {
            let user;
            if (jwtPayload.isAdmin) {
                // TO DO
                user.isAdmin = true;
            } else {
                user = await customerModel.findOne({
                    where: {
                        id: jwtPayload.id,
                        isActive: true,
                        deleted: false,
                    },
                });
            }

            if (user) {
                cb(null, user);
            } else {
                cb(new Error('Something wrong in token'), false);
            }
        })
    );
}

export function generateToken(
    customer: CustomerAttributes,
    isAdmin: boolean = false
) {
    return jwt.sign(
        { id: customer.id, email: customer.email, isAdmin },
        env.jwtSecret,
        {
            expiresIn: env.jwtExpiresIn,
        }
    );
}
