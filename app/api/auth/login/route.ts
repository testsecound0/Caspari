import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Static admin credentials
const ADMIN_CREDENTIALS = {
  email: 'admin@caspari-italian.net',
  password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewYqE4i.WlM5Uj6G' // This is the hash for 'admin123'
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Check if credentials match
    if (email !== ADMIN_CREDENTIALS.email) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
    }

    // Verify password (compare with hashed password)
    const isValidPassword = await bcrypt.compare(password, ADMIN_CREDENTIALS.password)
    
    if (!isValidPassword) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
    }

    // Create JWT token
    const token = jwt.sign(
      { email: ADMIN_CREDENTIALS.email, role: 'admin' },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '24h' }
    )

    // Create response with token in cookie
    const response = NextResponse.json({ 
      message: 'Login successful',
      user: { email: ADMIN_CREDENTIALS.email, role: 'admin' }
    })

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 86400, // 24 hours
      path: '/'
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
} 