//@ts-expect-error
import Database from 'better-sqlite3'

const db = new Database('src/lib/data/exam.db')
//@ts-expect-error
export async function POST( {request, cookies} ) {

    //get data
    const { username, phone} = await request.json()

    const token: string | undefined = cookies.get("token")

    console.log("user to change phone on: ", username, "requester token: ", token)

    // check if data is present

    if (!token) {
        return new Response(JSON.stringify({
            message: "Please log in"
    }), {
        status: 401
    })}

    if (!username || !phone) {
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

    // change the requested user's adress

    db.prepare('UPDATE users SET phone = ? WHERE username = ?').run(phone ,username)



    return new Response(JSON.stringify({
        message: "Phone number changed"
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}