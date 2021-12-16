import * as bcryptjs from "bcryptjs"

export class HashManager {
    public async hash(text: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcryptjs.genSalt(rounds)
        return bcryptjs.hash(text, salt)
    }
}