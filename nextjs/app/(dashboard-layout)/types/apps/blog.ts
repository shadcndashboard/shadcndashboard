export type Profile = {
  id?: string | number;
  avatar?: string;
  name?: string;
  time?: string;
};

export interface BlogType {
  id?: string;
  profile?: Profile;
  time?: Date;
  comment?: string;
  replies?: BlogType[];
}

export interface BlogPostType {
  id?: string | number;
  title?: string;
  content?: string;
  coverImg?: string;
  createdAt?: Date;
  view?: number;
  share?: number;
  category?: string;
  featured?: boolean;
  author?: Profile;
  comments?: BlogType[];
  published: boolean;
}
