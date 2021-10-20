export interface User {
  message: string;
  username: string;
  email: string;
  fullName: string;
  token: string;
}
export interface userState {
  date: User;
  loading: boolean;
  error: string;
}
