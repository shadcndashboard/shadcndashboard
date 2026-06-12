import { NextResponse } from 'next/server'
import { posts } from '../userdata'
import { Comment } from '@/app/(dashboard-layout)/types/apps/userprofile'

export async function POST(req: Request) {
  try {
    const { postId, comment } = (await req.json()) as {
      postId: string
      comment: Comment
    }
    const postIndex = posts.findIndex((x) => x.id === postId)
    const post = posts[postIndex]
    const cComments = post.data.comments || []
    post.data.comments = [...cComments, comment]
    return NextResponse.json({ status: 200, msg: 'Success', data: posts })
  } catch (error: unknown) {
    return NextResponse.json({
      status: 200,
      msg: 'Internal server error',
      error,
    })
  }
}
