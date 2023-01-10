import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { REGION } from "../../aws.config";
import { formCredentials } from "./utilityFunction";

// const identityPoolClient = new CognitoIdentityClient({
//   region: REGION,
//   credentials: formCredentials()
// });