import { cookies } from "next/headers";

export async function POST(request: Request) {
    const body = await request.json();
    if(!body.token) return new Response('No token provided', {status: 400});
    //console.log(body, body.token);

    const cookieStore = cookies()
    const hasCookie = cookieStore.has('mindprism-token')
    if(hasCookie) return new Response('Already authenticated', {status: 200}); 

    cookies().set({
        name: 'mindprism-token',
        value: body.token,
        httpOnly: true,
        path: '/',
        secure: true,
        maxAge: 60 * 60 * 24 * 1000,
      })
    //cookies().set('mindprism-token', body.token)
    return new Response('Authenticated' , {status: 200});
}