import Cookies from "js-cookie";
import { COOKIE_NAME } from "../config";

export enum EnumTokens {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "refreshToken",
}
class TokenService {
  getAccessToken = () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
    return accessToken || null;
  };
  saveAccessTokenStorage = (accessToken: string) => {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
      domain: COOKIE_NAME,
      sameSite: "Lax",
      secure: false,
      expires: 10,
    });
  };
  getRefreshToken = () => {
    const refreshToken = Cookies.get(EnumTokens.REFRESH_TOKEN);
    return refreshToken || null;
  };

  saveRefreshTokenStorage = (refreshToken: string) => {
    Cookies.set(EnumTokens.REFRESH_TOKEN, refreshToken, {
      domain: COOKIE_NAME,
      sameSite: "Lax",
      secure: false,
      expires: 10,
    });
  };

  removeTokenFromStorage = () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN);
    Cookies.remove(EnumTokens.REFRESH_TOKEN);
  };
}
export const tokenService = new TokenService();
