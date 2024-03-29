import { ProblemSetVariable, ProblemList, ProblemDataResponse } from "@interfaces/problemSetQuery.interfaces";
import { Prisma, PrismaClient } from '@prisma/client';



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
    //creating the Problem based off of the response from hitting our api
    const addedProblem = await client.problem.create({
      data: {
        id: parseInt(frontendQuestionId),
        frontendId: parseInt(frontendQuestionId),
        title: title,
        titleSlug: titleSlug,
        difficulty: difficulty,
        acRate: acRate,
        topics: {
          create: topicTags.map((topic) => ({
            topic: {
              connectOrCreate: {
                create: {
                  id: topicMap.get(topic.slug)!,
                  topicSlug: topic.slug,
                  topicName: topic.name
                },
                where: {
                  id: topicMap.get(topic.slug)
                },
              }
            }
          }))
        }
      }
    });
  } catch (e: any) {
    console.log(e);
  }
  return;
};
