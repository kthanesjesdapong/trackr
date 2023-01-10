import { AuthParameters } from '../interfaces/ICognito';
import { AttributeType } from "@aws-sdk/client-cognito-identity-provider";


import { USER_POOL_LOGIN, USERPOOL_INFO, USER_PASSWORD_AUTH } from '../../aws.config';

const { USERPOOL_ID, CLIENT_ID } = USERPOOL_INFO;

//Classes to Form our InputShape
export class SignUpCommandInput {
  ClientId: string;
  Username: string;
  Password: string;
  UserAttributes: AttributeType[];

  constructor(Username: string, Password: string, userAttributes: AttributeType[]) {
    this.ClientId = CLIENT_ID;
    this.Username = Username;
    this.Password = Password;
    this.UserAttributes = userAttributes;
  }
}

export class InitiateAuthRequestInput {
  AuthParameters: AuthParameters;
  ClientId: string;
  AuthFlow: string;
  constructor(username: string, password: string) {
    this.ClientId = CLIENT_ID;
    this.AuthFlow = USER_PASSWORD_AUTH;
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