import { AuthParameters } from '../interfaces/ICognito';

import { USER_POOL_LOGIN, USERPOOL_INFO, USER_PASSWORD_AUTH } from '../../aws.config';

const { USERPOOL_ID, CLIENT_ID } = USERPOOL_INFO;


export class SignUpCommandInput {
  ClientId: string;
  Username: string;
  Password: string;
  constructor(Username: string, Password: string) {
    this.ClientId = CLIENT_ID;
    this.Username = Username;
    this.Password = Password;
  }
}

export class InitiateAuthRequestInput {
  AuthParameters: AuthParameters;
  ClientId: string;
  constructor(username: string, password: string) {
    this.ClientId = CLIENT_ID;
    this.AuthParameters = {
      USERNAME: username,
      PASSWORD: password
    };
  }
}

export class LoginPropInput {
  [USER_POOL_LOGIN: string]: string;
  constructor(tokenId: string) {
    this[USER_POOL_LOGIN] = tokenId;
  }
}