export type Profile = {
  _id: { $oid: string};
  userId: string;
  userName: string;
  email: string;
  password: string;
  authToken: string;
};