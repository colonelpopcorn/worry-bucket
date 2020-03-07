export interface LoginRequestDTO {
  username: string;
  password: string;
}

export interface LoginResponseDTO {
  token: string;
  success: boolean;
  responseMessage: string;
}
