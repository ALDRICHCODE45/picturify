import { create } from "zustand";

import { persist } from "zustand/middleware";

interface UserState {
  user: {
    username: string;
    email: string;
    password: string;
    token: string;
  };
  setUser: (user: UserState["user"]) => void;
  cleanUser: () => void;
}

export const useUserState = create<UserState>()(
  persist(
    (set, get) => ({
      user: {
        email: "",
        password: "",
        token: "",
        username: "",
      },
      setUser(user) {
        set({ user });
      },
      cleanUser() {
        set({ user: { email: "", password: "", token: "", username: "" } });
      },
    }),

    { name: "user" }
  )
);
