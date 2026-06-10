
import { Chance } from 'chance';
import { uniqueId } from "lodash";
import { sub } from 'date-fns';
import { PostType } from '@/app/(dashboard-layout)/types/apps/userprofile';
import { userType } from '@/app/(dashboard-layout)/types/apps/users';

const chance = new Chance();

// social profile
export const posts: PostType[] = [
  {
    id: "1",
    profile: {
      id: "2",
      avatar: "/images/profile/user-10.png",
      name: 'Macky Dawn',
      time: '15 min ago',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [
        {
          img: '/images/products/advance-macbook.jpg',
          featured: true,
        },
      ],
      likes: {
        like: true,
        value: 67,
      },
      comments: [
        {
          id: "3",
          profile: {
            id: "4",
            avatar: "/images/profile/user-3.png",
            name: 'Deran Mac',
            time: '8 min ago ',
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: true,
              value: 55,
            },
            replies: [],
          },
        },
        {
          id: "5",
          profile: {
            id: "6",
            avatar: "/images/profile/user-8.png",
            name: 'Jonathan Bg',
            time: '5 min ago ',
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: false,
              value: 68,
            },
            replies: [
              {
                id: "7",
                profile: {
                  id: "8",
                  avatar: "/images/profile/user-2.png",
                  name: 'Carry minati',
                  time: 'just now ',
                },
                data: {
                  comment: chance.paragraph({ sentences: 2 }),
                  likes: {
                    like: true,
                    value: 10,
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: "9",
    profile: {
      id: "10",
      avatar: "/images/profile/user-2.png",
      name: 'Carry Minati',
      time: 'now',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [],
      likes: {
        like: true,
        value: 1,
      },
      comments: [],
    },
  },
  {
    id: "11",
    profile: {
      id: "12",
      avatar: "/images/profile/user-2.png",
      name: 'Genelia Desouza',
      time: '15 min ago ',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [
        {
          img: '/images/products/boat-headphone.png',
          title: 'Image Title',
        },
        {
          img: '/images/products/little-angel-toy.png',
          title: 'Painter',
        },
      ],
      likes: {
        like: false,
        value: 320,
      },
      comments: [
        {
          id: "13",
          profile: {
            id: "14",
            avatar: "/images/profile/user-3.png",
            name: 'Ritesh Deshmukh',
            time: '15 min ago ',
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: true,
              value: 65,
            },
            replies: [],
          },
        },
      ],
    },
  },
  {
    id: "15",
    profile: {
      id: "16",
      avatar: "/images/profile/user-6.png",
      name: 'Himesh R',
      time: '15 min ago ',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [],
      video: 'ejqFyft90zQ?si=1TxNRUpR7HAxcrqY',
      likes: {
        like: true,
        value: 129,
      },
    },
  },
];

export const users: userType[] = [
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-10.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-2.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-3.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-4.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-5.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-6.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-7.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-8.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-9.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-10.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-5.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-2.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-3.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-4.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-5.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-6.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-7.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-8.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-9.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: "/images/profile/user-10.png",
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
];

export const gallery = [
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/advance-macbook.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/beauty-product.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 4, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/boat-headphone.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 3, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/little-angel-toy.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 2, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/new-book.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 1, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/new-games.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 7, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/short-sweet-purse.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 6, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/shoes.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 5, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/teddybear.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/toy-dino.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 3, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/woman-dress.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 2, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: "/images/products/shoes.png",
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 1, hours: 6, minutes: 20 }),
  },
];