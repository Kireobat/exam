//@ts-expect-error
import Database from 'better-sqlite3'

const db = new Database('src/lib/data/exam.db')

export async function POST( {cookies} ) {
    const token = cookies.get("token")

    if (!token) {
        return new Response(JSON.stringify({
            message: "You cant log out if you are not logged in"
    }), {
        status: 400
    })}

    const user = db.prepare('SELECT * FROM Users WHERE token = ?').get(token)

    if (!user) {
        return new Response(JSON.stringify({
            message: "Invalid login credentials"
    }), {
        status: 401
    })}

    db.prepare('UPDATE Users SET token = ? WHERE id = ?').run(undefined, user.id)

    cookies.delete("token"); // remove the token cookie

    // return a response indicating successful logout
    return new Response(JSON.stringify({
        message: "Logout successful"
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}