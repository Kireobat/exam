//@ts-expect-error
import Database from 'better-sqlite3'
//@ts-expect-error
import bcrypt from 'bcrypt'
//@ts-expect-error
import { v4 as uuidv4 } from 'uuid'

export async function POST( {request} ) {
    const { firstname, lastname, password, confirmPassword } = await request.json()

    console.log("firstname: ", firstname, "lastname: ", lastname, "password: ", password)

    if (!firstname || !lastname || !password || !confirmPassword) {
        return new Response(JSON.stringify({
            message: "Please fill in all fields"
    }), {
        status: 400
    })
    }
    
    if (password !== confirmPassword) {
        return new Response(JSON.stringify({
            message: "Passwords do not match"
    }), {
        status: 400
    })
    }

    // generate other values
    const token = uuidv4()

    console.log(token)

    let username = "e-"+firstname.slice(0,3) + lastname.slice(0,3);

    username = username.toLowerCase()

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