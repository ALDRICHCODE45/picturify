"use client";
import { useUserState } from "@/store/user/user.store";

export const getUsertoken = () => {
  const user = useUserState((state) => state.user);
  return user.token;
};
