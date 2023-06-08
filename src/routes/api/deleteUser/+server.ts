//@ts-expect-error
import Database from 'better-sqlite3'

const db = new Database('src/lib/data/exam.db')

export async function POST( {request, cookies} ) {

    //get data
    const { username } = await request.json()

    const token: string | undefined = cookies.get("token")

    console.log("user to delete: ", username, "requester token: ", token)

    // check if data is present

    if (!token) {
        return new Response(JSON.stringify({
            message: "Please log in"
    }), {
        status: 401
    })}

    if (!username) {
        return new Response(JSON.stringify({
            message: "Please fill in all fields"
    }), {
        status: 400
    })}

    // check if user has the correct role

    const userToDelete = db.prepare('SELECT token, id FROM users WHERE username = ?').get(username)
    const user = db.prepare('SELECT role_id FROM users WHERE token = ?').get(token)


    if (user.role_id !== 1 && userToDelete.token !== token) {
        return new Response(JSON.stringify({
            message: "You don't have the correct role to perform this action"
    }), {
        status: 401
    })}

    // delete the requested user

    db.prepare('DELETE FROM users WHERE username = ?').run(username)

    // delete from Classes_Users

    db.prepare('DELETE FROM Classes_Users WHERE user_id = ?').run(userToDelete.id)


    return new Response(JSON.stringify({
        message: "User deleted"
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}