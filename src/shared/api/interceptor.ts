import Cookie from "js-cookie";
import { API_URL } from "../config";
import { redirect } from "next/navigation";
class ApiError extends Error {
  constructor(public response: Response) {
    super("ApiError:" + response.status + "\n" + response);
  }
}

export const handleApiError = async (error: unknown) => {
  if (error instanceof ApiError) {
    try {
      const errorData = (await error.response.json()) as {
        loc: string[];
        msg: string;
        type: string;
      };
      return errorData;
    } catch {
      return { loc: [], msg: "unknown", type: "unknown" };
    }
  } else {
    return { loc: [], msg: "unknown", type: "unknown" };
  }
};

export const jsonApiInstance = async <T>(
  url: string,
  init?: RequestInit & {
    json?: unknown;
    params?: Record<string, any>;
  }
) => {
  let headers = init?.headers ?? {};
  headers = {
    Accept: "application/json",
    ...headers,
  };

  if (init?.json) {
    headers = {
      "Content-Type": "application/json",

      ...headers,
    };
    init.body = JSON.stringify(init.json);
  }
  if (init?.params) {
    const params = cleanParams(init?.params);
    const searchParams = new URLSearchParams(params);
    url = `${url}${searchParams.toString() && "?" + searchParams.toString()}`;
  }
  const request = async (): Promise<T> => {
    const token = await getAuthToken();
    if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
        ...headers,
      };
    }
    const result = await fetch(`${API_URL}${url}`, {
      ...init,
      headers,
    });
    // if (result.status === 401) {
    //   document.location.href = "/login";
    // }
    if (!result.ok) {
      throw await result.json();
    }

    try {
      const data = (await result.json()) as Promise<T>;
      return data;
    } catch (error) {
      if (result.status === 204 || result.status === 200) {
        return "success" as any;
      }
    }
    return Promise.reject(new Error("Unexpected API response"));
  };
  return request();
};

async function getAuthToken(): Promise<string | null> {
  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();
    return cookieStore.get("accessToken")?.value || null;
  }
  const authCookie = Cookie.get("accessToken");
  return authCookie ?? null;
}

const cleanParams = (params: Record<string, any>): Record<string, any> =>
  Object.fromEntries(
    Object.entries(params).filter(
      ([_, value]) => value !== undefined && value !== null && value !== ""
    )
  );
