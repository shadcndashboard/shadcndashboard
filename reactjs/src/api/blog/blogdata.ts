import { Chance } from 'chance';
import { random } from 'lodash';
import { sub } from 'date-fns';
import { uniqueId } from 'lodash';
import { BlogType, BlogPostType } from 'src/types/apps/blog';
import { http, HttpResponse } from 'msw';

import blogImg1 from '@/assets/images/blog/blog-img1.png';
import blogImg2 from '@/assets/images/blog/blog-img2.png';
import blogImg3 from '@/assets/images/blog/blog-img3.png';
import blogImg4 from '@/assets/images/blog/blog-img4.png';
import blogImg5 from '@/assets/images/blog/blog-img5.png';
import blogImg6 from '@/assets/images/blog/blog-img6.png';
import blogImg8 from '@/assets/images/blog/blog-img8.png';
import blogImg9 from '@/assets/images/blog/blog-img9.png';
import blogImg12 from '@/assets/images/blog/blog-img12.png';

import userImg2 from '@/assets/images/profile/user-2.png';
import userImg3 from '@/assets/images/profile/user-3.png';
import userImg4 from '@/assets/images/profile/user-4.png';
import userImg5 from '@/assets/images/profile/user-5.png';
import userImg6 from '@/assets/images/profile/user-6.png';

const chance = new Chance();

const BlogComment: BlogType[] = [
  {
    id: uniqueId('#comm_'),
    profile: {
      id: uniqueId(),
      avatar: userImg5,
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
      avatar: userImg3,
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [
      {
        id: uniqueId('#comm_'),
        profile: {
          id: uniqueId(),
          avatar: userImg3,
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
      avatar: userImg4,
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
    coverImg: blogImg2,
    createdAt: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg5,
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title: 'After Twitter Staff Cuts, Survivors Face Radio Silence',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: blogImg1,
    createdAt: sub(new Date(), { days: 7, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg2,
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
    coverImg: blogImg3,
    createdAt: sub(new Date(), { days: 5, hours: 2, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Design',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg3,
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title: 'Why Figma is selling to Adobe for $20 billion',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: blogImg4,
    createdAt: sub(new Date(), { days: 7, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Design',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg4,
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title: 'Streaming video way before it was cool, go dark tomorrow',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: blogImg5,
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg5,
      name: chance.name(),
    },
    comments: BlogComment,
    published: false,
  },
  {
    id: uniqueId(),
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones ',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: blogImg6,
    createdAt: sub(new Date(), { days: 2, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg6,
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
    coverImg: blogImg9,
    createdAt: sub(new Date(), { days: 3, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Social',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg2,
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: blogImg8,
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Health',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg3,
      name: chance.name(),
    },
    comments: BlogComment,
    published: false,
  },
  {
    id: uniqueId(),
    title: 'Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: blogImg9,
    createdAt: sub(new Date(), { days: 5, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: true,
    author: {
      id: uniqueId(),
      avatar: userImg4,
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
  {
    id: uniqueId(),
    title: 'Presented by Max Rushden with Barry Glendenning, Philippe Auclair',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: blogImg1,
    createdAt: sub(new Date(), { days: 0, hours: 1, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Health',
    featured: true,
    author: {
      id: uniqueId(),
      avatar: userImg5,
      name: chance.name(),
    },
    comments: BlogComment,
    published: false,
  },
  {
    id: uniqueId(),
    title: 'Garmins Instinct Crossover Solar is a rugged hybrid smartwatch',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: blogImg12,
    createdAt: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: userImg6,
      name: chance.name(),
    },
    comments: BlogComment,
    published: true,
  },
]
// Mocked Apis
export const Bloghandlers = [
  // Mock api endpoint to fetch all blogposts
  http.get('/api/data/blog/BlogPosts', () => {
    try {
      return HttpResponse.json({ status: 200, data: BlogPost, msg: 'success' });
    } catch (error) {
      return HttpResponse.json({ status: 400, msg: 'something went wrong' });
    }
  }),

  // Mock api endpoint to add post info
  http.post('/api/data/blog/post/add', async ({ request }) => {
    try {
      const { postId, comment } = (await request.json()) as { postId: number; comment: any };
      const postIndex = BlogPost.findIndex((x) => x.id === postId);
      const post = BlogPost[postIndex];
      const cComments = post.comments || [];
      post.comments = [comment, ...cComments];
      return HttpResponse.json({
        status: 200,
        data: { posts: [...BlogPost] },
        msg: 'success',
      });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'something went wrong',
        error,
      });
    }
  }),
];
