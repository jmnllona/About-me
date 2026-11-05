import type { Request, Response } from "express";
export declare function generateOTP(): {
    otp: string;
    tokenHash: string;
};
export declare function register(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
export declare function login(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
export declare function currentUser(request: Request, response: Response): Response<any, Record<string, any>>;
export declare function logout(request: Request, response: Response): void;
export declare function verifyEmail(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=authController.d.ts.map