import { REGION } from "../../aws.config";
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";

export const userPoolsClient: CognitoIdentityProviderClient = new CognitoIdentityProviderClient({ region: REGION });
