import { Request, Response } from "express";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { InsertUser } from "../services/InsertUser";

export async function createUser(req: Request, res: Response){
    try {
        const {nome, sobrenome, email, senha} = req.body

        if(!nome || !sobrenome || !email || !senha){
            throw new Error("Os campos devem ser preenchidos.")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(senha)

        const newUser = new User(id, nome, sobrenome, email, hashPassword)
        const userDatabase = new InsertUser()
        await userDatabase.insertUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate(id)

        res.status(200).send({message: "Usuário criado com sucesso.", token})
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}