import { NextResponse } from 'next/server'
import { gallery } from '../userdata'

export async function GET() {
  try {
    return NextResponse.json({ status: 200, msg: 'Success', data: gallery })
  } catch (error: unknown) {
    return NextResponse.json({
      status: 200,
      msg: 'Internal server error',
      error,
    })
  }
}
