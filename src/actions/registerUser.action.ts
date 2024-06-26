"use server";
import { useUserState } from "@/store/user/user.store";

export interface ApiUserCratedResponse {
  email: string;
  password: string;
  username: string;
}

export const registerUser = async (prevState: any, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = formData.get("username") as string;

  const user = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password, username }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(user);
  const setUser = useUserState((state) => state.setUser);
  setUser({
    username: user.user.username,
    email: user.user.email,
    token: user.token,
  });

  return user;
};
