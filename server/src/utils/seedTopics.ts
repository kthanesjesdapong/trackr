import { addTopics, addProblem } from "../service/problem.service";
import { prisma } from "./prismaClient/Client";
import { topics } from "../constants/topics";
import { buildTopicMap } from "./utilityFunction";
import axios from 'axios';
import { ProblemDataResponse } from "../interfaces/problemSetQuery.interfaces";


const seedTopicSlugs = async () => {
  try {
    await prisma.topic.deleteMany();
    await prisma.problem.deleteMany();
    const topicMap = buildTopicMap(topics);
    //Making API Call
    const LOCAL_API_ENDPOINT = 'http://localhost:8080/problem';
    const { data } = await axios.get(LOCAL_API_ENDPOINT);
    //QuestionList
    const problemSetData = data.questionList.data;
    //Changing KeyName in Resposne Object
    problemSetData.forEach((problem: any) => {
      problem.topicTags.forEach((topicTag: any) => {
        topicTag.id = topicMap.get(topicTag.slug);
      });
    });
    const addedTopics = await addTopics(topics, prisma);
    const addedProblemsPromises = problemSetData.map((problemData: ProblemDataResponse) => addProblem({ ...problemData }, prisma, topicMap));
    await Promise.all(addedProblemsPromises);
  } catch (e: any) {
    console.log(e);
  }
};
seedTopicSlugs();


