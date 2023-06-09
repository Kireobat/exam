//@ts-expect-error
import Database from 'better-sqlite3'
//@ts-expect-error
import bcrypt from 'bcrypt'

const db = new Database('src/lib/data/exam.db')
//@ts-expect-error
export async function POST( {request, cookies} ) {

    //get data
    const { username, firstname, lastname} = await request.json()

    const token: string | undefined = cookies.get("token")

    console.log("user to change name on: ", username, "requester token: ", token)

    // check if data is present

    if (!token) {
        return new Response(JSON.stringify({
            message: "Please log in"
    }), {
        status: 401
    })}

    if (!username || !firstname || !lastname) {
        return new Response(JSON.stringify({
            message: "Please fill in all fields"
    }), {
        status: 400
    })}

    const db = new Database('src/lib/data/exam.db', { verbose: console.log })

    // check if user has the correct role

    const userToChange = db.prepare('SELECT token, id FROM users WHERE username = ?').get(username)
    const user = db.prepare('SELECT role_id FROM users WHERE token = ?').get(token)


    if (user.role_id !== 1 && userToChange.token !== token) {
        return new Response(JSON.stringify({
            message: "You don't have the correct role to perform this action"
    }), {
        status: 401
    })}

    // change the requested user's name

    // check if username is already taken and if so, add a number to the end incrementally until it is not taken

    let newUsername = "e-"+firstname.slice(0,3) + lastname.slice(0,3);

    newUsername = newUsername.toLowerCase()

    let i = 1

    

    while (db.prepare('SELECT username FROM Users WHERE username = ?').get(newUsername)) {
        newUsername = newUsername + i
        i++
    }

    let newEmail = newUsername + "@example.com"

    db.prepare('UPDATE users SET firstname = ?, lastname = ?, username = ?, email = ? WHERE username = ?').run(firstname, lastname, newUsername, newEmail ,username)



    return new Response(JSON.stringify({
        message: "Password changed"
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}