import { SignUpCommandInput, InitiateAuthRequestInput, LoginPropInput } from "./CognitoShapes";
import { UserLogInInput, UserSignUpInput } from "../interfaces/ICognito";
import { userPoolsClient } from "./cognitoClient";
import { SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";



export const getUserInputs = (obj: UserSignUpInput): SignUpCommandInput => {
  const userSignUpInputs = new SignUpCommandInput(obj.email, obj.password, obj.userAttribute);
  return userSignUpInputs;
};

export const getInitiateAuthReqInputs = (obj: UserLogInInput): InitiateAuthRequestInput => {
  const initiateAuthRequestInput = new InitiateAuthRequestInput(obj.email, obj.password);
  return initiateAuthRequestInput;
};

export const getUserIdentityPools = async (tokenId: string) => {
  const loginPropInput = new LoginPropInput(tokenId);
  try {

  } catch (e: any) {
    console.log(e);
  }
};



/// MOVE THIS TO USER.SERVICE
const inputK: UserSignUpInput = { email: 'kavinthanesjesdapong@gmail.com', password: "Almondis#1", passwordRepeat: "Almondis#1", userAttribute: [{ Name: "given_name", Value: "Kavin" }, { Name: "family_name", Value: "thanesjesdapong" }] };


console.log(inputK, 'line 32');

async function testit(obj: UserSignUpInput, client: CognitoIdentityProviderClient): Promise<void> {
  const registeredUser = new SignUpCommand(getUserInputs(obj));
  const response = await userPoolsClient.send(registeredUser);
  try {
    console.log(response);

  } catch (e: any) {
    console.log('Error', e.response.data);
  }
}

testit(inputK, userPoolsClient);


