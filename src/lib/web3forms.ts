const WEB3FORMS_ACCESS_KEY = "88bc3008-ba8b-46b8-a5ad-eb6665c69d1c";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitWeb3Forms(formData: FormData, subject?: string) {
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);

  if (subject) {
    formData.append("subject", subject);
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  const data = (await response.json()) as {
    success?: boolean;
    message?: string;
  };

  if (!response.ok || data.success !== true) {
    throw new Error(data.message ?? "Something went wrong while sending your message. Please try again.");
  }

  return data;
}
