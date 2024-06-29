export interface ApiUserCratedResponse {
  email: string;
  password: string;
  username: string;
}
interface Response {
  user: {
    email: string;
    password: string;
    username: string;
  };
  msg: string;
  ok: boolean;
  token: string;
}

export const CreateUser = async (
  body: ApiUserCratedResponse
): Promise<Response> => {
  const todo = await fetch(
    `https://picturify-backend.onrender.com/api/auth/register`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  console.log(todo);
  return todo;
};
