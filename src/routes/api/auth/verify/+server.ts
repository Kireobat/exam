import Database from 'better-sqlite3';

export async function GET( {cookies} ) {
    const token = cookies.get("token")

    console.log(token)

    const db = new Database('src/lib/data/exam.db', { verbose: console.log })

    const user = db.prepare("SELECT * FROM users WHERE token = ?").get(token)
   
    if (!user) {
        return new Response(JSON.stringify({
            message: "Invalid login credentials"
    }), {
        status: 401
    })}

    return new Response(JSON.stringify({
        message: "Login successful"
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })


    
}
