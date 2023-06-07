import mediaJSON from '$lib/data/media.json'

export async function GET({ params }) {
    let classCode = params.classCode

    // get coin info from database

    const body = mediaJSON.media.filter((media: { classCode: string; }) => media.classCode === classCode)
    
    const init = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return new Response(JSON.stringify(body), init);
}