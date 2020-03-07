import { BaseResponseDTO } from '../base.dto';

export class LoginRequestDTO {
  username: string;
  password: string;
}

export class LoginResponseDTO extends BaseResponseDTO {
  token: string;
}
