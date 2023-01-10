import { topics } from "../constants/topics";
import { fromCognitoIdentityPool, CognitoIdentityCredentialProvider } from "@aws-sdk/credential-providers";
import { IDENTITY_POOL_ID, REGION } from "../../aws.config";
import { LoginPropInput } from "./CognitoShapes";


//Builds map, and is called in problem.service in order to reassign responseId
export const buildTopicMap = (arrOfTopics: typeof topics): Map<string, number> => {
  const topicMap = new Map();
  for (let i = 0; i < arrOfTopics.length; i++) {
    const slug = arrOfTopics[i]['topicSlug'];
    topicMap.set(slug, i + 1);
  }
  return topicMap;
};
export const topicMap = buildTopicMap(topics);


//Passed to createUser's resolver to get UserAttributes
export const buildUserAttributeArray = (nameArr: Array<string>, valueArr: Array<string>) => {

  const attArr = nameArr.map((element, i) => {
    return {
      Name: nameArr[i],
      Value: valueArr[i]
    };
  });
  return attArr;
};


//Collect tokenId after user attempts to login
export const formCredentials = async (tokenId: string): Promise<CognitoIdentityCredentialProvider> => {
  const login = new LoginPropInput(tokenId);
  const credentials = fromCognitoIdentityPool({
    identityPoolId: IDENTITY_POOL_ID,
    clientConfig: { region: REGION },
    logins: login
  });
  return credentials;
};
