import { axiosClassic } from "../api/interceptors";
import { tokenService } from "./auth-token.service";

export const refreshService = {
  async refreshTokens() {
    const refreshToken = tokenService.getRefreshToken();
    const res = await axiosClassic.post<TokenSchema>(
      "/v1/auth/refresh",
      {},
      {
        headers: {
          Authorization: refreshToken,
        },
      }
    );
    tokenService.saveAccessTokenStorage(res.data?.token);
    tokenService.saveAccessTokenStorage(res.data?.refresh_token);
    return null;
  },
};
