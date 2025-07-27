import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function GET(request: Request) {
  try {
    const authToken = request.headers.get('cookie')?.split('auth-token=')[1]?.split(';')[0]
    
    if (!authToken) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }

    try {
      const decoded = jwt.verify(authToken, process.env.JWT_SECRET || 'fallback-secret') as any
      
      return NextResponse.json({ 
        authenticated: true,
        user: { 
          email: decoded.email, 
          role: decoded.role || 'admin' 
        }
      })
    } catch (jwtError) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }
  } catch (error) {
    console.error('Auth verification error:', error)
    return NextResponse.json({ authenticated: false }, { status: 500 })
  }
} 