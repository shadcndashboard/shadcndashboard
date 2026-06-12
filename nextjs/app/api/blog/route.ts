import { Chance } from 'chance'
import { random } from 'lodash'
import { sub } from 'date-fns'
import { uniqueId } from 'lodash'
import { BlogPostType, BlogType } from '@/app/(dashboard-layout)/types/apps/blog'
import { NextResponse } from 'next/server'

const chance = new Chance()

const BlogComment: BlogType[] = [
  {
    id: uniqueId('#comm_'),
    profile: {
      id: uniqueId(),
      avatar: '/images/profile/user-5.png',
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [],
  },
  {
    id: uniqueId('#comm_'),
    profile: {
      id: uniqueId(),
      avatar: '/images/profile/user-3.png',
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [
      {
        id: uniqueId('#comm_'),
        profile: {
          id: uniqueId(),
          avatar: '/images/profile/user-3.png',
          name: chance.name(),
        },
        time: chance.date(),
        comment: chance.paragraph({ sentences: 2 }),
      },
    ],
  },
  {
    id: uniqueId('#comm_'),
    profile: {
      id: uniqueId(),
      avatar: '/images/profile/user-4.png',
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [],
  },
]

const BlogPost: BlogPostType[] = [
  {
    id: uniqueId(),
    title: 'Garmins Instinct Crossover is a rugged hybrid smartwatch',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: '/images/blog/blog-img2.png',
    createdAt: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: '/images/profile/user-5.png',
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title: 'After Twitter Staff Cuts, Survivors Face Radio Silence',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: '/images/blog/blog-img1.png',
    createdAt: sub(new Date(), { days: 7, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: '/images/profile/user-2.png',
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title:
      'Apple is apparently working on a new streamlined accessibility for iOS',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: '/images/blog/blog-img3.png',
    createdAt: sub(new Date(), { days: 5, hours: 2, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Design',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: '/images/profile/user-3.png',
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title: 'Why Figma is selling to Adobe for $20 billion',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: '/images/blog/blog-img4.png',
    createdAt: sub(new Date(), { days: 7, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Design',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: '/images/profile/user-4.png',
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title: 'Streaming video way before it was cool, go dark tomorrow',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: '/images/blog/blog-img5.png',
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: '/images/profile/user-5.png',
      name: chance.name(),
    },
    comments: BlogComment,
    published: false,
  },
  {
    id: uniqueId(),
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones ',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: '/images/blog/blog-img6.png',
    createdAt: sub(new Date(), { days: 2, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: '/images/profile/user-6.png',
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title:
      'Intel loses bid to revive antitrust case against patent foe Fortress',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: '/images/blog/blog-img9.png',
    createdAt: sub(new Date(), { days: 3, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Social',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: '/images/profile/user-2.png',
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: '/images/blog/blog-img8.png',
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Health',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: '/images/profile/user-3.png',
      name: chance.name(),
    },
    comments: BlogComment,
    published: false,
  },
  {
    id: uniqueId(),
    title: 'Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: '/images/blog/blog-img9.png',
    createdAt: sub(new Date(), { days: 5, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: true,
    author: {
      id: uniqueId(),
      avatar: '/images/profile/user-4.png',
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title: 'Presented by Max Rushden with Barry Glendenning, Philippe Auclair',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: '/images/blog/blog-img1.png',
    createdAt: sub(new Date(), { days: 0, hours: 1, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Health',
    featured: true,
    author: {
      id: uniqueId(),
      avatar: '/images/profile/user-5.png',
      name: chance.name(),
    },
    comments: BlogComment,
    published: false,
  },
  {
    id: uniqueId(),
    title: 'Garmins Instinct Crossover Solar is a rugged hybrid smartwatch',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: '/images/blog/blog-img12.png',
    createdAt: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: '/images/profile/user-6.png',
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
]

export async function GET(req: Request) {
  try {
    return NextResponse.json({ status: 200, data: BlogPost, msg: 'success' })
  } catch (error: unknown) {
    return NextResponse.json({ status: 400, msg: 'something went wrong' })
  }
}

export async function POST(req: Request) {
  try {
    const { postId, comment } = (await req.json()) as {
      postId: string | number
      comment: BlogType
    }
    const postIndex = BlogPost.findIndex((x) => x.id === postId)
    const post = BlogPost[postIndex]
    const cComments = post.comments || []
    post.comments = [comment, ...cComments]
    return NextResponse.json({
      status: 200,
      data: { posts: [...BlogPost] },
      msg: 'success',
    })
  } catch (error: unknown) {
    return NextResponse.json({
      status: 400,
      msg: 'something went wrong',
      error,
    })
  }
}
