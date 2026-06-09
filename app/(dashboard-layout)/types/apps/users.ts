export interface userType {
  id: string;
  avatar: string;
  name: string;
  role: string;
  country: string;
  isFollowed: boolean;
}

export interface GallaryType {
  id: string | number;
  cover: string;
  name: string;
  time: string | Date;
}
