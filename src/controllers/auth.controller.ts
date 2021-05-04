import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import otp from '../libraries/otp';
import { generateToken } from '../libraries/passports';
import AuthRepository from '../repositories/auth.repository';
import bcrypt from '../libraries/bcrypt';
import { responseSuccess, responseError } from '../helpers/response';

class AuthController extends AuthRepository {
    public customerLogin = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const customerData = await this.checkAuthenticationData(email, password);
        if (customerData && customerData.isActive) {
            const token = generateToken(customerData);
            return responseSuccess(res, { token });
        } else if (customerData && !customerData.isActive) {
            return responseSuccess(res, null, 200, 'NOT_ACTIVATED');
        }
        return responseError(res);
    };

    public customerSignUp = async (req: Request, res: Response) => {
        const customer = await this.createNewCustomer(req.body);

        if (customer) {
            this.sendEmailVerificationCode(req.body.email, customer.otpSecret);
            return responseSuccess(res, { customer });
        }
        return responseError(res);
    };

    public sendVerificationCode = async (req: Request, res: Response) => {
        const { email } = req.body;
        const customerData = await this.findCustomerByEmail(email);
        if (customerData) {
            const newSecretOtp = nanoid();
            await this.updateCustomerByEmail(email, {
                otpSecret: newSecretOtp,
            });
            this.sendEmailVerificationCode(email, newSecretOtp);
            return responseSuccess(res);
        }
        return responseError(res);
    };

    public verifyCodeToActiveAccount = async (req: Request, res: Response) => {
        const { email, code } = req.body;
        const customerData = await this.findCustomerByEmail(email);
        if (customerData) {
            if (otp.verify(code, customerData.otpSecret)) {
                await this.updateCustomerByEmail(email, { isActive: true });
                const token = generateToken(customerData);
                return responseSuccess(res, { token });
            }
        }
        return responseError(res);
    };

    public verifyCodeToResetPassword = async (req: Request, res: Response) => {
        const { email, code } = req.body;
        const customerData = await this.findCustomerByEmail(email);
        if (customerData) {
            if (otp.verify(code, customerData.otpSecret)) {
                return responseSuccess(res, {
                    code: otp.generate(customerData.otpSecret),
                });
            }
        }
        return responseError(res);
    };

    public customerResetPassword = async (req: Request, res: Response) => {
        const { email, code, newPassword } = req.body;
        const customerData = await this.findCustomerByEmail(email);
        if (customerData) {
            if (otp.verify(code, customerData.otpSecret)) {
                await this.updateCustomerByEmail(email, {
                    password: bcrypt.generateHashPassword(newPassword),
                    isActive: true,
                });
                return responseSuccess(res);
            }
        }
        return responseError(res);
    };

    public adminLogin = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const adminData = await this.checkAdminAuthenticationData(email, password);
        if (adminData) {
            const token = generateToken(adminData, true);
            return responseSuccess(res, { token });
        } else {
            return responseError(res);
        }
    };
}

export default AuthController;
