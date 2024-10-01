import {NextResponse} from 'next/server'

export function middleware(request){
    console.log('middleware ran')
    return NextResponse.json({success: 'successfully ran'})
}

export const config = {
    matcher: ['/userlist/:path*'],
}