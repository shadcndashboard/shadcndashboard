import { ChatsType, MessageType } from '@/app/(dashboard-layout)/types/apps/chat'
import { Chance } from 'chance'

import { sub } from 'date-fns'
import { uniqueId } from 'lodash'
import { NextResponse } from 'next/server'

const chance = new Chance()

let ChatData: ChatsType[] = [
  {
    id: 1,
    name: 'James Johnson',
    status: 'online',
    thumb: '/images/profile/user-5.png',
    recent: false,
    excerpt: 'Theme Developer',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          {
            icon: '/images/chat/icon-adobe.svg',
            file: 'service-task.pdf',
            fileSize: '2MB',
          },
          {
            icon: '/images/chat/icon-chrome.svg',
            file: 'homepage-design.fig',
            fileSize: '3MB',
          },
          {
            icon: '/images/chat/icon-figma.svg',
            file: 'about-us.html',
            fileSize: '1KB',
          },
          {
            icon: '/images/chat/icon-javascript.svg',
            file: 'work-project.zip',
            fileSize: '20MB',
          },
          {
            icon: '/images/chat/icon-zip-folder.svg',
            file: 'custom.js',
            fileSize: '2MB',
          },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 30 }),
        msg: chance.sentence({ words: 10 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: uniqueId(),
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        msg: '/images/blog/blog-img1.png',
        senderId: uniqueId(),
        type: 'image',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 5 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 2,
    name: 'Maria Hernandez',
    status: 'away',
    thumb: '/images/profile/user-9.png',
    recent: true,
    excerpt: 'Doctor',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: uniqueId(),
        type: 'text',
        attachment: [
          {
            icon: '/images/chat/icon-adobe.svg',
            file: 'service-task.pdf',
            fileSize: '2MB',
          },
          {
            icon: '/images/chat/icon-chrome.svg',
            file: 'homepage-design.fig',
            fileSize: '3MB',
          },
          {
            icon: '/images/chat/icon-javascript.svg',
            file: 'work-project.zip',
            fileSize: '20MB',
          },
          {
            icon: '/images/chat/icon-zip-folder.svg',
            file: 'custom.js',
            fileSize: '2MB',
          },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 30 }),
        msg: chance.sentence({ words: 10 }),
        senderId: uniqueId(),
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 2,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        msg: '/images/blog/blog-img1.png',
        senderId: 2,
        type: 'image',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: uniqueId(),
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 3,
    name: 'David Smith',
    status: 'busy',
    thumb: '/images/profile/user-3.png',
    recent: false,
    excerpt: 'Hacker',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          {
            icon: '/images/chat/icon-adobe.svg',
            file: 'service-task.pdf',
            fileSize: '2MB',
          },
          {
            icon: '/images/chat/icon-zip-folder.svg',
            file: 'custom.js',
            fileSize: '2MB',
          },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 30 }),
        msg: chance.sentence({ words: 10 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 4,
    name: 'Maria Rodriguez',
    status: 'offline',
    thumb: '/images/profile/user-2.png',
    recent: true,
    excerpt: 'Please wait outside of the house',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 4,
        type: 'text',
        attachment: [
          {
            icon: '/images/chat/icon-javascript.svg',
            file: 'work-project.zip',
            fileSize: '20MB',
          },
          {
            icon: '/images/chat/icon-zip-folder.svg',
            file: 'custom.js',
            fileSize: '2MB',
          },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 11 }),
        msg: '/images/blog/blog-img1.png',
        senderId: uniqueId(),
        type: 'image',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 4,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 1 }),
        msg: chance.sentence({ words: 7 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 5,
    name: 'Robert Smith',
    status: 'online',
    thumb: '/images/profile/user-5.png',
    recent: true,
    excerpt: 'Front End Developer',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          {
            icon: '/images/chat/icon-adobe.svg',
            file: 'service-task.pdf',
            fileSize: '2MB',
          },
          {
            icon: '/images/chat/icon-chrome.svg',
            file: 'homepage-design.fig',
            fileSize: '3MB',
          },
          {
            icon: '/images/chat/icon-figma.svg',
            file: 'about-us.html',
            fileSize: '1KB',
          },
          {
            icon: '/images/chat/icon-javascript.svg',
            file: 'work-project.zip',
            fileSize: '20MB',
          },
          {
            icon: '/images/chat/icon-zip-folder.svg',
            file: 'custom.js',
            fileSize: '2MB',
          },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 30 }),
        msg: chance.sentence({ words: 10 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: uniqueId(),
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        msg: '/images/blog/blog-img1.png',
        senderId: 5,
        type: 'image',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 5 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 5,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 6,
    name: 'Joseph Sarah',
    status: 'busy',
    thumb: '/images/profile/user-10.png',
    recent: false,
    excerpt: 'Graphics Designer',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          {
            icon: '/images/chat/icon-chrome.svg',
            file: 'homepage-design.fig',
            fileSize: '3MB',
          },
          {
            icon: '/images/chat/icon-javascript.svg',
            file: 'work-project.zip',
            fileSize: '20MB',
          },
          {
            icon: '/images/chat/icon-zip-folder.svg',
            file: 'custom.js',
            fileSize: '2MB',
          },
        ],
        id: uniqueId(),
      },
      {
        msg: '/images/blog/blog-img1.png',
        senderId: uniqueId(),
        type: 'image',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 5 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 2 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 6,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 7,
    name: 'Thomas Smith',
    status: 'away',
    thumb: '/images/profile/user-8.png',
    recent: true,
    excerpt: 'Back End Developer',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          {
            icon: '/images/chat/icon-adobe.svg',
            file: 'service-task.pdf',
            fileSize: '2MB',
          },
          {
            icon: '/images/chat/icon-chrome.svg',
            file: 'homepage-design.fig',
            fileSize: '3MB',
          },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 1 }),
        msg: chance.sentence({ words: 10 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 15 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 7,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 7,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 8,
    name: 'David Elizabeth',
    status: 'offline',
    thumb: '/images/profile/user-3.png',
    recent: false,
    excerpt: 'Theme Developer',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          {
            icon: '/images/chat/icon-adobe.svg',
            file: 'service-task.pdf',
            fileSize: '2MB',
          },
          {
            icon: '/images/chat/icon-javascript.svg',
            file: 'work-project.zip',
            fileSize: '20MB',
          },
          {
            icon: '/images/chat/icon-zip-folder.svg',
            file: 'custom.js',
            fileSize: '2MB',
          },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 8,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 9,
    name: 'Charles Martha',
    status: 'online',
    thumb: '/images/profile/user-4.png',
    recent: false,
    excerpt: 'Administrator',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          {
            icon: '/images/chat/icon-javascript.svg',
            file: 'work-project.zip',
            fileSize: '20MB',
          },
          {
            icon: '/images/chat/icon-zip-folder.svg',
            file: 'custom.js',
            fileSize: '2MB',
          },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 8 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 8 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 5 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 9,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 2 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 9,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 10,
    name: 'Samuel Eliza',
    status: 'online',
    thumb: '/images/profile/user-5.png',
    recent: false,
    excerpt: 'Doctor',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          {
            icon: '/images/chat/icon-adobe.svg',
            file: 'service-task.pdf',
            fileSize: '2MB',
          },
          {
            icon: '/images/chat/icon-zip-folder.svg',
            file: 'custom.js',
            fileSize: '2MB',
          },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 11 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 10,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
]

export async function GET() {
  try {
    return NextResponse.json({ status: 200, msg: 'success', data: ChatData })
  } catch (error: unknown) {
    return NextResponse.json({ status: 200, msg: 'failed', data: error })
  }
}

export async function POST(req: Request) {
  try {
    const { chatId, message } = (await req.json()) as {
      chatId: number | string
      message: string
    }
    if (!chatId || !message) {
      return NextResponse.json({
        status: 400,
        msg: 'failed',
        error: 'Invalid request. Missing parameters.',
      })
    }

    // Simulate creating a new message
    const newMessage: MessageType = {
      id: uniqueId(), // Use uniqueId for consistency
      senderId: uniqueId(), // Generate a new senderId
      msg: message,
      createdAt: new Date(),
      type: 'text', // Assuming the message type is text for simplicity
      attachment: [], // No attachment initially
    }

    // Find the chat by chatId and push the new message
    const chat = ChatData.find((chat) => chat.id === chatId)
    if (chat) {
      chat.messages.push(newMessage)
    } else {
      return NextResponse.json({
        status: 400,
        msg: 'failed',
        error: 'Chat not found.',
      })
    }

    return NextResponse.json({ status: 201, msg: 'Success', data: ChatData })
  } catch (error: unknown) {
    return NextResponse.json({
      status: 400,
      msg: 'failed',
      error: 'Failed to add message',
    })
  }
}
