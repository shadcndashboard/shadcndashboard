import { NextResponse } from 'next/server'
import { KanbanData } from './kanban-data'
import { Task } from '@/app/(dashboard-layout)/types/apps/kanban'


// Extracting unique task properties from TodoData
const taskPropertiesSet = new Set<string>()

// Using forEach loops instead of flatMap
KanbanData.forEach((category) => {
  category.child.forEach((task) => {
    taskPropertiesSet.add(task.priority)
  })
})

// Mock API endpoint to fetch TodoData
export async function GET() {
  try {
    return NextResponse.json({ status: 200, msg: 'success', data: KanbanData })
  } catch (error: unknown) {
    return NextResponse.json({
      status: 400,
      msg: 'Internal server error',
      error,
    })
  }
}

// Mock API endpoint to clear all tasks from a category
export async function DELETE(req: Request) {
  try {
    const { categoryId } = (await req.json()) as { categoryId: string }
    const updatedTodoData = KanbanData.map((category) => {
      if (category.id === categoryId) {
        return { ...category, child: [] }
      }
      return category
    })
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

// Mock API endpoint to add a new task
export async function POST(req: Request) {
  try {
    const { categoryId, newTaskData } = (await req.json()) as {
      categoryId: string
      newTaskData: Task
    }
    const updatedTodoData = KanbanData.map((category) => {
      if (category.id === categoryId) {
        return { ...category, child: [...category.child, newTaskData] }
      }
      return category
    })
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

// Mock API endpoint to update the name of a category
export async function PUT(req: Request) {
  try {
    const { categoryId, categoryName } = (await req.json()) as {
      categoryId: string
      categoryName: string
    }
    const updatedTodoData = KanbanData.map((category) => {
      if (category.id === categoryId) {
        return { ...category, name: categoryName }
      }
      return category
    })
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
