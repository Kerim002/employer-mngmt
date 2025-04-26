import { jsonApiInstance } from "@/shared/api/interceptor";

const baseUrl = "/api";

export const productApi = {
  uploadProduct: async (body: FormData) => {
    await jsonApiInstance(`${baseUrl}/upload`, {
      method: "POST",
      body,
    });
  },
};
