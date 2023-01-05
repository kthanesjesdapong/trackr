import { SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import { getUserInputs } from "../utils/cognitoInputs";
import { userPoolsClient } from "../utils/cognitoClient";


//This is where the work is executed
//Business Logic Lives in Service