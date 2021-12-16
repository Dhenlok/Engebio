import { BaseDatabase } from "../data/BaseDatabase";
import { User } from "../entities/User";

export class InsertUser extends BaseDatabase{
    async insertUser(user: User){
        try {
            await BaseDatabase.connection('usuario_engebio')
            .insert({
                id: user.getId(),
                nome: user.getNome(),
                sobrenome: user.getSobrenome(),
                email: user.getEmail(),
                senha: user.getSenha()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}