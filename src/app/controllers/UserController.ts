import { Request,Response } from 'express'
import Queue from '../lib/Queue';

export interface User {
    name: string;
    email: string;
    password: string;
}

export default {
    async store(req: Request, resp:Response) {
        const user: User = req.body;                 

        await Queue.add('RegistrationMail',user);    

        return resp.json(user);
    }
}