export type Member = {
  _id: number;
  status: string;
  name: string;
  headline: string;
  skills: string[];
  projects: {name: string, link: string}[];
  phone: string;
  email: string;
  about: string;
};