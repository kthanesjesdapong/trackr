import { SignUpCommandInput, InitiateAuthRequestInput, LoginPropInput } from "./CognitoShapes";
import { UserLogInInput, UserSignUpInput } from "../interfaces/ICognito";


export const getUserInputs = (obj: UserSignUpInput): SignUpCommandInput => {
  const userSignUpInputs = new SignUpCommandInput(obj.email, obj.password, obj.userAttribute);
  return userSignUpInputs;
};

export const getInitiateAuthReqInputs = (obj: UserLogInInput): InitiateAuthRequestInput => {
  const initiateAuthRequestInput = new InitiateAuthRequestInput(obj.email, obj.password);
  return initiateAuthRequestInput;
};




