// line 7-9 are variables you need to fill in
const problemSetQuery = `
query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
  questionList(
    categorySlug: $categorySlug
    limit: $limit
    skip: $skip
    filters: $filters
    ) {
    total:totalNum
    data {
    acRate
    difficulty
    frontendQuestionId: questionFrontendId
    isFavor
    paidOnly: isPaidOnly
    status
    title
    titleSlug
    topicTags {
      name
      id
      slug
      }
     }
    }
}`;

export default problemSetQuery;