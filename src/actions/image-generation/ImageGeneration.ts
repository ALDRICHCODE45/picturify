export const ImageGenerationUseCase = async (prompt: string, token: string) => {
  const response = await fetch(
    `https://picturify-backend.onrender.com/api/picturify/image-generation`,

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ prompt }),
    }
  );
  const resp = await response.json();
  console.log(resp);
  return resp;
};
