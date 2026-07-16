// Mock API endpoint to add a new category

import { NextResponse } from 'next/server'
import { KanbanData } from '../kanban-data'
import { uniqueId } from 'lodash'

export async function POST(req: Request) {
  try {
    const { categoryName } = (await req.json()) as { categoryName: string }
    const newCategory = {
      id: uniqueId(),
      name: categoryName,
      child: [],
    }
    KanbanData.push(newCategory)
    return NextResponse.json({ status: 200, msg: 'success', data: newCategory })
  } catch (error: unknown) {
    return NextResponse.json({ status: 400, msg: 'failed', error })
  }
}
