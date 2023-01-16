import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { REGION } from "@awsConfig";
import { formCredentials } from "@utils/utilityFunction";

// const identityPoolClient = new CognitoIdentityClient({
//   region: REGION,
//   credentials: formCredentials()
// });