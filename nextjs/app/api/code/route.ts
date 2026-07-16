import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const file = searchParams.get('file')

  if (!file)
    return NextResponse.json({ error: 'file missing' }, { status: 400 })

  const filePath = path.join(process.cwd(), file)
  const code = fs.readFileSync(filePath, 'utf8')

  return new NextResponse(code, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
