import { Chance } from 'chance'
import { NextResponse } from 'next/server'
import { users } from '../userdata'

const chance = new Chance()

export async function GET() {
  try {
    return NextResponse.json({ status: 200, msg: 'Success', data: users })
  } catch (error: unknown) {
    return NextResponse.json({
      status: 200,
      msg: 'Internal server error',
      error,
    })
  }
}
