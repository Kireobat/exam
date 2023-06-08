//@ts-expect-error
import Database from 'better-sqlite3'
//@ts-expect-error
import bcrypt from 'bcrypt'

const db = new Database('src/lib/data/exam.db')
//@ts-expect-error
export async function POST( {request, cookies} ) {

    //get data
    const { username, password, confirmPassword} = await request.json()

    const token: string | undefined = cookies.get("token")

    console.log("user to change password on: ", username, "requested password: ", password , "requester token: ", token)

    // check if data is present

    if (!token) {
        return new Response(JSON.stringify({
            message: "Please log in"
    }), {
        status: 401
    })}

    if (!username || !password || !confirmPassword) {
        return new Response(JSON.stringify({
            message: "Please fill in all fields"
    }), {
        status: 400
    })}

    if (password !== confirmPassword) {
        return new Response(JSON.stringify({
            message: "Passwords don't match"
    }), {
        status: 400
    })}


    // check if user has the correct role

    const userToChange = db.prepare('SELECT token, id FROM users WHERE username = ?').get(username)
    const user = db.prepare('SELECT role_id FROM users WHERE token = ?').get(token)


    if (user.role_id !== 1 && userToChange.token !== token) {
        return new Response(JSON.stringify({
            message: "You don't have the correct role to perform this action"
    }), {
        status: 401
    })}

    // change the requested user's password

    const hashedPassword = await bcrypt.hash(password, 10)

    db.prepare('UPDATE users SET password = ? WHERE username = ?').run(hashedPassword, username)


    return new Response(JSON.stringify({
        message: "Password changed"
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}