import { NextRequest, NextResponse } from 'next/server'
import { BetaSignupData } from '@/lib/types'
import { kv } from '@vercel/kv'

const SIGNUPS_KEY = 'beta-signups'

// Fallback in-memory storage for local development
let memorySignups: (BetaSignupData & { id: string; created_at: string })[] = []

// Check if KV is available (production) or use memory (local)
const isKVAvailable = () => {
  return process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
}

// Read signups from KV or memory
async function readSignups(): Promise<(BetaSignupData & { id: string; created_at: string })[]> {
  try {
    if (isKVAvailable()) {
      const signups = await kv.get<(BetaSignupData & { id: string; created_at: string })[]>(SIGNUPS_KEY)
      return signups || []
    } else {
      // Local development fallback
      return memorySignups
    }
  } catch (error) {
    console.error('Error reading signups:', error)
    return isKVAvailable() ? [] : memorySignups
  }
}

// Write signups to KV or memory
async function writeSignups(signups: (BetaSignupData & { id: string; created_at: string })[]) {
  try {
    if (isKVAvailable()) {
      await kv.set(SIGNUPS_KEY, signups)
    } else {
      // Local development fallback
      memorySignups = signups
    }
  } catch (error) {
    console.error('Error writing signups:', error)
    throw error
  }
}

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

    console.log('✅ Validation passed, attempting storage...')

    // Read existing signups
    const existingSignups = await readSignups()

    // Check for duplicate email
    const existingSignup = existingSignups.find(signup => signup.email === email.trim().toLowerCase())
    if (existingSignup) {
      console.log('❌ Duplicate email found')
      return NextResponse.json(
        { error: 'This email is already registered for the beta' },
        { status: 409 }
      )
    }

    // Create new signup
    const newSignup = {
      id: Math.random().toString(36).substring(2),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      interest: interest,
      created_at: new Date().toISOString()
    }

    // Add to existing signups and save
    const updatedSignups = [...existingSignups, newSignup]
    await writeSignups(updatedSignups)

    console.log('✅ Successfully stored:', newSignup)

    return NextResponse.json(
      { message: 'Successfully joined beta!', signup: newSignup },
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
    const signups = await readSignups()
    const storageType = isKVAvailable() ? 'KV storage' : 'memory storage'

    return NextResponse.json({
      message: `Beta signup endpoint is active (${storageType})`,
      totalSignups: signups.length,
      signups: signups,
      storage: storageType
    })
  } catch (error) {
    console.error('Error fetching signups:', error)
    return NextResponse.json({
      message: 'Beta signup endpoint is active',
      totalSignups: 0,
      error: 'Could not read signups',
      storage: isKVAvailable() ? 'KV storage (error)' : 'memory storage (error)'
    })
  }
}