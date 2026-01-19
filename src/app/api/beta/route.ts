import { NextRequest, NextResponse } from 'next/server'
import { BetaSignupData } from '@/lib/types'
import { promises as fs } from 'fs'
import { join } from 'path'

// File path for storing beta signups
const DATA_FILE = join(process.cwd(), 'data', 'beta-signups.json')

// Ensure data directory exists
async function ensureDataDirectory() {
  try {
    await fs.mkdir(join(process.cwd(), 'data'), { recursive: true })
  } catch (error) {
    // Directory already exists or other error
  }
}

// Read signups from file
async function readSignups(): Promise<(BetaSignupData & { id: string; created_at: string })[]> {
  try {
    await ensureDataDirectory()
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    // File doesn't exist or other error, return empty array
    return []
  }
}

// Write signups to file
async function writeSignups(signups: (BetaSignupData & { id: string; created_at: string })[]) {
  try {
    await ensureDataDirectory()
    await fs.writeFile(DATA_FILE, JSON.stringify(signups, null, 2), 'utf-8')
  } catch (error) {
    console.error('Error writing to file:', error)
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

    console.log('✅ Validation passed, attempting file storage...')

    // Read existing signups
    const existingSignups = await readSignups()

    // Check for duplicate email
    const existingSignup = existingSignups.find(signup => signup.email === email.trim().toLowerCase())
    if (existingSignup) {
      console.log('❌ Duplicate email found in file')
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

    console.log('✅ Successfully stored in file:', newSignup)

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

    return NextResponse.json({
      message: 'Beta signup endpoint is active (file storage)',
      totalSignups: signups.length,
      signups: signups
    })
  } catch (error) {
    console.error('Error fetching signups:', error)
    return NextResponse.json({
      message: 'Beta signup endpoint is active',
      totalSignups: 0,
      error: 'Could not read signups file'
    })
  }
}