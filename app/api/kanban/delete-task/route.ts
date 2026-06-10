import { NextResponse } from 'next/server'
import { KanbanData } from '../kanban-data'

export async function DELETE(req: Request) {
  try {
    const { taskId } = (await req.json()) as { taskId: string | number }
    // Note: This logic seems to filter categories, not tasks, based on the import.
    // Assuming the intention is to remove a task, this implementation might need review,
    // but improving types as requested.
    const updatedTodoData = KanbanData.map((category) => {
      const newChild = category.child.filter((task) => task.id !== taskId)
      return { ...category, child: newChild }
    })

    return NextResponse.json({
      status: 200,
      msg: 'success',
      data: updatedTodoData,
    })
  } catch (error: unknown) {
    return NextResponse.json({ status: 400, msg: 'failed', error })
  }
}
