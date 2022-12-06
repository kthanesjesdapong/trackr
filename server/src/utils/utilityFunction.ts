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
console.log(topicMap);