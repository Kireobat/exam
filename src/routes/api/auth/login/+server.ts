//@ts-expect-error
import Database from 'better-sqlite3'
//@ts-expect-error
import bcrypt from 'bcrypt'
//@ts-expect-error
import { v4 as uuidv4 } from 'uuid'

const db = new Database('src/lib/data/exam.db')

export async function POST( {request} ) {
    const { username, password } = await request.json()

    console.log("username: ", username, "password: ", password)

    if (!username || !password) {
        return new Response(JSON.stringify({
            message: "Please fill in all fields"
    }), {
        status: 400
    })}

    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username)

    if (!user) {
        return new Response(JSON.stringify({
            message: "Invalid login credentials"
    }), {
        status: 401
    })}

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        return new Response(JSON.stringify({
            message: "Passwords don't match"
    }), {
        status: 401
    })}

    // Password is correct, proceed with login
    const token = uuidv4()

    db.prepare('UPDATE users SET token = ? WHERE id = ?').run(token, user.id)

    return new Response(JSON.stringify({
        message: "Login successful"
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict`
        }
    })
}