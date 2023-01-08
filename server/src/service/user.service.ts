import { SignUpCommandInput, InitiateAuthRequestInput, LoginPropInput } from "../utils/CognitoShapes";
import { UserLogInInput, UserSignUpInput } from "../interfaces/ICognito";
import { SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";


//Forms User Inputs for SignUpCommand
export const getUserInputs = (obj: UserSignUpInput): SignUpCommandInput => {
  const userSignUpInput = new SignUpCommandInput(obj.email, obj.password, obj.userAttribute);
  return userSignUpInput;

};

//Forms User Inputs for Logins
export const getInitiateAuthReqInputs = (obj: UserLogInInput): InitiateAuthRequestInput => {
  const initiateAuthRequestInput = new InitiateAuthRequestInput(obj.email, obj.password);
  return initiateAuthRequestInput;
};


//Once Users are Authenticated from Logging in, a JWT will be returned and passed into this function
export const getUserIdentityPools = async (tokenId: string) => {
  const loginPropInput = new LoginPropInput(tokenId);
  try {

  } catch (e: any) {
    console.log(e);
  }
};

//Calls getUserInputs, forms SignUpCommand, send this to gql resolvers
//Could just add this to the context obj and call it from
export const formSignUpCommand = (SignUpInput: UserSignUpInput): SignUpCommand => {
  const registeredUser = new SignUpCommand(getUserInputs(SignUpInput));
  return registeredUser;
};