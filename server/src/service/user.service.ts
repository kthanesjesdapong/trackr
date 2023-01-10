import { SignUpCommandInput, InitiateAuthRequestInput, LoginPropInput } from "../utils/CognitoShapes";
import { UserLogInInput, UserSignUpInput } from "../interfaces/ICognito";
import { InitiateAuthCommand, SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";

import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { REGION, USER_POOL_LOGIN, IDENTITY_POOL_ID } from "../../aws.config";

//Forms User Inputs for SignUpCommand
export const getUserInputs = (obj: UserSignUpInput): SignUpCommandInput => {
  const userSignUpInput = new SignUpCommandInput(obj.email, obj.password, obj.userAttribute);
  return userSignUpInput;

};

//Calls getUserInputs, forms SignUpCommand and sends to GQL server
export const formSignUpCommand = (SignUpInput: UserSignUpInput): SignUpCommand => {
  const registeredUser = new SignUpCommand(getUserInputs(SignUpInput));
  return registeredUser;
};


//Forms User Inputs for Logins
export const getInitiateAuthReqInputs = (obj: UserLogInInput): InitiateAuthRequestInput => {
  const initiateAuthRequestInput = new InitiateAuthRequestInput(obj.email, obj.password);
  return initiateAuthRequestInput;
};


//calls getInitiateAuthReqInputs, forms InitiateAuthCommand
export const initiateAuthCommand = (LoginInput: UserLogInInput): InitiateAuthCommand => {
  const loggedinUser = new InitiateAuthCommand(getInitiateAuthReqInputs(LoginInput));
  return loggedinUser;
};

//Takes JWT received from sending initiateAuthCommand
export const getUserIdentityPools = async (tokenId: string) => {
  const loginPropInput = new LoginPropInput(tokenId);
  try {
    const cognitoIdentityClient = new CognitoIdentityClient({
      region: REGION,
      credentials: fromCognitoIdentityPool({
        // client: new CognitoIdentityClient({ region: REGION }),
        identityPoolId: IDENTITY_POOL_ID,
        clientConfig: { region: REGION },
        logins: {
          [USER_POOL_LOGIN]: tokenId
        }
      })
    });

    const credentials = await cognitoIdentityClient.config.credentials();
    // console.log(await credentials, 'this is credentials from line 53 - user.service');
    return cognitoIdentityClient;
  } catch (e: any) {
    console.log(e);
  }
};