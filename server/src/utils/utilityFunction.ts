import { topics } from "../constants/topics";

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