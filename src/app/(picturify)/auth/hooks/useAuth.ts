"use client";
import { useUserState } from "@/store/user/user.store";

export const useAuth = () => {
  const user = useUserState((state) => state.user);
  const cleanUser = useUserState((state) => state.cleanUser);
  const setNewJwt = useUserState((state) => state.renewToken);

  const checkingToken = async () => {
    if (!user.token.length) {
      cleanUser();
      return;
    }

    const response = await fetch(
      `https://picturify-backend.onrender.com/api/auth/renew-token`,
      {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${user.token}`,
        },
      }
    );

    const resp = await response.json();

    if (!resp.ok) {
      cleanUser();
      return;
    }

    setNewJwt(resp.jwt);
  };

  return {
    checkingToken,
  };
};
