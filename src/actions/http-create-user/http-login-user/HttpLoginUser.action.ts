export interface Args {
  email: string;
  password: string;
}

interface Response {
  user: {
    email: string;
    password: string;
    username: string;
  };
  ok: boolean;
  token: string;
}

export const LoginUser = async (body: Args): Promise<Response> => {
  const todo = await fetch(`http://localhost:3002/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(todo);
  return todo;
};
``;
