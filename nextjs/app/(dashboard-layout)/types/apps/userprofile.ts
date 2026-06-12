export type ProfileType = {
  id: string;
  avatar: string;
  name: string;
  time: string;
};

export type Likes = {
  like: boolean;
  value: number;
};

export type PostImageType = {
  img: string;
  featured?: boolean;
  title?: string;
};

export type CommentDataType = {
  name?: string;
  comment?: string;
  likes?: Likes;
  video?: string;
  replies?: Reply[];
};

export type Reply = {
  id?: string;
  profile?: ProfileType;
  data: CommentDataType;
};

export type Comment = {
  id: string;
  profile: ProfileType;
  data?: CommentDataType;
};

export type PostDataType = {
  id?: string;
  content: string;
  images: PostImageType[];
  video?: string;
  likes: Likes;
  comments?: Comment[];
};

export type PostType = {
  id?: string;
  profile: ProfileType;
  data: PostDataType;
};

export type profiledataType = {
  name: string;
  role: string;
  avatar: string;
  coverImage: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
};
