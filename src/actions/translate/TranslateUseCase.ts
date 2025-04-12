export const TranslateUseCase = async (
  prompt: string,
  lang: string,
  token: string,
) => {
  const response = await fetch(
    `https://picturify-backend-production.up.railway.app/api/picturify/translate`,

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ prompt, lang }),
    },
  );
  const resp = await response.json();
  console.log(resp);
  return resp;
};
