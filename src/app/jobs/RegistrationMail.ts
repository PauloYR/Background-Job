import Mail from "../lib/Mail";
import { User } from '../controllers/UserController';

export default {
    key: 'RegistrationMail',
    async handle({data}:any) {            
        const user: User = data;
        await Mail.sendMail({
            from: 'Queue teste <queue@queueteste.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: 'Sistema de filas'
        },
        );
    }
}