export type Profile = {
  user_id: number;
  status: string;
  name: string;
  headline: string;
  skills: {name: string}[];
  projects: {name: string, link: string}[];
  phone_number: string;
  email: string;
  about: string;
};