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
      frontendQuestionId: questionFrontendId
      title
      titleSlug
      difficulty
      acRate
    topicTags {
      id
      name
      slug
      }
     }
    }
}`;
export default problemSetQuery;
