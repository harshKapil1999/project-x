import { NextResponse } from 'next/server';
import React from 'react'

type Params = {
    name: string,
    id: number
  }
export async function GET(req: Request) {

    try {
        const jobData = await req.body;
        console.log(jobData);
        
        return NextResponse.json({ message: 'Data is here', status: 200, data: jobData })
    } catch (error) {
        return Response.json({ message: 'Something went wrong', status: 500 })
    }
    
}

export async function POST(req: Request) {
    try {
        const jobData = { name: "harsh", id: 1 }
        console.log(jobData);
        
        return NextResponse.json({ data: jobData })
    } catch (error) {
        return Response.json({ message: 'Something went wrong', status: 500 })
    }
    
}