import { AttributeType } from "@aws-sdk/client-cognito-identity-provider";

//Cognito types and Interfaces

export type AuthParameters = {
  USERNAME: string;
  PASSWORD: string;

};

export interface UserPoolInfo {
  USERPOOL_ID: string;
  CLIENT_ID: string;
}


export interface UserSignUpInput {
  email: string,
  password: string,
  passwordRepeat: string,
  userAttribute: AttributeType[];
}

export interface UserLogInInput {
  email: string,
  password: string;
}

