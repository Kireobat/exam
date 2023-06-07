import Database from 'better-sqlite3'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

export async function POST( {request} ) {
    const { firstname, lastname, password, confirmPassword } = await request.json()

    console.log("firstname: ", firstname, "lastname: ", lastname, "password: ", password)

    if (!firstname || !lastname || !password || !confirmPassword) {
        return {
            status: 400,
            body: {
                error: "Please fill in all fields"
            }
        }
    }
    
    if (password !== confirmPassword) {
        return {
            status: 400,
            body: {
                error: "Passwords do not match"
            }
        }
    }

    // generate other values
    const token = uuidv4()

    console.log(token)

    const username = "e-"+firstname.slice(0,2) + lastname.slice(0,2)

    console.log(username)

    const email = username + "@example.com"

    console.log(email)

    // hash the password 

    const hashedPassword = await bcrypt.hash(password, 10)

    // open db connection

    const db = new Database('src/lib/data/exam.db', { verbose: console.log })

    const stmt = db.prepare('INSERT INTO Users (firstname, lastname, password, email, username, token) VALUES (?, ?, ?, ?, ?, ?)')

    stmt.run(firstname, lastname, hashedPassword, email, username, token)

    db.close()

    const init = {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict`
        }
    }

    const body = {
        message: "User created successfully"
    }

    return new Response(JSON.stringify(body), init)
}