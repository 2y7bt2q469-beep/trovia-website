import { NextRequest, NextResponse } from 'next/server'
import { BetaSignupData } from '@/lib/types'
import { createClient } from '@supabase/supabase-js'

// Debug logging
console.log('Environment check:')
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? 'Present' : 'Missing')
console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Present' : 'Missing')

// Fallback in-memory storage
const betaSignups: (BetaSignupData & { id: string; created_at: string })[] = []

// Supabase client - create with fallback values for build time
const supabase = createClient(
  process.env.SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key'
)

// Check if we have real environment variables
const hasSupabaseConfig = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 POST request received')
    const body: BetaSignupData = await request.json()
    console.log('📦 Request body:', body)

    const { name, email, interest } = body

    if (!name || !email || !interest) {
      console.log('❌ Validation failed: missing fields')
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      console.log('❌ Validation failed: invalid email')
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    console.log('✅ Validation passed, attempting Supabase insert...')

    // Insert new signup using Supabase (if available)
    if (!hasSupabaseConfig) {
      console.log('❌ Supabase not configured, falling back to in-memory storage')

      // Check for duplicate email in memory
      const existingSignup = betaSignups.find(signup => signup.email === email.trim().toLowerCase())
      if (existingSignup) {
        console.log('❌ Duplicate email found in memory')
        return NextResponse.json(
          { error: 'This email is already registered for the beta' },
          { status: 409 }
        )
      }

      // Store in memory as fallback
      const memorySignup = {
        id: Math.random().toString(36).substring(2),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        interest: interest,
        created_at: new Date().toISOString()
      }
      betaSignups.push(memorySignup)

      console.log('✅ Stored in memory:', memorySignup)
      return NextResponse.json(
        { message: 'Successfully joined beta! (stored locally)', signup: memorySignup },
        { status: 201 }
      )
    }

    const { data, error } = await supabase
      .from('beta_signups')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          interest: interest
        }
      ])
      .select()

    console.log('📊 Supabase response:', { data, error })

    if (error) {
      console.log('❌ Supabase error, falling back to in-memory storage:', error)

      // Check for duplicate email in memory
      const existingSignup = betaSignups.find(signup => signup.email === email.trim().toLowerCase())
      if (existingSignup) {
        console.log('❌ Duplicate email found in memory')
        return NextResponse.json(
          { error: 'This email is already registered for the beta' },
          { status: 409 }
        )
      }

      // Store in memory as fallback
      const memorySignup = {
        id: Math.random().toString(36).substring(2),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        interest: interest,
        created_at: new Date().toISOString()
      }
      betaSignups.push(memorySignup)

      console.log('✅ Stored in memory:', memorySignup)
      return NextResponse.json(
        { message: 'Successfully joined beta! (stored locally)', signup: memorySignup },
        { status: 201 }
      )
    }

    const signup = data?.[0]
    console.log('✅ Successfully stored in Supabase:', signup)

    return NextResponse.json(
      { message: 'Successfully joined beta!', signup },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error processing beta signup:', error)

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    if (!hasSupabaseConfig) {
      return NextResponse.json({
        message: 'Beta signup endpoint is active (memory storage)',
        totalSignups: betaSignups.length,
      })
    }

    const { count, error } = await supabase
      .from('beta_signups')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Error fetching signup count:', error)
      return NextResponse.json({
        message: 'Beta signup endpoint is active',
        totalSignups: betaSignups.length,
      })
    }

    return NextResponse.json({
      message: 'Beta signup endpoint is active',
      totalSignups: count || 0,
    })
  } catch (error) {
    console.error('Error fetching signup count:', error)
    return NextResponse.json({
      message: 'Beta signup endpoint is active',
      totalSignups: betaSignups.length,
    })
  }
}