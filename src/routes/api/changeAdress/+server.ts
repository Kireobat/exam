//@ts-expect-error
import Database from 'better-sqlite3'

const db = new Database('src/lib/data/exam.db')
//@ts-expect-error
export async function POST( {request, cookies} ) {

    //get data
    const { username, adress} = await request.json()

    const token: string | undefined = cookies.get("token")

    console.log("user to change adress on: ", username, "requester token: ", token)

    // check if data is present

    if (!token) {
        return new Response(JSON.stringify({
            message: "Please log in"
    }), {
        status: 401
    })}

    if (!username || !adress) {
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

    db.prepare('UPDATE users SET adress = ? WHERE username = ?').run(adress ,username)



    return new Response(JSON.stringify({
        message: "Adress changed"
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}