export class User {
    constructor(
        private id: string,
        private nome: string,
        private sobrenome: string,
        private email: string,
        private senha: string
    ) {}

    getId(){
        return this.id
    }
    getNome(){
        return this.nome
    }
    getSobrenome(){
        return this.sobrenome
    }
    getEmail(){
        return this.email
    }
    getSenha(){
        return this.senha
    }

}