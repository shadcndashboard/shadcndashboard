import { NextResponse } from 'next/server'
import { KanbanData } from '../kanban-data'

// Mock API endpoint to delete a category
export async function DELETE(req: Request) {
  try {
    const { id } = (await req.json()) as { id: string | number }
    const updatedTodoData = KanbanData.filter((category) => category.id !== id)
    return NextResponse.json({
      status: 200,
      msg: 'success',
      data: updatedTodoData,
    })
  } catch (error: unknown) {
    return NextResponse.json({
      status: 400,
      msg: 'Internal server error',
      error,
    })
  }
}
