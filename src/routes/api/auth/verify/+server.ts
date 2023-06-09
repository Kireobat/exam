//@ts-expect-error
import Database from 'better-sqlite3';

export async function GET( {cookies} ) {
    const token = cookies.get("token")

    console.log(token)

    const db = new Database('src/lib/data/exam.db', { verbose: console.log })

    const user = db.prepare("SELECT firstname, lastname, email, username, phone, adress, role_id FROM Users WHERE token = ?").get(token)

    console.log(user)
   
    if (!user) {
        return new Response(JSON.stringify({
            message: "Invalid login credentials"
    }), {
        status: 401
    })}

    return new Response(JSON.stringify({
        user: user
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })


    
}
