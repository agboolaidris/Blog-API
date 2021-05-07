export interface User {
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface Sub {
  createdAt: string;
  updatedAt: string;
  name: string;
  title: string;
  username: string;
  description: string;
  posts: [];
  imageUrl: string;
  bannerUrl?: string | undefined;
}
