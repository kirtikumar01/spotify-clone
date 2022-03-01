import { request } from "http";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
    // token will exist if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET })

    const { pathname } = req.nextUrl;
  

    //allow te requests if the following is true
    // 1) if the token exists
    if(pathname.includes('/api/auth') || token){
        return NextResponse.next();
    }

    //redirect them to login if they dont have token 
    // if(!token && pathname !== "/login"){
    //     return NextResponse.redirect("/login");
    // }
}