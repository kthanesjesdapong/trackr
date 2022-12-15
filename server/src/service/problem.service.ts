import { ProblemSetVariable, ProblemList, ProblemDataResponse } from "../interfaces/problemSetQuery.interfaces";
import { Prisma, PrismaClient } from '@prisma/client';


//This is where the work is executed
//Business logic lives in service
//Think of this as the place where you're creating the skeleton of your functions, without the real args passed in

//getProblems,addTopics,addProblem are used to seed data from leetcodeAPI
export async function getProblems(client: any, query: String, problemSetVariable: ProblemSetVariable): Promise<ProblemList | undefined> {
  //pass in the req.body once you have a forum component
  try {
    const problemSet = await client.request(query, problemSetVariable);
    return problemSet;
  } catch (e: any) {
    console.log(e.err);
  }
}

export const addTopics = async (data: Prisma.TopicCreateManyInput[], client: PrismaClient): Promise<Prisma.BatchPayload> => {
  return client.topic.createMany({ data, skipDuplicates: true });
};

export const addProblem = async (problemDataResponse: ProblemDataResponse, client: PrismaClient, topicMap: Map<string, number>): Promise<ProblemList | undefined> => {

  const { frontendQuestionId, title, titleSlug, difficulty, acRate, topicTags } = problemDataResponse;
  try {
    //
    const addedProblem = await client.problem.create({
      data: {
        id: parseInt(frontendQuestionId),
        title: title,
        titleSlug: titleSlug,
        difficulty: difficulty,
        acRate: acRate,
        topics: {
          connectOrCreate: topicTags.map((topic) => ({
            // Match the ID associated with the topicSlugs  'array' : 1
            where: {
              id: topicMap.get(topic.slug)
            },
            //assign the topics relation with their topic id.
            create: {
              id: topicMap.get(topic.slug)!,
              topicSlug: topic.slug,
              topicName: topic.name
            }
          }))
        },
      }
    });
  } catch (e: any) {
    console.log(e);
  }
  return;
};