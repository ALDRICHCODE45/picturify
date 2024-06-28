import { create } from "zustand";

import { persist } from "zustand/middleware";

interface UserState {
  user: {
    username: string;
    email: string;
    token: string;
  };
  setUser: (user: UserState["user"]) => void;
  cleanUser: () => void;
  renewToken: (newtoken: string) => void;
}

export const useUserState = create<UserState>()(
  persist(
    (set, get) => ({
      user: {
        email: "",
        token: "",
        username: "",
      },
      setUser(user) {
        set({ user });
      },
      cleanUser() {
        set({ user: { email: "", token: "", username: "" } });
      },
      renewToken(newtoken) {
        const user = get().user;
        set({ user: { ...user, token: newtoken } });
      },
    }),

    { name: "user" }
  )
);
