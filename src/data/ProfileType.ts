export type Profile = {
  _id: { $oid: string};
  userId: string;
  status: string;
  name: string;
  headline: string;
  skills: string[];
  projects: {name: string, link: string}[];
  phone: string;
  email: string;
  about: string;
  profilePic: string;
};