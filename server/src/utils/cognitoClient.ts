import { REGION } from "../../aws.config";
import { CognitoIdentityProviderClient, } from "@aws-sdk/client-cognito-identity-provider";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";

export const userPoolsClient: CognitoIdentityProviderClient = new CognitoIdentityProviderClient({ region: REGION });

// Need JWT for to authenticate, collect it from gql
export const identityPoolsClient: CognitoIdentityClient = new CognitoIdentityClient({ region: REGION });