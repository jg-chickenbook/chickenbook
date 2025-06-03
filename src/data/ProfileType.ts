export type Profile = {
  _id: string;
  userId: string;
  status: string;
  name: string;
  headline: string;
  skills: string[];
  projects: {_id: string, name: string, link: string}[];
  phone: string;
  email: string;
  about: string;
  profilePic: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};