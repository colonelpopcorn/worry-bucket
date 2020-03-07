import { BaseResponseDTO } from '../base.dto';
import { Model } from 'objection';
import * as Knex from 'knex';
import { config } from '../../../config/environment';

export class LoginRequestDTO {
  username: string;
  password: string;
}

export class LoginResponseDTO extends BaseResponseDTO {
  token?: string;
}

const knex = Knex(config[process.env.ENVIRONMENT || 'development'].db);

Model.knex(knex);

export class User extends Model {
  static get tableName() {
    return 'users';
  }
}
