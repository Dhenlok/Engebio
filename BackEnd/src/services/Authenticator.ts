import * as jwt from "jsonwebtoken"

export class Authenticator {
    public generate(id: string): string {
        const token = jwt.sign(
            id,
            process.env.JWT_KEY as jwt.Secret
        )
        return token
    }

    getTokenData(token:string): string{
        const data = jwt.verify(token, process.env.JWT_KEY as jwt.Secret)
        return data as string
    }
}