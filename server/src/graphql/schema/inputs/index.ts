// @ts-nocheck
import { Prisma } from '@prisma/client';
import { builder } from '../builder';

export const DateTime = builder.scalarType('DateTime', {
  parseValue: (value) => {
    const isDateParsable = typeof value === 'string' || typeof value === 'number';
    if (!isDateParsable) throw new Error('Invalid Date type');
    const date = new Date(value);
    const isInvalidDate = date.toString() === 'Invalid Date';
    if (isInvalidDate) throw new Error('Invalid Date');
    return new Date(value);
  },
  serialize: (value) => value ? new Date(value) : null,
});

export const Json = builder.scalarType('Json', {
  serialize: (value) => value,
});

export const NEVER = builder.scalarType('NEVER', {
  serialize: (value) => value,
  description: 'Never fill this, its created for inputs that dont have fields',
});

export const JsonNullValueFilter = builder.enumType('JsonNullValueFilter', {
  values: ["DbNull", "JsonNull", "AnyNull"] as const,
});

export const NullableJsonNullValueInput = builder.enumType('NullableJsonNullValueInput', {
  values: ["DbNull", "JsonNull"] as const,
});

export const ProblemAttemptDetailsScalarFieldEnum = builder.enumType('ProblemAttemptDetailsScalarFieldEnum', {
  values: ["id", "userId", "status", "createdAt"] as const,
});

export const ProblemAttemptScalarFieldEnum = builder.enumType('ProblemAttemptScalarFieldEnum', {
  values: ["id", "createdAt", "frontendId", "problemId", "attemptDetailId"] as const,
});

export const ProblemScalarFieldEnum = builder.enumType('ProblemScalarFieldEnum', {
  values: ["id", "frontendId", "title", "titleSlug", "difficulty", "acRate", "topicTags"] as const,
});

export const QueryMode = builder.enumType('QueryMode', {
  values: ["default", "insensitive"] as const,
});

export const SortOrder = builder.enumType('SortOrder', {
  values: ["asc", "desc"] as const,
});

export const TopicOnProblemsScalarFieldEnum = builder.enumType('TopicOnProblemsScalarFieldEnum', {
  values: ["problemId", "topicId", "topicSlug", "topicName"] as const,
});

export const TopicScalarFieldEnum = builder.enumType('TopicScalarFieldEnum', {
  values: ["id", "topicSlug", "topicName"] as const,
});

export const TransactionIsolationLevel = builder.enumType('TransactionIsolationLevel', {
  values: ["ReadUncommitted", "ReadCommitted", "RepeatableRead", "Serializable"] as const,
});

export const UserScalarFieldEnum = builder.enumType('UserScalarFieldEnum', {
  values: ["id", "registeredAt"] as const,
});

export const ProblemWhereInput = builder.inputRef<Prisma.ProblemWhereInput>('ProblemWhereInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [ProblemWhereInput] }),
    OR: t.field({ "required": false, "type": [ProblemWhereInput] }),
    NOT: t.field({ "required": false, "type": [ProblemWhereInput] }),
    id: t.field({ "required": false, "type": IntFilter }),
    frontendId: t.field({ "required": false, "type": IntFilter }),
    title: t.field({ "required": false, "type": StringFilter }),
    titleSlug: t.field({ "required": false, "type": StringFilter }),
    difficulty: t.field({ "required": false, "type": StringFilter }),
    acRate: t.field({ "required": false, "type": FloatFilter }),
    topics: t.field({ "required": false, "type": TopicOnProblemsListRelationFilter }),
    topicTags: t.field({ "required": false, "type": JsonNullableFilter }),
    problemAttempts: t.field({ "required": false, "type": ProblemAttemptListRelationFilter }),
  }),
});

export const ProblemOrderByWithRelationInput = builder.inputRef<Prisma.ProblemOrderByWithRelationInput>('ProblemOrderByWithRelationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    title: t.field({ "required": false, "type": SortOrder }),
    titleSlug: t.field({ "required": false, "type": SortOrder }),
    difficulty: t.field({ "required": false, "type": SortOrder }),
    acRate: t.field({ "required": false, "type": SortOrder }),
    topics: t.field({ "required": false, "type": TopicOnProblemsOrderByRelationAggregateInput }),
    topicTags: t.field({ "required": false, "type": SortOrder }),
    problemAttempts: t.field({ "required": false, "type": ProblemAttemptOrderByRelationAggregateInput }),
  }),
});

export const ProblemWhereUniqueInput = builder.inputRef<Prisma.ProblemWhereUniqueInput>('ProblemWhereUniqueInput').implement({
  fields: (t) => ({
    id: t.int({ "required": false }),
    id_title: t.field({ "required": false, "type": ProblemIdTitleCompoundUniqueInput }),
  }),
});

export const ProblemOrderByWithAggregationInput = builder.inputRef<Prisma.ProblemOrderByWithAggregationInput>('ProblemOrderByWithAggregationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    title: t.field({ "required": false, "type": SortOrder }),
    titleSlug: t.field({ "required": false, "type": SortOrder }),
    difficulty: t.field({ "required": false, "type": SortOrder }),
    acRate: t.field({ "required": false, "type": SortOrder }),
    topicTags: t.field({ "required": false, "type": SortOrder }),
    _count: t.field({ "required": false, "type": ProblemCountOrderByAggregateInput }),
    _avg: t.field({ "required": false, "type": ProblemAvgOrderByAggregateInput }),
    _max: t.field({ "required": false, "type": ProblemMaxOrderByAggregateInput }),
    _min: t.field({ "required": false, "type": ProblemMinOrderByAggregateInput }),
    _sum: t.field({ "required": false, "type": ProblemSumOrderByAggregateInput }),
  }),
});

export const ProblemScalarWhereWithAggregatesInput = builder.inputRef<Prisma.ProblemScalarWhereWithAggregatesInput>('ProblemScalarWhereWithAggregatesInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [ProblemScalarWhereWithAggregatesInput] }),
    OR: t.field({ "required": false, "type": [ProblemScalarWhereWithAggregatesInput] }),
    NOT: t.field({ "required": false, "type": [ProblemScalarWhereWithAggregatesInput] }),
    id: t.field({ "required": false, "type": IntWithAggregatesFilter }),
    frontendId: t.field({ "required": false, "type": IntWithAggregatesFilter }),
    title: t.field({ "required": false, "type": StringWithAggregatesFilter }),
    titleSlug: t.field({ "required": false, "type": StringWithAggregatesFilter }),
    difficulty: t.field({ "required": false, "type": StringWithAggregatesFilter }),
    acRate: t.field({ "required": false, "type": FloatWithAggregatesFilter }),
    topicTags: t.field({ "required": false, "type": JsonNullableWithAggregatesFilter }),
  }),
});

export const TopicWhereInput = builder.inputRef<Prisma.TopicWhereInput>('TopicWhereInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [TopicWhereInput] }),
    OR: t.field({ "required": false, "type": [TopicWhereInput] }),
    NOT: t.field({ "required": false, "type": [TopicWhereInput] }),
    id: t.field({ "required": false, "type": IntFilter }),
    topicSlug: t.field({ "required": false, "type": StringFilter }),
    topicName: t.field({ "required": false, "type": StringFilter }),
    problems: t.field({ "required": false, "type": TopicOnProblemsListRelationFilter }),
  }),
});

export const TopicOrderByWithRelationInput = builder.inputRef<Prisma.TopicOrderByWithRelationInput>('TopicOrderByWithRelationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    topicSlug: t.field({ "required": false, "type": SortOrder }),
    topicName: t.field({ "required": false, "type": SortOrder }),
    problems: t.field({ "required": false, "type": TopicOnProblemsOrderByRelationAggregateInput }),
  }),
});

export const TopicWhereUniqueInput = builder.inputRef<Prisma.TopicWhereUniqueInput>('TopicWhereUniqueInput').implement({
  fields: (t) => ({
    id: t.int({ "required": false }),
    topicSlug: t.string({ "required": false }),
    topicName: t.string({ "required": false }),
    id_topicSlug_topicName: t.field({ "required": false, "type": TopicIdTopicSlugTopicNameCompoundUniqueInput }),
  }),
});

export const TopicOrderByWithAggregationInput = builder.inputRef<Prisma.TopicOrderByWithAggregationInput>('TopicOrderByWithAggregationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    topicSlug: t.field({ "required": false, "type": SortOrder }),
    topicName: t.field({ "required": false, "type": SortOrder }),
    _count: t.field({ "required": false, "type": TopicCountOrderByAggregateInput }),
    _avg: t.field({ "required": false, "type": TopicAvgOrderByAggregateInput }),
    _max: t.field({ "required": false, "type": TopicMaxOrderByAggregateInput }),
    _min: t.field({ "required": false, "type": TopicMinOrderByAggregateInput }),
    _sum: t.field({ "required": false, "type": TopicSumOrderByAggregateInput }),
  }),
});

export const TopicScalarWhereWithAggregatesInput = builder.inputRef<Prisma.TopicScalarWhereWithAggregatesInput>('TopicScalarWhereWithAggregatesInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [TopicScalarWhereWithAggregatesInput] }),
    OR: t.field({ "required": false, "type": [TopicScalarWhereWithAggregatesInput] }),
    NOT: t.field({ "required": false, "type": [TopicScalarWhereWithAggregatesInput] }),
    id: t.field({ "required": false, "type": IntWithAggregatesFilter }),
    topicSlug: t.field({ "required": false, "type": StringWithAggregatesFilter }),
    topicName: t.field({ "required": false, "type": StringWithAggregatesFilter }),
  }),
});

export const TopicOnProblemsWhereInput = builder.inputRef<Prisma.TopicOnProblemsWhereInput>('TopicOnProblemsWhereInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [TopicOnProblemsWhereInput] }),
    OR: t.field({ "required": false, "type": [TopicOnProblemsWhereInput] }),
    NOT: t.field({ "required": false, "type": [TopicOnProblemsWhereInput] }),
    problem: t.field({ "required": false, "type": ProblemWhereInput }),
    topic: t.field({ "required": false, "type": TopicWhereInput }),
    problemId: t.field({ "required": false, "type": IntFilter }),
    topicId: t.field({ "required": false, "type": IntFilter }),
    topicSlug: t.field({ "required": false, "type": StringFilter }),
    topicName: t.field({ "required": false, "type": StringFilter }),
  }),
});

export const TopicOnProblemsOrderByWithRelationInput = builder.inputRef<Prisma.TopicOnProblemsOrderByWithRelationInput>('TopicOnProblemsOrderByWithRelationInput').implement({
  fields: (t) => ({
    problem: t.field({ "required": false, "type": ProblemOrderByWithRelationInput }),
    topic: t.field({ "required": false, "type": TopicOrderByWithRelationInput }),
    problemId: t.field({ "required": false, "type": SortOrder }),
    topicId: t.field({ "required": false, "type": SortOrder }),
    topicSlug: t.field({ "required": false, "type": SortOrder }),
    topicName: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const TopicOnProblemsWhereUniqueInput = builder.inputRef<Prisma.TopicOnProblemsWhereUniqueInput>('TopicOnProblemsWhereUniqueInput').implement({
  fields: (t) => ({
    problemId_topicId: t.field({ "required": false, "type": TopicOnProblemsProblemIdTopicIdCompoundUniqueInput }),
  }),
});

export const TopicOnProblemsOrderByWithAggregationInput = builder.inputRef<Prisma.TopicOnProblemsOrderByWithAggregationInput>('TopicOnProblemsOrderByWithAggregationInput').implement({
  fields: (t) => ({
    problemId: t.field({ "required": false, "type": SortOrder }),
    topicId: t.field({ "required": false, "type": SortOrder }),
    topicSlug: t.field({ "required": false, "type": SortOrder }),
    topicName: t.field({ "required": false, "type": SortOrder }),
    _count: t.field({ "required": false, "type": TopicOnProblemsCountOrderByAggregateInput }),
    _avg: t.field({ "required": false, "type": TopicOnProblemsAvgOrderByAggregateInput }),
    _max: t.field({ "required": false, "type": TopicOnProblemsMaxOrderByAggregateInput }),
    _min: t.field({ "required": false, "type": TopicOnProblemsMinOrderByAggregateInput }),
    _sum: t.field({ "required": false, "type": TopicOnProblemsSumOrderByAggregateInput }),
  }),
});

export const TopicOnProblemsScalarWhereWithAggregatesInput = builder.inputRef<Prisma.TopicOnProblemsScalarWhereWithAggregatesInput>('TopicOnProblemsScalarWhereWithAggregatesInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [TopicOnProblemsScalarWhereWithAggregatesInput] }),
    OR: t.field({ "required": false, "type": [TopicOnProblemsScalarWhereWithAggregatesInput] }),
    NOT: t.field({ "required": false, "type": [TopicOnProblemsScalarWhereWithAggregatesInput] }),
    problemId: t.field({ "required": false, "type": IntWithAggregatesFilter }),
    topicId: t.field({ "required": false, "type": IntWithAggregatesFilter }),
    topicSlug: t.field({ "required": false, "type": StringWithAggregatesFilter }),
    topicName: t.field({ "required": false, "type": StringWithAggregatesFilter }),
  }),
});

export const UserWhereInput = builder.inputRef<Prisma.UserWhereInput>('UserWhereInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [UserWhereInput] }),
    OR: t.field({ "required": false, "type": [UserWhereInput] }),
    NOT: t.field({ "required": false, "type": [UserWhereInput] }),
    id: t.field({ "required": false, "type": StringFilter }),
    registeredAt: t.field({ "required": false, "type": DateTimeFilter }),
    problemAttempts: t.field({ "required": false, "type": ProblemAttemptDetailsListRelationFilter }),
  }),
});

export const UserOrderByWithRelationInput = builder.inputRef<Prisma.UserOrderByWithRelationInput>('UserOrderByWithRelationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    registeredAt: t.field({ "required": false, "type": SortOrder }),
    problemAttempts: t.field({ "required": false, "type": ProblemAttemptDetailsOrderByRelationAggregateInput }),
  }),
});

export const UserWhereUniqueInput = builder.inputRef<Prisma.UserWhereUniqueInput>('UserWhereUniqueInput').implement({
  fields: (t) => ({
    id: t.string({ "required": false }),
  }),
});

export const UserOrderByWithAggregationInput = builder.inputRef<Prisma.UserOrderByWithAggregationInput>('UserOrderByWithAggregationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    registeredAt: t.field({ "required": false, "type": SortOrder }),
    _count: t.field({ "required": false, "type": UserCountOrderByAggregateInput }),
    _max: t.field({ "required": false, "type": UserMaxOrderByAggregateInput }),
    _min: t.field({ "required": false, "type": UserMinOrderByAggregateInput }),
  }),
});

export const UserScalarWhereWithAggregatesInput = builder.inputRef<Prisma.UserScalarWhereWithAggregatesInput>('UserScalarWhereWithAggregatesInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [UserScalarWhereWithAggregatesInput] }),
    OR: t.field({ "required": false, "type": [UserScalarWhereWithAggregatesInput] }),
    NOT: t.field({ "required": false, "type": [UserScalarWhereWithAggregatesInput] }),
    id: t.field({ "required": false, "type": StringWithAggregatesFilter }),
    registeredAt: t.field({ "required": false, "type": DateTimeWithAggregatesFilter }),
  }),
});

export const ProblemAttemptWhereInput = builder.inputRef<Prisma.ProblemAttemptWhereInput>('ProblemAttemptWhereInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [ProblemAttemptWhereInput] }),
    OR: t.field({ "required": false, "type": [ProblemAttemptWhereInput] }),
    NOT: t.field({ "required": false, "type": [ProblemAttemptWhereInput] }),
    id: t.field({ "required": false, "type": IntFilter }),
    createdAt: t.field({ "required": false, "type": DateTimeFilter }),
    frontendId: t.field({ "required": false, "type": IntFilter }),
    problem: t.field({ "required": false, "type": ProblemWhereInput }),
    problemId: t.field({ "required": false, "type": IntFilter }),
    problemAttemptDetail: t.field({ "required": false, "type": ProblemAttemptDetailsWhereInput }),
    attemptDetailId: t.field({ "required": false, "type": IntFilter }),
  }),
});

export const ProblemAttemptOrderByWithRelationInput = builder.inputRef<Prisma.ProblemAttemptOrderByWithRelationInput>('ProblemAttemptOrderByWithRelationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    createdAt: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    problem: t.field({ "required": false, "type": ProblemOrderByWithRelationInput }),
    problemId: t.field({ "required": false, "type": SortOrder }),
    problemAttemptDetail: t.field({ "required": false, "type": ProblemAttemptDetailsOrderByWithRelationInput }),
    attemptDetailId: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAttemptWhereUniqueInput = builder.inputRef<Prisma.ProblemAttemptWhereUniqueInput>('ProblemAttemptWhereUniqueInput').implement({
  fields: (t) => ({
    id: t.int({ "required": false }),
    attemptDetailId: t.int({ "required": false }),
  }),
});

export const ProblemAttemptOrderByWithAggregationInput = builder.inputRef<Prisma.ProblemAttemptOrderByWithAggregationInput>('ProblemAttemptOrderByWithAggregationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    createdAt: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    problemId: t.field({ "required": false, "type": SortOrder }),
    attemptDetailId: t.field({ "required": false, "type": SortOrder }),
    _count: t.field({ "required": false, "type": ProblemAttemptCountOrderByAggregateInput }),
    _avg: t.field({ "required": false, "type": ProblemAttemptAvgOrderByAggregateInput }),
    _max: t.field({ "required": false, "type": ProblemAttemptMaxOrderByAggregateInput }),
    _min: t.field({ "required": false, "type": ProblemAttemptMinOrderByAggregateInput }),
    _sum: t.field({ "required": false, "type": ProblemAttemptSumOrderByAggregateInput }),
  }),
});

export const ProblemAttemptScalarWhereWithAggregatesInput = builder.inputRef<Prisma.ProblemAttemptScalarWhereWithAggregatesInput>('ProblemAttemptScalarWhereWithAggregatesInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [ProblemAttemptScalarWhereWithAggregatesInput] }),
    OR: t.field({ "required": false, "type": [ProblemAttemptScalarWhereWithAggregatesInput] }),
    NOT: t.field({ "required": false, "type": [ProblemAttemptScalarWhereWithAggregatesInput] }),
    id: t.field({ "required": false, "type": IntWithAggregatesFilter }),
    createdAt: t.field({ "required": false, "type": DateTimeWithAggregatesFilter }),
    frontendId: t.field({ "required": false, "type": IntWithAggregatesFilter }),
    problemId: t.field({ "required": false, "type": IntWithAggregatesFilter }),
    attemptDetailId: t.field({ "required": false, "type": IntWithAggregatesFilter }),
  }),
});

export const ProblemAttemptDetailsWhereInput = builder.inputRef<Prisma.ProblemAttemptDetailsWhereInput>('ProblemAttemptDetailsWhereInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [ProblemAttemptDetailsWhereInput] }),
    OR: t.field({ "required": false, "type": [ProblemAttemptDetailsWhereInput] }),
    NOT: t.field({ "required": false, "type": [ProblemAttemptDetailsWhereInput] }),
    id: t.field({ "required": false, "type": IntFilter }),
    user: t.field({ "required": false, "type": UserWhereInput }),
    userId: t.field({ "required": false, "type": StringFilter }),
    ProblemAttempt: t.field({ "required": false, "type": ProblemAttemptWhereInput }),
    status: t.field({ "required": false, "type": StringFilter }),
    createdAt: t.field({ "required": false, "type": DateTimeFilter }),
  }),
});

export const ProblemAttemptDetailsOrderByWithRelationInput = builder.inputRef<Prisma.ProblemAttemptDetailsOrderByWithRelationInput>('ProblemAttemptDetailsOrderByWithRelationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    user: t.field({ "required": false, "type": UserOrderByWithRelationInput }),
    userId: t.field({ "required": false, "type": SortOrder }),
    ProblemAttempt: t.field({ "required": false, "type": ProblemAttemptOrderByWithRelationInput }),
    status: t.field({ "required": false, "type": SortOrder }),
    createdAt: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAttemptDetailsWhereUniqueInput = builder.inputRef<Prisma.ProblemAttemptDetailsWhereUniqueInput>('ProblemAttemptDetailsWhereUniqueInput').implement({
  fields: (t) => ({
    id: t.int({ "required": false }),
  }),
});

export const ProblemAttemptDetailsOrderByWithAggregationInput = builder.inputRef<Prisma.ProblemAttemptDetailsOrderByWithAggregationInput>('ProblemAttemptDetailsOrderByWithAggregationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    userId: t.field({ "required": false, "type": SortOrder }),
    status: t.field({ "required": false, "type": SortOrder }),
    createdAt: t.field({ "required": false, "type": SortOrder }),
    _count: t.field({ "required": false, "type": ProblemAttemptDetailsCountOrderByAggregateInput }),
    _avg: t.field({ "required": false, "type": ProblemAttemptDetailsAvgOrderByAggregateInput }),
    _max: t.field({ "required": false, "type": ProblemAttemptDetailsMaxOrderByAggregateInput }),
    _min: t.field({ "required": false, "type": ProblemAttemptDetailsMinOrderByAggregateInput }),
    _sum: t.field({ "required": false, "type": ProblemAttemptDetailsSumOrderByAggregateInput }),
  }),
});

export const ProblemAttemptDetailsScalarWhereWithAggregatesInput = builder.inputRef<Prisma.ProblemAttemptDetailsScalarWhereWithAggregatesInput>('ProblemAttemptDetailsScalarWhereWithAggregatesInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [ProblemAttemptDetailsScalarWhereWithAggregatesInput] }),
    OR: t.field({ "required": false, "type": [ProblemAttemptDetailsScalarWhereWithAggregatesInput] }),
    NOT: t.field({ "required": false, "type": [ProblemAttemptDetailsScalarWhereWithAggregatesInput] }),
    id: t.field({ "required": false, "type": IntWithAggregatesFilter }),
    userId: t.field({ "required": false, "type": StringWithAggregatesFilter }),
    status: t.field({ "required": false, "type": StringWithAggregatesFilter }),
    createdAt: t.field({ "required": false, "type": DateTimeWithAggregatesFilter }),
  }),
});

export const ProblemCreateInput = builder.inputRef<Prisma.ProblemCreateInput>('ProblemCreateInput').implement({
  fields: (t) => ({
    id: t.int({ "required": true }),
    frontendId: t.int({ "required": true }),
    title: t.string({ "required": true }),
    titleSlug: t.string({ "required": true }),
    difficulty: t.string({ "required": true }),
    acRate: t.float({ "required": true }),
    topics: t.field({ "required": false, "type": TopicOnProblemsCreateNestedManyWithoutProblemInput }),
    topicTags: t.field({ "required": false, "type": Json }),
    problemAttempts: t.field({ "required": false, "type": ProblemAttemptCreateNestedManyWithoutProblemInput }),
  }),
});

export const ProblemUpdateInput = builder.inputRef<Prisma.ProblemUpdateInput>('ProblemUpdateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
    frontendId: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
    title: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    titleSlug: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    difficulty: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    acRate: t.field({ "required": false, "type": FloatFieldUpdateOperationsInput }),
    topics: t.field({ "required": false, "type": TopicOnProblemsUpdateManyWithoutProblemNestedInput }),
    topicTags: t.field({ "required": false, "type": Json }),
    problemAttempts: t.field({ "required": false, "type": ProblemAttemptUpdateManyWithoutProblemNestedInput }),
  }),
});

export const ProblemCreateManyInput = builder.inputRef<Prisma.ProblemCreateManyInput>('ProblemCreateManyInput').implement({
  fields: (t) => ({
    id: t.int({ "required": true }),
    frontendId: t.int({ "required": true }),
    title: t.string({ "required": true }),
    titleSlug: t.string({ "required": true }),
    difficulty: t.string({ "required": true }),
    acRate: t.float({ "required": true }),
    topicTags: t.field({ "required": false, "type": Json }),
  }),
});

export const ProblemUpdateManyMutationInput = builder.inputRef<Prisma.ProblemUpdateManyMutationInput>('ProblemUpdateManyMutationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
    frontendId: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
    title: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    titleSlug: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    difficulty: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    acRate: t.field({ "required": false, "type": FloatFieldUpdateOperationsInput }),
    topicTags: t.field({ "required": false, "type": Json }),
  }),
});

export const TopicCreateInput = builder.inputRef<Prisma.TopicCreateInput>('TopicCreateInput').implement({
  fields: (t) => ({
    topicSlug: t.string({ "required": true }),
    topicName: t.string({ "required": true }),
    problems: t.field({ "required": false, "type": TopicOnProblemsCreateNestedManyWithoutTopicInput }),
  }),
});

export const TopicUpdateInput = builder.inputRef<Prisma.TopicUpdateInput>('TopicUpdateInput').implement({
  fields: (t) => ({
    topicSlug: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    topicName: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    problems: t.field({ "required": false, "type": TopicOnProblemsUpdateManyWithoutTopicNestedInput }),
  }),
});

export const TopicCreateManyInput = builder.inputRef<Prisma.TopicCreateManyInput>('TopicCreateManyInput').implement({
  fields: (t) => ({
    id: t.int({ "required": false }),
    topicSlug: t.string({ "required": true }),
    topicName: t.string({ "required": true }),
  }),
});

export const TopicUpdateManyMutationInput = builder.inputRef<Prisma.TopicUpdateManyMutationInput>('TopicUpdateManyMutationInput').implement({
  fields: (t) => ({
    topicSlug: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    topicName: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
  }),
});

export const TopicOnProblemsCreateInput = builder.inputRef<Prisma.TopicOnProblemsCreateInput>('TopicOnProblemsCreateInput').implement({
  fields: (t) => ({
    problem: t.field({ "required": true, "type": ProblemCreateNestedOneWithoutTopicsInput }),
    topic: t.field({ "required": true, "type": TopicCreateNestedOneWithoutProblemsInput }),
  }),
});

export const TopicOnProblemsUpdateInput = builder.inputRef<Prisma.TopicOnProblemsUpdateInput>('TopicOnProblemsUpdateInput').implement({
  fields: (t) => ({
    problem: t.field({ "required": false, "type": ProblemUpdateOneRequiredWithoutTopicsNestedInput }),
    topic: t.field({ "required": false, "type": TopicUpdateOneRequiredWithoutProblemsNestedInput }),
  }),
});

export const TopicOnProblemsCreateManyInput = builder.inputRef<Prisma.TopicOnProblemsCreateManyInput>('TopicOnProblemsCreateManyInput').implement({
  fields: (t) => ({
    problemId: t.int({ "required": true }),
    topicId: t.int({ "required": true }),
    topicSlug: t.string({ "required": true }),
    topicName: t.string({ "required": true }),
  }),
});

export const TopicOnProblemsUpdateManyMutationInput = builder.inputRef<Prisma.TopicOnProblemsUpdateManyMutationInput>('TopicOnProblemsUpdateManyMutationInput').implement({
  fields: (t) => ({
    _: t.field({ type: NEVER }),
  }),
});

export const UserCreateInput = builder.inputRef<Prisma.UserCreateInput>('UserCreateInput').implement({
  fields: (t) => ({
    id: t.string({ "required": false }),
    registeredAt: t.field({ "required": false, "type": DateTime }),
    problemAttempts: t.field({ "required": false, "type": ProblemAttemptDetailsCreateNestedManyWithoutUserInput }),
  }),
});

export const UserUpdateInput = builder.inputRef<Prisma.UserUpdateInput>('UserUpdateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    registeredAt: t.field({ "required": false, "type": DateTimeFieldUpdateOperationsInput }),
    problemAttempts: t.field({ "required": false, "type": ProblemAttemptDetailsUpdateManyWithoutUserNestedInput }),
  }),
});

export const UserCreateManyInput = builder.inputRef<Prisma.UserCreateManyInput>('UserCreateManyInput').implement({
  fields: (t) => ({
    id: t.string({ "required": false }),
    registeredAt: t.field({ "required": false, "type": DateTime }),
  }),
});

export const UserUpdateManyMutationInput = builder.inputRef<Prisma.UserUpdateManyMutationInput>('UserUpdateManyMutationInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    registeredAt: t.field({ "required": false, "type": DateTimeFieldUpdateOperationsInput }),
  }),
});

export const ProblemAttemptCreateInput = builder.inputRef<Prisma.ProblemAttemptCreateInput>('ProblemAttemptCreateInput').implement({
  fields: (t) => ({
    createdAt: t.field({ "required": false, "type": DateTime }),
    frontendId: t.int({ "required": false }),
    problem: t.field({ "required": true, "type": ProblemCreateNestedOneWithoutProblemAttemptsInput }),
    problemAttemptDetail: t.field({ "required": true, "type": ProblemAttemptDetailsCreateNestedOneWithoutProblemAttemptInput }),
  }),
});

export const ProblemAttemptUpdateInput = builder.inputRef<Prisma.ProblemAttemptUpdateInput>('ProblemAttemptUpdateInput').implement({
  fields: (t) => ({
    createdAt: t.field({ "required": false, "type": DateTimeFieldUpdateOperationsInput }),
    frontendId: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
    problem: t.field({ "required": false, "type": ProblemUpdateOneRequiredWithoutProblemAttemptsNestedInput }),
    problemAttemptDetail: t.field({ "required": false, "type": ProblemAttemptDetailsUpdateOneRequiredWithoutProblemAttemptNestedInput }),
  }),
});

export const ProblemAttemptCreateManyInput = builder.inputRef<Prisma.ProblemAttemptCreateManyInput>('ProblemAttemptCreateManyInput').implement({
  fields: (t) => ({
    id: t.int({ "required": false }),
    createdAt: t.field({ "required": false, "type": DateTime }),
    frontendId: t.int({ "required": false }),
    problemId: t.int({ "required": true }),
    attemptDetailId: t.int({ "required": true }),
  }),
});

export const ProblemAttemptUpdateManyMutationInput = builder.inputRef<Prisma.ProblemAttemptUpdateManyMutationInput>('ProblemAttemptUpdateManyMutationInput').implement({
  fields: (t) => ({
    createdAt: t.field({ "required": false, "type": DateTimeFieldUpdateOperationsInput }),
    frontendId: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
  }),
});

export const ProblemAttemptDetailsCreateInput = builder.inputRef<Prisma.ProblemAttemptDetailsCreateInput>('ProblemAttemptDetailsCreateInput').implement({
  fields: (t) => ({
    user: t.field({ "required": true, "type": UserCreateNestedOneWithoutProblemAttemptsInput }),
    ProblemAttempt: t.field({ "required": false, "type": ProblemAttemptCreateNestedOneWithoutProblemAttemptDetailInput }),
    status: t.string({ "required": true }),
    createdAt: t.field({ "required": false, "type": DateTime }),
  }),
});

export const ProblemAttemptDetailsUpdateInput = builder.inputRef<Prisma.ProblemAttemptDetailsUpdateInput>('ProblemAttemptDetailsUpdateInput').implement({
  fields: (t) => ({
    user: t.field({ "required": false, "type": UserUpdateOneRequiredWithoutProblemAttemptsNestedInput }),
    ProblemAttempt: t.field({ "required": false, "type": ProblemAttemptUpdateOneWithoutProblemAttemptDetailNestedInput }),
    status: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    createdAt: t.field({ "required": false, "type": DateTimeFieldUpdateOperationsInput }),
  }),
});

export const ProblemAttemptDetailsCreateManyInput = builder.inputRef<Prisma.ProblemAttemptDetailsCreateManyInput>('ProblemAttemptDetailsCreateManyInput').implement({
  fields: (t) => ({
    id: t.int({ "required": false }),
    userId: t.string({ "required": true }),
    status: t.string({ "required": true }),
    createdAt: t.field({ "required": false, "type": DateTime }),
  }),
});

export const ProblemAttemptDetailsUpdateManyMutationInput = builder.inputRef<Prisma.ProblemAttemptDetailsUpdateManyMutationInput>('ProblemAttemptDetailsUpdateManyMutationInput').implement({
  fields: (t) => ({
    status: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    createdAt: t.field({ "required": false, "type": DateTimeFieldUpdateOperationsInput }),
  }),
});

export const IntFilter = builder.inputRef<Prisma.IntFilter>('IntFilter').implement({
  fields: (t) => ({
    equals: t.int({ "required": false }),
    in: t.intList({ "required": false }),
    notIn: t.intList({ "required": false }),
    lt: t.int({ "required": false }),
    lte: t.int({ "required": false }),
    gt: t.int({ "required": false }),
    gte: t.int({ "required": false }),
    not: t.field({ "required": false, "type": NestedIntFilter }),
  }),
});

export const StringFilter = builder.inputRef<Prisma.StringFilter>('StringFilter').implement({
  fields: (t) => ({
    equals: t.string({ "required": false }),
    in: t.stringList({ "required": false }),
    notIn: t.stringList({ "required": false }),
    lt: t.string({ "required": false }),
    lte: t.string({ "required": false }),
    gt: t.string({ "required": false }),
    gte: t.string({ "required": false }),
    contains: t.string({ "required": false }),
    startsWith: t.string({ "required": false }),
    endsWith: t.string({ "required": false }),
    mode: t.field({ "required": false, "type": QueryMode }),
    not: t.field({ "required": false, "type": NestedStringFilter }),
  }),
});

export const FloatFilter = builder.inputRef<Prisma.FloatFilter>('FloatFilter').implement({
  fields: (t) => ({
    equals: t.float({ "required": false }),
    in: t.floatList({ "required": false }),
    notIn: t.floatList({ "required": false }),
    lt: t.float({ "required": false }),
    lte: t.float({ "required": false }),
    gt: t.float({ "required": false }),
    gte: t.float({ "required": false }),
    not: t.field({ "required": false, "type": NestedFloatFilter }),
  }),
});

export const TopicOnProblemsListRelationFilter = builder.inputRef<Prisma.TopicOnProblemsListRelationFilter>('TopicOnProblemsListRelationFilter').implement({
  fields: (t) => ({
    every: t.field({ "required": false, "type": TopicOnProblemsWhereInput }),
    some: t.field({ "required": false, "type": TopicOnProblemsWhereInput }),
    none: t.field({ "required": false, "type": TopicOnProblemsWhereInput }),
  }),
});

export const JsonNullableFilter = builder.inputRef<Prisma.JsonNullableFilter>('JsonNullableFilter').implement({
  fields: (t) => ({
    equals: t.field({ "required": false, "type": Json }),
    path: t.stringList({ "required": false }),
    string_contains: t.string({ "required": false }),
    string_starts_with: t.string({ "required": false }),
    string_ends_with: t.string({ "required": false }),
    array_contains: t.field({ "required": false, "type": Json }),
    array_starts_with: t.field({ "required": false, "type": Json }),
    array_ends_with: t.field({ "required": false, "type": Json }),
    lt: t.field({ "required": false, "type": Json }),
    lte: t.field({ "required": false, "type": Json }),
    gt: t.field({ "required": false, "type": Json }),
    gte: t.field({ "required": false, "type": Json }),
    not: t.field({ "required": false, "type": Json }),
  }),
});

export const ProblemAttemptListRelationFilter = builder.inputRef<Prisma.ProblemAttemptListRelationFilter>('ProblemAttemptListRelationFilter').implement({
  fields: (t) => ({
    every: t.field({ "required": false, "type": ProblemAttemptWhereInput }),
    some: t.field({ "required": false, "type": ProblemAttemptWhereInput }),
    none: t.field({ "required": false, "type": ProblemAttemptWhereInput }),
  }),
});

export const TopicOnProblemsOrderByRelationAggregateInput = builder.inputRef<Prisma.TopicOnProblemsOrderByRelationAggregateInput>('TopicOnProblemsOrderByRelationAggregateInput').implement({
  fields: (t) => ({
    _count: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAttemptOrderByRelationAggregateInput = builder.inputRef<Prisma.ProblemAttemptOrderByRelationAggregateInput>('ProblemAttemptOrderByRelationAggregateInput').implement({
  fields: (t) => ({
    _count: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemIdTitleCompoundUniqueInput = builder.inputRef<Prisma.ProblemIdTitleCompoundUniqueInput>('ProblemIdTitleCompoundUniqueInput').implement({
  fields: (t) => ({
    id: t.int({ "required": true }),
    title: t.string({ "required": true }),
  }),
});

export const ProblemCountOrderByAggregateInput = builder.inputRef<Prisma.ProblemCountOrderByAggregateInput>('ProblemCountOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    title: t.field({ "required": false, "type": SortOrder }),
    titleSlug: t.field({ "required": false, "type": SortOrder }),
    difficulty: t.field({ "required": false, "type": SortOrder }),
    acRate: t.field({ "required": false, "type": SortOrder }),
    topicTags: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAvgOrderByAggregateInput = builder.inputRef<Prisma.ProblemAvgOrderByAggregateInput>('ProblemAvgOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    acRate: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemMaxOrderByAggregateInput = builder.inputRef<Prisma.ProblemMaxOrderByAggregateInput>('ProblemMaxOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    title: t.field({ "required": false, "type": SortOrder }),
    titleSlug: t.field({ "required": false, "type": SortOrder }),
    difficulty: t.field({ "required": false, "type": SortOrder }),
    acRate: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemMinOrderByAggregateInput = builder.inputRef<Prisma.ProblemMinOrderByAggregateInput>('ProblemMinOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    title: t.field({ "required": false, "type": SortOrder }),
    titleSlug: t.field({ "required": false, "type": SortOrder }),
    difficulty: t.field({ "required": false, "type": SortOrder }),
    acRate: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemSumOrderByAggregateInput = builder.inputRef<Prisma.ProblemSumOrderByAggregateInput>('ProblemSumOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    acRate: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const IntWithAggregatesFilter = builder.inputRef<Prisma.IntWithAggregatesFilter>('IntWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.int({ "required": false }),
    in: t.intList({ "required": false }),
    notIn: t.intList({ "required": false }),
    lt: t.int({ "required": false }),
    lte: t.int({ "required": false }),
    gt: t.int({ "required": false }),
    gte: t.int({ "required": false }),
    not: t.field({ "required": false, "type": NestedIntWithAggregatesFilter }),
    _count: t.field({ "required": false, "type": NestedIntFilter }),
    _avg: t.field({ "required": false, "type": NestedFloatFilter }),
    _sum: t.field({ "required": false, "type": NestedIntFilter }),
    _min: t.field({ "required": false, "type": NestedIntFilter }),
    _max: t.field({ "required": false, "type": NestedIntFilter }),
  }),
});

export const StringWithAggregatesFilter = builder.inputRef<Prisma.StringWithAggregatesFilter>('StringWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({ "required": false }),
    in: t.stringList({ "required": false }),
    notIn: t.stringList({ "required": false }),
    lt: t.string({ "required": false }),
    lte: t.string({ "required": false }),
    gt: t.string({ "required": false }),
    gte: t.string({ "required": false }),
    contains: t.string({ "required": false }),
    startsWith: t.string({ "required": false }),
    endsWith: t.string({ "required": false }),
    mode: t.field({ "required": false, "type": QueryMode }),
    not: t.field({ "required": false, "type": NestedStringWithAggregatesFilter }),
    _count: t.field({ "required": false, "type": NestedIntFilter }),
    _min: t.field({ "required": false, "type": NestedStringFilter }),
    _max: t.field({ "required": false, "type": NestedStringFilter }),
  }),
});

export const FloatWithAggregatesFilter = builder.inputRef<Prisma.FloatWithAggregatesFilter>('FloatWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.float({ "required": false }),
    in: t.floatList({ "required": false }),
    notIn: t.floatList({ "required": false }),
    lt: t.float({ "required": false }),
    lte: t.float({ "required": false }),
    gt: t.float({ "required": false }),
    gte: t.float({ "required": false }),
    not: t.field({ "required": false, "type": NestedFloatWithAggregatesFilter }),
    _count: t.field({ "required": false, "type": NestedIntFilter }),
    _avg: t.field({ "required": false, "type": NestedFloatFilter }),
    _sum: t.field({ "required": false, "type": NestedFloatFilter }),
    _min: t.field({ "required": false, "type": NestedFloatFilter }),
    _max: t.field({ "required": false, "type": NestedFloatFilter }),
  }),
});

export const JsonNullableWithAggregatesFilter = builder.inputRef<Prisma.JsonNullableWithAggregatesFilter>('JsonNullableWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.field({ "required": false, "type": Json }),
    path: t.stringList({ "required": false }),
    string_contains: t.string({ "required": false }),
    string_starts_with: t.string({ "required": false }),
    string_ends_with: t.string({ "required": false }),
    array_contains: t.field({ "required": false, "type": Json }),
    array_starts_with: t.field({ "required": false, "type": Json }),
    array_ends_with: t.field({ "required": false, "type": Json }),
    lt: t.field({ "required": false, "type": Json }),
    lte: t.field({ "required": false, "type": Json }),
    gt: t.field({ "required": false, "type": Json }),
    gte: t.field({ "required": false, "type": Json }),
    not: t.field({ "required": false, "type": Json }),
    _count: t.field({ "required": false, "type": NestedIntNullableFilter }),
    _min: t.field({ "required": false, "type": NestedJsonNullableFilter }),
    _max: t.field({ "required": false, "type": NestedJsonNullableFilter }),
  }),
});

export const TopicIdTopicSlugTopicNameCompoundUniqueInput = builder.inputRef<Prisma.TopicIdTopicSlugTopicNameCompoundUniqueInput>('TopicIdTopicSlugTopicNameCompoundUniqueInput').implement({
  fields: (t) => ({
    id: t.int({ "required": true }),
    topicSlug: t.string({ "required": true }),
    topicName: t.string({ "required": true }),
  }),
});

export const TopicCountOrderByAggregateInput = builder.inputRef<Prisma.TopicCountOrderByAggregateInput>('TopicCountOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    topicSlug: t.field({ "required": false, "type": SortOrder }),
    topicName: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const TopicAvgOrderByAggregateInput = builder.inputRef<Prisma.TopicAvgOrderByAggregateInput>('TopicAvgOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const TopicMaxOrderByAggregateInput = builder.inputRef<Prisma.TopicMaxOrderByAggregateInput>('TopicMaxOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    topicSlug: t.field({ "required": false, "type": SortOrder }),
    topicName: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const TopicMinOrderByAggregateInput = builder.inputRef<Prisma.TopicMinOrderByAggregateInput>('TopicMinOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    topicSlug: t.field({ "required": false, "type": SortOrder }),
    topicName: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const TopicSumOrderByAggregateInput = builder.inputRef<Prisma.TopicSumOrderByAggregateInput>('TopicSumOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemRelationFilter = builder.inputRef<Prisma.ProblemRelationFilter>('ProblemRelationFilter').implement({
  fields: (t) => ({
    is: t.field({ "required": false, "type": ProblemWhereInput }),
    isNot: t.field({ "required": false, "type": ProblemWhereInput }),
  }),
});

export const TopicRelationFilter = builder.inputRef<Prisma.TopicRelationFilter>('TopicRelationFilter').implement({
  fields: (t) => ({
    is: t.field({ "required": false, "type": TopicWhereInput }),
    isNot: t.field({ "required": false, "type": TopicWhereInput }),
  }),
});

export const TopicOnProblemsProblemIdTopicIdCompoundUniqueInput = builder.inputRef<Prisma.TopicOnProblemsProblemIdTopicIdCompoundUniqueInput>('TopicOnProblemsProblemIdTopicIdCompoundUniqueInput').implement({
  fields: (t) => ({
    problemId: t.int({ "required": true }),
    topicId: t.int({ "required": true }),
  }),
});

export const TopicOnProblemsCountOrderByAggregateInput = builder.inputRef<Prisma.TopicOnProblemsCountOrderByAggregateInput>('TopicOnProblemsCountOrderByAggregateInput').implement({
  fields: (t) => ({
    problemId: t.field({ "required": false, "type": SortOrder }),
    topicId: t.field({ "required": false, "type": SortOrder }),
    topicSlug: t.field({ "required": false, "type": SortOrder }),
    topicName: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const TopicOnProblemsAvgOrderByAggregateInput = builder.inputRef<Prisma.TopicOnProblemsAvgOrderByAggregateInput>('TopicOnProblemsAvgOrderByAggregateInput').implement({
  fields: (t) => ({
    problemId: t.field({ "required": false, "type": SortOrder }),
    topicId: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const TopicOnProblemsMaxOrderByAggregateInput = builder.inputRef<Prisma.TopicOnProblemsMaxOrderByAggregateInput>('TopicOnProblemsMaxOrderByAggregateInput').implement({
  fields: (t) => ({
    problemId: t.field({ "required": false, "type": SortOrder }),
    topicId: t.field({ "required": false, "type": SortOrder }),
    topicSlug: t.field({ "required": false, "type": SortOrder }),
    topicName: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const TopicOnProblemsMinOrderByAggregateInput = builder.inputRef<Prisma.TopicOnProblemsMinOrderByAggregateInput>('TopicOnProblemsMinOrderByAggregateInput').implement({
  fields: (t) => ({
    problemId: t.field({ "required": false, "type": SortOrder }),
    topicId: t.field({ "required": false, "type": SortOrder }),
    topicSlug: t.field({ "required": false, "type": SortOrder }),
    topicName: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const TopicOnProblemsSumOrderByAggregateInput = builder.inputRef<Prisma.TopicOnProblemsSumOrderByAggregateInput>('TopicOnProblemsSumOrderByAggregateInput').implement({
  fields: (t) => ({
    problemId: t.field({ "required": false, "type": SortOrder }),
    topicId: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const DateTimeFilter = builder.inputRef<Prisma.DateTimeFilter>('DateTimeFilter').implement({
  fields: (t) => ({
    equals: t.field({ "required": false, "type": DateTime }),
    in: t.field({ "required": false, "type": [DateTime] }),
    notIn: t.field({ "required": false, "type": [DateTime] }),
    lt: t.field({ "required": false, "type": DateTime }),
    lte: t.field({ "required": false, "type": DateTime }),
    gt: t.field({ "required": false, "type": DateTime }),
    gte: t.field({ "required": false, "type": DateTime }),
    not: t.field({ "required": false, "type": NestedDateTimeFilter }),
  }),
});

export const ProblemAttemptDetailsListRelationFilter = builder.inputRef<Prisma.ProblemAttemptDetailsListRelationFilter>('ProblemAttemptDetailsListRelationFilter').implement({
  fields: (t) => ({
    every: t.field({ "required": false, "type": ProblemAttemptDetailsWhereInput }),
    some: t.field({ "required": false, "type": ProblemAttemptDetailsWhereInput }),
    none: t.field({ "required": false, "type": ProblemAttemptDetailsWhereInput }),
  }),
});

export const ProblemAttemptDetailsOrderByRelationAggregateInput = builder.inputRef<Prisma.ProblemAttemptDetailsOrderByRelationAggregateInput>('ProblemAttemptDetailsOrderByRelationAggregateInput').implement({
  fields: (t) => ({
    _count: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const UserCountOrderByAggregateInput = builder.inputRef<Prisma.UserCountOrderByAggregateInput>('UserCountOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    registeredAt: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const UserMaxOrderByAggregateInput = builder.inputRef<Prisma.UserMaxOrderByAggregateInput>('UserMaxOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    registeredAt: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const UserMinOrderByAggregateInput = builder.inputRef<Prisma.UserMinOrderByAggregateInput>('UserMinOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    registeredAt: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const DateTimeWithAggregatesFilter = builder.inputRef<Prisma.DateTimeWithAggregatesFilter>('DateTimeWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.field({ "required": false, "type": DateTime }),
    in: t.field({ "required": false, "type": [DateTime] }),
    notIn: t.field({ "required": false, "type": [DateTime] }),
    lt: t.field({ "required": false, "type": DateTime }),
    lte: t.field({ "required": false, "type": DateTime }),
    gt: t.field({ "required": false, "type": DateTime }),
    gte: t.field({ "required": false, "type": DateTime }),
    not: t.field({ "required": false, "type": NestedDateTimeWithAggregatesFilter }),
    _count: t.field({ "required": false, "type": NestedIntFilter }),
    _min: t.field({ "required": false, "type": NestedDateTimeFilter }),
    _max: t.field({ "required": false, "type": NestedDateTimeFilter }),
  }),
});

export const ProblemAttemptDetailsRelationFilter = builder.inputRef<Prisma.ProblemAttemptDetailsRelationFilter>('ProblemAttemptDetailsRelationFilter').implement({
  fields: (t) => ({
    is: t.field({ "required": false, "type": ProblemAttemptDetailsWhereInput }),
    isNot: t.field({ "required": false, "type": ProblemAttemptDetailsWhereInput }),
  }),
});

export const ProblemAttemptCountOrderByAggregateInput = builder.inputRef<Prisma.ProblemAttemptCountOrderByAggregateInput>('ProblemAttemptCountOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    createdAt: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    problemId: t.field({ "required": false, "type": SortOrder }),
    attemptDetailId: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAttemptAvgOrderByAggregateInput = builder.inputRef<Prisma.ProblemAttemptAvgOrderByAggregateInput>('ProblemAttemptAvgOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    problemId: t.field({ "required": false, "type": SortOrder }),
    attemptDetailId: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAttemptMaxOrderByAggregateInput = builder.inputRef<Prisma.ProblemAttemptMaxOrderByAggregateInput>('ProblemAttemptMaxOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    createdAt: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    problemId: t.field({ "required": false, "type": SortOrder }),
    attemptDetailId: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAttemptMinOrderByAggregateInput = builder.inputRef<Prisma.ProblemAttemptMinOrderByAggregateInput>('ProblemAttemptMinOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    createdAt: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    problemId: t.field({ "required": false, "type": SortOrder }),
    attemptDetailId: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAttemptSumOrderByAggregateInput = builder.inputRef<Prisma.ProblemAttemptSumOrderByAggregateInput>('ProblemAttemptSumOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    frontendId: t.field({ "required": false, "type": SortOrder }),
    problemId: t.field({ "required": false, "type": SortOrder }),
    attemptDetailId: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const UserRelationFilter = builder.inputRef<Prisma.UserRelationFilter>('UserRelationFilter').implement({
  fields: (t) => ({
    is: t.field({ "required": false, "type": UserWhereInput }),
    isNot: t.field({ "required": false, "type": UserWhereInput }),
  }),
});

export const ProblemAttemptRelationFilter = builder.inputRef<Prisma.ProblemAttemptRelationFilter>('ProblemAttemptRelationFilter').implement({
  fields: (t) => ({
    is: t.field({ "required": false, "type": ProblemAttemptWhereInput }),
    isNot: t.field({ "required": false, "type": ProblemAttemptWhereInput }),
  }),
});

export const ProblemAttemptDetailsCountOrderByAggregateInput = builder.inputRef<Prisma.ProblemAttemptDetailsCountOrderByAggregateInput>('ProblemAttemptDetailsCountOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    userId: t.field({ "required": false, "type": SortOrder }),
    status: t.field({ "required": false, "type": SortOrder }),
    createdAt: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAttemptDetailsAvgOrderByAggregateInput = builder.inputRef<Prisma.ProblemAttemptDetailsAvgOrderByAggregateInput>('ProblemAttemptDetailsAvgOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAttemptDetailsMaxOrderByAggregateInput = builder.inputRef<Prisma.ProblemAttemptDetailsMaxOrderByAggregateInput>('ProblemAttemptDetailsMaxOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    userId: t.field({ "required": false, "type": SortOrder }),
    status: t.field({ "required": false, "type": SortOrder }),
    createdAt: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAttemptDetailsMinOrderByAggregateInput = builder.inputRef<Prisma.ProblemAttemptDetailsMinOrderByAggregateInput>('ProblemAttemptDetailsMinOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
    userId: t.field({ "required": false, "type": SortOrder }),
    status: t.field({ "required": false, "type": SortOrder }),
    createdAt: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const ProblemAttemptDetailsSumOrderByAggregateInput = builder.inputRef<Prisma.ProblemAttemptDetailsSumOrderByAggregateInput>('ProblemAttemptDetailsSumOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": SortOrder }),
  }),
});

export const TopicOnProblemsCreateNestedManyWithoutProblemInput = builder.inputRef<Prisma.TopicOnProblemsCreateNestedManyWithoutProblemInput>('TopicOnProblemsCreateNestedManyWithoutProblemInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": TopicOnProblemsCreateWithoutProblemInput }),
    connectOrCreate: t.field({ "required": false, "type": [TopicOnProblemsCreateOrConnectWithoutProblemInput] }),
    createMany: t.field({ "required": false, "type": TopicOnProblemsCreateManyProblemInputEnvelope }),
    connect: t.field({ "required": false, "type": [TopicOnProblemsWhereUniqueInput] }),
  }),
});

export const ProblemAttemptCreateNestedManyWithoutProblemInput = builder.inputRef<Prisma.ProblemAttemptCreateNestedManyWithoutProblemInput>('ProblemAttemptCreateNestedManyWithoutProblemInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemAttemptCreateWithoutProblemInput }),
    connectOrCreate: t.field({ "required": false, "type": [ProblemAttemptCreateOrConnectWithoutProblemInput] }),
    createMany: t.field({ "required": false, "type": ProblemAttemptCreateManyProblemInputEnvelope }),
    connect: t.field({ "required": false, "type": [ProblemAttemptWhereUniqueInput] }),
  }),
});

export const IntFieldUpdateOperationsInput = builder.inputRef<Prisma.IntFieldUpdateOperationsInput>('IntFieldUpdateOperationsInput').implement({
  fields: (t) => ({
    set: t.int({ "required": false }),
    increment: t.int({ "required": false }),
    decrement: t.int({ "required": false }),
    multiply: t.int({ "required": false }),
    divide: t.int({ "required": false }),
  }),
});

export const StringFieldUpdateOperationsInput = builder.inputRef<Prisma.StringFieldUpdateOperationsInput>('StringFieldUpdateOperationsInput').implement({
  fields: (t) => ({
    set: t.string({ "required": false }),
  }),
});

export const FloatFieldUpdateOperationsInput = builder.inputRef<Prisma.FloatFieldUpdateOperationsInput>('FloatFieldUpdateOperationsInput').implement({
  fields: (t) => ({
    set: t.float({ "required": false }),
    increment: t.float({ "required": false }),
    decrement: t.float({ "required": false }),
    multiply: t.float({ "required": false }),
    divide: t.float({ "required": false }),
  }),
});

export const TopicOnProblemsUpdateManyWithoutProblemNestedInput = builder.inputRef<Prisma.TopicOnProblemsUpdateManyWithoutProblemNestedInput>('TopicOnProblemsUpdateManyWithoutProblemNestedInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": TopicOnProblemsCreateWithoutProblemInput }),
    connectOrCreate: t.field({ "required": false, "type": [TopicOnProblemsCreateOrConnectWithoutProblemInput] }),
    upsert: t.field({ "required": false, "type": [TopicOnProblemsUpsertWithWhereUniqueWithoutProblemInput] }),
    createMany: t.field({ "required": false, "type": TopicOnProblemsCreateManyProblemInputEnvelope }),
    set: t.field({ "required": false, "type": [TopicOnProblemsWhereUniqueInput] }),
    disconnect: t.field({ "required": false, "type": [TopicOnProblemsWhereUniqueInput] }),
    delete: t.field({ "required": false, "type": [TopicOnProblemsWhereUniqueInput] }),
    connect: t.field({ "required": false, "type": [TopicOnProblemsWhereUniqueInput] }),
    update: t.field({ "required": false, "type": [TopicOnProblemsUpdateWithWhereUniqueWithoutProblemInput] }),
    updateMany: t.field({ "required": false, "type": [TopicOnProblemsUpdateManyWithWhereWithoutProblemInput] }),
    deleteMany: t.field({ "required": false, "type": [TopicOnProblemsScalarWhereInput] }),
  }),
});

export const ProblemAttemptUpdateManyWithoutProblemNestedInput = builder.inputRef<Prisma.ProblemAttemptUpdateManyWithoutProblemNestedInput>('ProblemAttemptUpdateManyWithoutProblemNestedInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemAttemptCreateWithoutProblemInput }),
    connectOrCreate: t.field({ "required": false, "type": [ProblemAttemptCreateOrConnectWithoutProblemInput] }),
    upsert: t.field({ "required": false, "type": [ProblemAttemptUpsertWithWhereUniqueWithoutProblemInput] }),
    createMany: t.field({ "required": false, "type": ProblemAttemptCreateManyProblemInputEnvelope }),
    set: t.field({ "required": false, "type": [ProblemAttemptWhereUniqueInput] }),
    disconnect: t.field({ "required": false, "type": [ProblemAttemptWhereUniqueInput] }),
    delete: t.field({ "required": false, "type": [ProblemAttemptWhereUniqueInput] }),
    connect: t.field({ "required": false, "type": [ProblemAttemptWhereUniqueInput] }),
    update: t.field({ "required": false, "type": [ProblemAttemptUpdateWithWhereUniqueWithoutProblemInput] }),
    updateMany: t.field({ "required": false, "type": [ProblemAttemptUpdateManyWithWhereWithoutProblemInput] }),
    deleteMany: t.field({ "required": false, "type": [ProblemAttemptScalarWhereInput] }),
  }),
});

export const TopicOnProblemsCreateNestedManyWithoutTopicInput = builder.inputRef<Prisma.TopicOnProblemsCreateNestedManyWithoutTopicInput>('TopicOnProblemsCreateNestedManyWithoutTopicInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": TopicOnProblemsCreateWithoutTopicInput }),
    connectOrCreate: t.field({ "required": false, "type": [TopicOnProblemsCreateOrConnectWithoutTopicInput] }),
    createMany: t.field({ "required": false, "type": TopicOnProblemsCreateManyTopicInputEnvelope }),
    connect: t.field({ "required": false, "type": [TopicOnProblemsWhereUniqueInput] }),
  }),
});

export const TopicOnProblemsUpdateManyWithoutTopicNestedInput = builder.inputRef<Prisma.TopicOnProblemsUpdateManyWithoutTopicNestedInput>('TopicOnProblemsUpdateManyWithoutTopicNestedInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": TopicOnProblemsCreateWithoutTopicInput }),
    connectOrCreate: t.field({ "required": false, "type": [TopicOnProblemsCreateOrConnectWithoutTopicInput] }),
    upsert: t.field({ "required": false, "type": [TopicOnProblemsUpsertWithWhereUniqueWithoutTopicInput] }),
    createMany: t.field({ "required": false, "type": TopicOnProblemsCreateManyTopicInputEnvelope }),
    set: t.field({ "required": false, "type": [TopicOnProblemsWhereUniqueInput] }),
    disconnect: t.field({ "required": false, "type": [TopicOnProblemsWhereUniqueInput] }),
    delete: t.field({ "required": false, "type": [TopicOnProblemsWhereUniqueInput] }),
    connect: t.field({ "required": false, "type": [TopicOnProblemsWhereUniqueInput] }),
    update: t.field({ "required": false, "type": [TopicOnProblemsUpdateWithWhereUniqueWithoutTopicInput] }),
    updateMany: t.field({ "required": false, "type": [TopicOnProblemsUpdateManyWithWhereWithoutTopicInput] }),
    deleteMany: t.field({ "required": false, "type": [TopicOnProblemsScalarWhereInput] }),
  }),
});

export const ProblemCreateNestedOneWithoutTopicsInput = builder.inputRef<Prisma.ProblemCreateNestedOneWithoutTopicsInput>('ProblemCreateNestedOneWithoutTopicsInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemCreateWithoutTopicsInput }),
    connectOrCreate: t.field({ "required": false, "type": ProblemCreateOrConnectWithoutTopicsInput }),
    connect: t.field({ "required": false, "type": ProblemWhereUniqueInput }),
  }),
});

export const TopicCreateNestedOneWithoutProblemsInput = builder.inputRef<Prisma.TopicCreateNestedOneWithoutProblemsInput>('TopicCreateNestedOneWithoutProblemsInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": TopicCreateWithoutProblemsInput }),
    connectOrCreate: t.field({ "required": false, "type": TopicCreateOrConnectWithoutProblemsInput }),
    connect: t.field({ "required": false, "type": TopicWhereUniqueInput }),
  }),
});

export const ProblemUpdateOneRequiredWithoutTopicsNestedInput = builder.inputRef<Prisma.ProblemUpdateOneRequiredWithoutTopicsNestedInput>('ProblemUpdateOneRequiredWithoutTopicsNestedInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemCreateWithoutTopicsInput }),
    connectOrCreate: t.field({ "required": false, "type": ProblemCreateOrConnectWithoutTopicsInput }),
    upsert: t.field({ "required": false, "type": ProblemUpsertWithoutTopicsInput }),
    connect: t.field({ "required": false, "type": ProblemWhereUniqueInput }),
    update: t.field({ "required": false, "type": ProblemUpdateWithoutTopicsInput }),
  }),
});

export const TopicUpdateOneRequiredWithoutProblemsNestedInput = builder.inputRef<Prisma.TopicUpdateOneRequiredWithoutProblemsNestedInput>('TopicUpdateOneRequiredWithoutProblemsNestedInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": TopicCreateWithoutProblemsInput }),
    connectOrCreate: t.field({ "required": false, "type": TopicCreateOrConnectWithoutProblemsInput }),
    upsert: t.field({ "required": false, "type": TopicUpsertWithoutProblemsInput }),
    connect: t.field({ "required": false, "type": TopicWhereUniqueInput }),
    update: t.field({ "required": false, "type": TopicUpdateWithoutProblemsInput }),
  }),
});

export const ProblemAttemptDetailsCreateNestedManyWithoutUserInput = builder.inputRef<Prisma.ProblemAttemptDetailsCreateNestedManyWithoutUserInput>('ProblemAttemptDetailsCreateNestedManyWithoutUserInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemAttemptDetailsCreateWithoutUserInput }),
    connectOrCreate: t.field({ "required": false, "type": [ProblemAttemptDetailsCreateOrConnectWithoutUserInput] }),
    createMany: t.field({ "required": false, "type": ProblemAttemptDetailsCreateManyUserInputEnvelope }),
    connect: t.field({ "required": false, "type": [ProblemAttemptDetailsWhereUniqueInput] }),
  }),
});

export const DateTimeFieldUpdateOperationsInput = builder.inputRef<Prisma.DateTimeFieldUpdateOperationsInput>('DateTimeFieldUpdateOperationsInput').implement({
  fields: (t) => ({
    set: t.field({ "required": false, "type": DateTime }),
  }),
});

export const ProblemAttemptDetailsUpdateManyWithoutUserNestedInput = builder.inputRef<Prisma.ProblemAttemptDetailsUpdateManyWithoutUserNestedInput>('ProblemAttemptDetailsUpdateManyWithoutUserNestedInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemAttemptDetailsCreateWithoutUserInput }),
    connectOrCreate: t.field({ "required": false, "type": [ProblemAttemptDetailsCreateOrConnectWithoutUserInput] }),
    upsert: t.field({ "required": false, "type": [ProblemAttemptDetailsUpsertWithWhereUniqueWithoutUserInput] }),
    createMany: t.field({ "required": false, "type": ProblemAttemptDetailsCreateManyUserInputEnvelope }),
    set: t.field({ "required": false, "type": [ProblemAttemptDetailsWhereUniqueInput] }),
    disconnect: t.field({ "required": false, "type": [ProblemAttemptDetailsWhereUniqueInput] }),
    delete: t.field({ "required": false, "type": [ProblemAttemptDetailsWhereUniqueInput] }),
    connect: t.field({ "required": false, "type": [ProblemAttemptDetailsWhereUniqueInput] }),
    update: t.field({ "required": false, "type": [ProblemAttemptDetailsUpdateWithWhereUniqueWithoutUserInput] }),
    updateMany: t.field({ "required": false, "type": [ProblemAttemptDetailsUpdateManyWithWhereWithoutUserInput] }),
    deleteMany: t.field({ "required": false, "type": [ProblemAttemptDetailsScalarWhereInput] }),
  }),
});

export const ProblemCreateNestedOneWithoutProblemAttemptsInput = builder.inputRef<Prisma.ProblemCreateNestedOneWithoutProblemAttemptsInput>('ProblemCreateNestedOneWithoutProblemAttemptsInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemCreateWithoutProblemAttemptsInput }),
    connectOrCreate: t.field({ "required": false, "type": ProblemCreateOrConnectWithoutProblemAttemptsInput }),
    connect: t.field({ "required": false, "type": ProblemWhereUniqueInput }),
  }),
});

export const ProblemAttemptDetailsCreateNestedOneWithoutProblemAttemptInput = builder.inputRef<Prisma.ProblemAttemptDetailsCreateNestedOneWithoutProblemAttemptInput>('ProblemAttemptDetailsCreateNestedOneWithoutProblemAttemptInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemAttemptDetailsCreateWithoutProblemAttemptInput }),
    connectOrCreate: t.field({ "required": false, "type": ProblemAttemptDetailsCreateOrConnectWithoutProblemAttemptInput }),
    connect: t.field({ "required": false, "type": ProblemAttemptDetailsWhereUniqueInput }),
  }),
});

export const ProblemUpdateOneRequiredWithoutProblemAttemptsNestedInput = builder.inputRef<Prisma.ProblemUpdateOneRequiredWithoutProblemAttemptsNestedInput>('ProblemUpdateOneRequiredWithoutProblemAttemptsNestedInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemCreateWithoutProblemAttemptsInput }),
    connectOrCreate: t.field({ "required": false, "type": ProblemCreateOrConnectWithoutProblemAttemptsInput }),
    upsert: t.field({ "required": false, "type": ProblemUpsertWithoutProblemAttemptsInput }),
    connect: t.field({ "required": false, "type": ProblemWhereUniqueInput }),
    update: t.field({ "required": false, "type": ProblemUpdateWithoutProblemAttemptsInput }),
  }),
});

export const ProblemAttemptDetailsUpdateOneRequiredWithoutProblemAttemptNestedInput = builder.inputRef<Prisma.ProblemAttemptDetailsUpdateOneRequiredWithoutProblemAttemptNestedInput>('ProblemAttemptDetailsUpdateOneRequiredWithoutProblemAttemptNestedInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemAttemptDetailsCreateWithoutProblemAttemptInput }),
    connectOrCreate: t.field({ "required": false, "type": ProblemAttemptDetailsCreateOrConnectWithoutProblemAttemptInput }),
    upsert: t.field({ "required": false, "type": ProblemAttemptDetailsUpsertWithoutProblemAttemptInput }),
    connect: t.field({ "required": false, "type": ProblemAttemptDetailsWhereUniqueInput }),
    update: t.field({ "required": false, "type": ProblemAttemptDetailsUpdateWithoutProblemAttemptInput }),
  }),
});

export const UserCreateNestedOneWithoutProblemAttemptsInput = builder.inputRef<Prisma.UserCreateNestedOneWithoutProblemAttemptsInput>('UserCreateNestedOneWithoutProblemAttemptsInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": UserCreateWithoutProblemAttemptsInput }),
    connectOrCreate: t.field({ "required": false, "type": UserCreateOrConnectWithoutProblemAttemptsInput }),
    connect: t.field({ "required": false, "type": UserWhereUniqueInput }),
  }),
});

export const ProblemAttemptCreateNestedOneWithoutProblemAttemptDetailInput = builder.inputRef<Prisma.ProblemAttemptCreateNestedOneWithoutProblemAttemptDetailInput>('ProblemAttemptCreateNestedOneWithoutProblemAttemptDetailInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemAttemptCreateWithoutProblemAttemptDetailInput }),
    connectOrCreate: t.field({ "required": false, "type": ProblemAttemptCreateOrConnectWithoutProblemAttemptDetailInput }),
    connect: t.field({ "required": false, "type": ProblemAttemptWhereUniqueInput }),
  }),
});

export const UserUpdateOneRequiredWithoutProblemAttemptsNestedInput = builder.inputRef<Prisma.UserUpdateOneRequiredWithoutProblemAttemptsNestedInput>('UserUpdateOneRequiredWithoutProblemAttemptsNestedInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": UserCreateWithoutProblemAttemptsInput }),
    connectOrCreate: t.field({ "required": false, "type": UserCreateOrConnectWithoutProblemAttemptsInput }),
    upsert: t.field({ "required": false, "type": UserUpsertWithoutProblemAttemptsInput }),
    connect: t.field({ "required": false, "type": UserWhereUniqueInput }),
    update: t.field({ "required": false, "type": UserUpdateWithoutProblemAttemptsInput }),
  }),
});

export const ProblemAttemptUpdateOneWithoutProblemAttemptDetailNestedInput = builder.inputRef<Prisma.ProblemAttemptUpdateOneWithoutProblemAttemptDetailNestedInput>('ProblemAttemptUpdateOneWithoutProblemAttemptDetailNestedInput').implement({
  fields: (t) => ({
    create: t.field({ "required": false, "type": ProblemAttemptCreateWithoutProblemAttemptDetailInput }),
    connectOrCreate: t.field({ "required": false, "type": ProblemAttemptCreateOrConnectWithoutProblemAttemptDetailInput }),
    upsert: t.field({ "required": false, "type": ProblemAttemptUpsertWithoutProblemAttemptDetailInput }),
    disconnect: t.boolean({ "required": false }),
    delete: t.boolean({ "required": false }),
    connect: t.field({ "required": false, "type": ProblemAttemptWhereUniqueInput }),
    update: t.field({ "required": false, "type": ProblemAttemptUpdateWithoutProblemAttemptDetailInput }),
  }),
});

export const NestedIntFilter = builder.inputRef<Prisma.NestedIntFilter>('NestedIntFilter').implement({
  fields: (t) => ({
    equals: t.int({ "required": false }),
    in: t.intList({ "required": false }),
    notIn: t.intList({ "required": false }),
    lt: t.int({ "required": false }),
    lte: t.int({ "required": false }),
    gt: t.int({ "required": false }),
    gte: t.int({ "required": false }),
    not: t.field({ "required": false, "type": NestedIntFilter }),
  }),
});

export const NestedStringFilter = builder.inputRef<Prisma.NestedStringFilter>('NestedStringFilter').implement({
  fields: (t) => ({
    equals: t.string({ "required": false }),
    in: t.stringList({ "required": false }),
    notIn: t.stringList({ "required": false }),
    lt: t.string({ "required": false }),
    lte: t.string({ "required": false }),
    gt: t.string({ "required": false }),
    gte: t.string({ "required": false }),
    contains: t.string({ "required": false }),
    startsWith: t.string({ "required": false }),
    endsWith: t.string({ "required": false }),
    not: t.field({ "required": false, "type": NestedStringFilter }),
  }),
});

export const NestedFloatFilter = builder.inputRef<Prisma.NestedFloatFilter>('NestedFloatFilter').implement({
  fields: (t) => ({
    equals: t.float({ "required": false }),
    in: t.floatList({ "required": false }),
    notIn: t.floatList({ "required": false }),
    lt: t.float({ "required": false }),
    lte: t.float({ "required": false }),
    gt: t.float({ "required": false }),
    gte: t.float({ "required": false }),
    not: t.field({ "required": false, "type": NestedFloatFilter }),
  }),
});

export const NestedIntWithAggregatesFilter = builder.inputRef<Prisma.NestedIntWithAggregatesFilter>('NestedIntWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.int({ "required": false }),
    in: t.intList({ "required": false }),
    notIn: t.intList({ "required": false }),
    lt: t.int({ "required": false }),
    lte: t.int({ "required": false }),
    gt: t.int({ "required": false }),
    gte: t.int({ "required": false }),
    not: t.field({ "required": false, "type": NestedIntWithAggregatesFilter }),
    _count: t.field({ "required": false, "type": NestedIntFilter }),
    _avg: t.field({ "required": false, "type": NestedFloatFilter }),
    _sum: t.field({ "required": false, "type": NestedIntFilter }),
    _min: t.field({ "required": false, "type": NestedIntFilter }),
    _max: t.field({ "required": false, "type": NestedIntFilter }),
  }),
});

export const NestedStringWithAggregatesFilter = builder.inputRef<Prisma.NestedStringWithAggregatesFilter>('NestedStringWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({ "required": false }),
    in: t.stringList({ "required": false }),
    notIn: t.stringList({ "required": false }),
    lt: t.string({ "required": false }),
    lte: t.string({ "required": false }),
    gt: t.string({ "required": false }),
    gte: t.string({ "required": false }),
    contains: t.string({ "required": false }),
    startsWith: t.string({ "required": false }),
    endsWith: t.string({ "required": false }),
    not: t.field({ "required": false, "type": NestedStringWithAggregatesFilter }),
    _count: t.field({ "required": false, "type": NestedIntFilter }),
    _min: t.field({ "required": false, "type": NestedStringFilter }),
    _max: t.field({ "required": false, "type": NestedStringFilter }),
  }),
});

export const NestedFloatWithAggregatesFilter = builder.inputRef<Prisma.NestedFloatWithAggregatesFilter>('NestedFloatWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.float({ "required": false }),
    in: t.floatList({ "required": false }),
    notIn: t.floatList({ "required": false }),
    lt: t.float({ "required": false }),
    lte: t.float({ "required": false }),
    gt: t.float({ "required": false }),
    gte: t.float({ "required": false }),
    not: t.field({ "required": false, "type": NestedFloatWithAggregatesFilter }),
    _count: t.field({ "required": false, "type": NestedIntFilter }),
    _avg: t.field({ "required": false, "type": NestedFloatFilter }),
    _sum: t.field({ "required": false, "type": NestedFloatFilter }),
    _min: t.field({ "required": false, "type": NestedFloatFilter }),
    _max: t.field({ "required": false, "type": NestedFloatFilter }),
  }),
});

export const NestedIntNullableFilter = builder.inputRef<Prisma.NestedIntNullableFilter>('NestedIntNullableFilter').implement({
  fields: (t) => ({
    equals: t.int({ "required": false }),
    in: t.intList({ "required": false }),
    notIn: t.intList({ "required": false }),
    lt: t.int({ "required": false }),
    lte: t.int({ "required": false }),
    gt: t.int({ "required": false }),
    gte: t.int({ "required": false }),
    not: t.field({ "required": false, "type": NestedIntNullableFilter }),
  }),
});

export const NestedJsonNullableFilter = builder.inputRef<Prisma.NestedJsonNullableFilter>('NestedJsonNullableFilter').implement({
  fields: (t) => ({
    equals: t.field({ "required": false, "type": Json }),
    path: t.stringList({ "required": false }),
    string_contains: t.string({ "required": false }),
    string_starts_with: t.string({ "required": false }),
    string_ends_with: t.string({ "required": false }),
    array_contains: t.field({ "required": false, "type": Json }),
    array_starts_with: t.field({ "required": false, "type": Json }),
    array_ends_with: t.field({ "required": false, "type": Json }),
    lt: t.field({ "required": false, "type": Json }),
    lte: t.field({ "required": false, "type": Json }),
    gt: t.field({ "required": false, "type": Json }),
    gte: t.field({ "required": false, "type": Json }),
    not: t.field({ "required": false, "type": Json }),
  }),
});

export const NestedDateTimeFilter = builder.inputRef<Prisma.NestedDateTimeFilter>('NestedDateTimeFilter').implement({
  fields: (t) => ({
    equals: t.field({ "required": false, "type": DateTime }),
    in: t.field({ "required": false, "type": [DateTime] }),
    notIn: t.field({ "required": false, "type": [DateTime] }),
    lt: t.field({ "required": false, "type": DateTime }),
    lte: t.field({ "required": false, "type": DateTime }),
    gt: t.field({ "required": false, "type": DateTime }),
    gte: t.field({ "required": false, "type": DateTime }),
    not: t.field({ "required": false, "type": NestedDateTimeFilter }),
  }),
});

export const NestedDateTimeWithAggregatesFilter = builder.inputRef<Prisma.NestedDateTimeWithAggregatesFilter>('NestedDateTimeWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.field({ "required": false, "type": DateTime }),
    in: t.field({ "required": false, "type": [DateTime] }),
    notIn: t.field({ "required": false, "type": [DateTime] }),
    lt: t.field({ "required": false, "type": DateTime }),
    lte: t.field({ "required": false, "type": DateTime }),
    gt: t.field({ "required": false, "type": DateTime }),
    gte: t.field({ "required": false, "type": DateTime }),
    not: t.field({ "required": false, "type": NestedDateTimeWithAggregatesFilter }),
    _count: t.field({ "required": false, "type": NestedIntFilter }),
    _min: t.field({ "required": false, "type": NestedDateTimeFilter }),
    _max: t.field({ "required": false, "type": NestedDateTimeFilter }),
  }),
});

export const TopicOnProblemsCreateWithoutProblemInput = builder.inputRef<Prisma.TopicOnProblemsCreateWithoutProblemInput>('TopicOnProblemsCreateWithoutProblemInput').implement({
  fields: (t) => ({
    topic: t.field({ "required": true, "type": TopicCreateNestedOneWithoutProblemsInput }),
  }),
});

export const TopicOnProblemsCreateOrConnectWithoutProblemInput = builder.inputRef<Prisma.TopicOnProblemsCreateOrConnectWithoutProblemInput>('TopicOnProblemsCreateOrConnectWithoutProblemInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": TopicOnProblemsWhereUniqueInput }),
    create: t.field({ "required": true, "type": TopicOnProblemsCreateWithoutProblemInput }),
  }),
});

export const TopicOnProblemsCreateManyProblemInputEnvelope = builder.inputRef<Prisma.TopicOnProblemsCreateManyProblemInputEnvelope>('TopicOnProblemsCreateManyProblemInputEnvelope').implement({
  fields: (t) => ({
    data: t.field({ "required": true, "type": [TopicOnProblemsCreateManyProblemInput] }),
    skipDuplicates: t.boolean({ "required": false }),
  }),
});

export const ProblemAttemptCreateWithoutProblemInput = builder.inputRef<Prisma.ProblemAttemptCreateWithoutProblemInput>('ProblemAttemptCreateWithoutProblemInput').implement({
  fields: (t) => ({
    createdAt: t.field({ "required": false, "type": DateTime }),
    frontendId: t.int({ "required": false }),
    problemAttemptDetail: t.field({ "required": true, "type": ProblemAttemptDetailsCreateNestedOneWithoutProblemAttemptInput }),
  }),
});

export const ProblemAttemptCreateOrConnectWithoutProblemInput = builder.inputRef<Prisma.ProblemAttemptCreateOrConnectWithoutProblemInput>('ProblemAttemptCreateOrConnectWithoutProblemInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemAttemptWhereUniqueInput }),
    create: t.field({ "required": true, "type": ProblemAttemptCreateWithoutProblemInput }),
  }),
});

export const ProblemAttemptCreateManyProblemInputEnvelope = builder.inputRef<Prisma.ProblemAttemptCreateManyProblemInputEnvelope>('ProblemAttemptCreateManyProblemInputEnvelope').implement({
  fields: (t) => ({
    data: t.field({ "required": true, "type": [ProblemAttemptCreateManyProblemInput] }),
    skipDuplicates: t.boolean({ "required": false }),
  }),
});

export const TopicOnProblemsUpsertWithWhereUniqueWithoutProblemInput = builder.inputRef<Prisma.TopicOnProblemsUpsertWithWhereUniqueWithoutProblemInput>('TopicOnProblemsUpsertWithWhereUniqueWithoutProblemInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": TopicOnProblemsWhereUniqueInput }),
    update: t.field({ "required": true, "type": TopicOnProblemsUpdateWithoutProblemInput }),
    create: t.field({ "required": true, "type": TopicOnProblemsCreateWithoutProblemInput }),
  }),
});

export const TopicOnProblemsUpdateWithWhereUniqueWithoutProblemInput = builder.inputRef<Prisma.TopicOnProblemsUpdateWithWhereUniqueWithoutProblemInput>('TopicOnProblemsUpdateWithWhereUniqueWithoutProblemInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": TopicOnProblemsWhereUniqueInput }),
    data: t.field({ "required": true, "type": TopicOnProblemsUpdateWithoutProblemInput }),
  }),
});

export const TopicOnProblemsUpdateManyWithWhereWithoutProblemInput = builder.inputRef<Prisma.TopicOnProblemsUpdateManyWithWhereWithoutProblemInput>('TopicOnProblemsUpdateManyWithWhereWithoutProblemInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": TopicOnProblemsScalarWhereInput }),
    data: t.field({ "required": true, "type": TopicOnProblemsUpdateManyMutationInput }),
  }),
});

export const TopicOnProblemsScalarWhereInput = builder.inputRef<Prisma.TopicOnProblemsScalarWhereInput>('TopicOnProblemsScalarWhereInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [TopicOnProblemsScalarWhereInput] }),
    OR: t.field({ "required": false, "type": [TopicOnProblemsScalarWhereInput] }),
    NOT: t.field({ "required": false, "type": [TopicOnProblemsScalarWhereInput] }),
    problemId: t.field({ "required": false, "type": IntFilter }),
    topicId: t.field({ "required": false, "type": IntFilter }),
    topicSlug: t.field({ "required": false, "type": StringFilter }),
    topicName: t.field({ "required": false, "type": StringFilter }),
  }),
});

export const ProblemAttemptUpsertWithWhereUniqueWithoutProblemInput = builder.inputRef<Prisma.ProblemAttemptUpsertWithWhereUniqueWithoutProblemInput>('ProblemAttemptUpsertWithWhereUniqueWithoutProblemInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemAttemptWhereUniqueInput }),
    update: t.field({ "required": true, "type": ProblemAttemptUpdateWithoutProblemInput }),
    create: t.field({ "required": true, "type": ProblemAttemptCreateWithoutProblemInput }),
  }),
});

export const ProblemAttemptUpdateWithWhereUniqueWithoutProblemInput = builder.inputRef<Prisma.ProblemAttemptUpdateWithWhereUniqueWithoutProblemInput>('ProblemAttemptUpdateWithWhereUniqueWithoutProblemInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemAttemptWhereUniqueInput }),
    data: t.field({ "required": true, "type": ProblemAttemptUpdateWithoutProblemInput }),
  }),
});

export const ProblemAttemptUpdateManyWithWhereWithoutProblemInput = builder.inputRef<Prisma.ProblemAttemptUpdateManyWithWhereWithoutProblemInput>('ProblemAttemptUpdateManyWithWhereWithoutProblemInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemAttemptScalarWhereInput }),
    data: t.field({ "required": true, "type": ProblemAttemptUpdateManyMutationInput }),
  }),
});

export const ProblemAttemptScalarWhereInput = builder.inputRef<Prisma.ProblemAttemptScalarWhereInput>('ProblemAttemptScalarWhereInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [ProblemAttemptScalarWhereInput] }),
    OR: t.field({ "required": false, "type": [ProblemAttemptScalarWhereInput] }),
    NOT: t.field({ "required": false, "type": [ProblemAttemptScalarWhereInput] }),
    id: t.field({ "required": false, "type": IntFilter }),
    createdAt: t.field({ "required": false, "type": DateTimeFilter }),
    frontendId: t.field({ "required": false, "type": IntFilter }),
    problemId: t.field({ "required": false, "type": IntFilter }),
    attemptDetailId: t.field({ "required": false, "type": IntFilter }),
  }),
});

export const TopicOnProblemsCreateWithoutTopicInput = builder.inputRef<Prisma.TopicOnProblemsCreateWithoutTopicInput>('TopicOnProblemsCreateWithoutTopicInput').implement({
  fields: (t) => ({
    problem: t.field({ "required": true, "type": ProblemCreateNestedOneWithoutTopicsInput }),
  }),
});

export const TopicOnProblemsCreateOrConnectWithoutTopicInput = builder.inputRef<Prisma.TopicOnProblemsCreateOrConnectWithoutTopicInput>('TopicOnProblemsCreateOrConnectWithoutTopicInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": TopicOnProblemsWhereUniqueInput }),
    create: t.field({ "required": true, "type": TopicOnProblemsCreateWithoutTopicInput }),
  }),
});

export const TopicOnProblemsCreateManyTopicInputEnvelope = builder.inputRef<Prisma.TopicOnProblemsCreateManyTopicInputEnvelope>('TopicOnProblemsCreateManyTopicInputEnvelope').implement({
  fields: (t) => ({
    data: t.field({ "required": true, "type": [TopicOnProblemsCreateManyTopicInput] }),
    skipDuplicates: t.boolean({ "required": false }),
  }),
});

export const TopicOnProblemsUpsertWithWhereUniqueWithoutTopicInput = builder.inputRef<Prisma.TopicOnProblemsUpsertWithWhereUniqueWithoutTopicInput>('TopicOnProblemsUpsertWithWhereUniqueWithoutTopicInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": TopicOnProblemsWhereUniqueInput }),
    update: t.field({ "required": true, "type": TopicOnProblemsUpdateWithoutTopicInput }),
    create: t.field({ "required": true, "type": TopicOnProblemsCreateWithoutTopicInput }),
  }),
});

export const TopicOnProblemsUpdateWithWhereUniqueWithoutTopicInput = builder.inputRef<Prisma.TopicOnProblemsUpdateWithWhereUniqueWithoutTopicInput>('TopicOnProblemsUpdateWithWhereUniqueWithoutTopicInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": TopicOnProblemsWhereUniqueInput }),
    data: t.field({ "required": true, "type": TopicOnProblemsUpdateWithoutTopicInput }),
  }),
});

export const TopicOnProblemsUpdateManyWithWhereWithoutTopicInput = builder.inputRef<Prisma.TopicOnProblemsUpdateManyWithWhereWithoutTopicInput>('TopicOnProblemsUpdateManyWithWhereWithoutTopicInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": TopicOnProblemsScalarWhereInput }),
    data: t.field({ "required": true, "type": TopicOnProblemsUpdateManyMutationInput }),
  }),
});

export const ProblemCreateWithoutTopicsInput = builder.inputRef<Prisma.ProblemCreateWithoutTopicsInput>('ProblemCreateWithoutTopicsInput').implement({
  fields: (t) => ({
    id: t.int({ "required": true }),
    frontendId: t.int({ "required": true }),
    title: t.string({ "required": true }),
    titleSlug: t.string({ "required": true }),
    difficulty: t.string({ "required": true }),
    acRate: t.float({ "required": true }),
    topicTags: t.field({ "required": false, "type": Json }),
    problemAttempts: t.field({ "required": false, "type": ProblemAttemptCreateNestedManyWithoutProblemInput }),
  }),
});

export const ProblemCreateOrConnectWithoutTopicsInput = builder.inputRef<Prisma.ProblemCreateOrConnectWithoutTopicsInput>('ProblemCreateOrConnectWithoutTopicsInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemWhereUniqueInput }),
    create: t.field({ "required": true, "type": ProblemCreateWithoutTopicsInput }),
  }),
});

export const TopicCreateWithoutProblemsInput = builder.inputRef<Prisma.TopicCreateWithoutProblemsInput>('TopicCreateWithoutProblemsInput').implement({
  fields: (t) => ({
    topicSlug: t.string({ "required": true }),
    topicName: t.string({ "required": true }),
  }),
});

export const TopicCreateOrConnectWithoutProblemsInput = builder.inputRef<Prisma.TopicCreateOrConnectWithoutProblemsInput>('TopicCreateOrConnectWithoutProblemsInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": TopicWhereUniqueInput }),
    create: t.field({ "required": true, "type": TopicCreateWithoutProblemsInput }),
  }),
});

export const ProblemUpsertWithoutTopicsInput = builder.inputRef<Prisma.ProblemUpsertWithoutTopicsInput>('ProblemUpsertWithoutTopicsInput').implement({
  fields: (t) => ({
    update: t.field({ "required": true, "type": ProblemUpdateWithoutTopicsInput }),
    create: t.field({ "required": true, "type": ProblemCreateWithoutTopicsInput }),
  }),
});

export const ProblemUpdateWithoutTopicsInput = builder.inputRef<Prisma.ProblemUpdateWithoutTopicsInput>('ProblemUpdateWithoutTopicsInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
    frontendId: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
    title: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    titleSlug: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    difficulty: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    acRate: t.field({ "required": false, "type": FloatFieldUpdateOperationsInput }),
    topicTags: t.field({ "required": false, "type": Json }),
    problemAttempts: t.field({ "required": false, "type": ProblemAttemptUpdateManyWithoutProblemNestedInput }),
  }),
});

export const TopicUpsertWithoutProblemsInput = builder.inputRef<Prisma.TopicUpsertWithoutProblemsInput>('TopicUpsertWithoutProblemsInput').implement({
  fields: (t) => ({
    update: t.field({ "required": true, "type": TopicUpdateWithoutProblemsInput }),
    create: t.field({ "required": true, "type": TopicCreateWithoutProblemsInput }),
  }),
});

export const TopicUpdateWithoutProblemsInput = builder.inputRef<Prisma.TopicUpdateWithoutProblemsInput>('TopicUpdateWithoutProblemsInput').implement({
  fields: (t) => ({
    topicSlug: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    topicName: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
  }),
});

export const ProblemAttemptDetailsCreateWithoutUserInput = builder.inputRef<Prisma.ProblemAttemptDetailsCreateWithoutUserInput>('ProblemAttemptDetailsCreateWithoutUserInput').implement({
  fields: (t) => ({
    ProblemAttempt: t.field({ "required": false, "type": ProblemAttemptCreateNestedOneWithoutProblemAttemptDetailInput }),
    status: t.string({ "required": true }),
    createdAt: t.field({ "required": false, "type": DateTime }),
  }),
});

export const ProblemAttemptDetailsCreateOrConnectWithoutUserInput = builder.inputRef<Prisma.ProblemAttemptDetailsCreateOrConnectWithoutUserInput>('ProblemAttemptDetailsCreateOrConnectWithoutUserInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemAttemptDetailsWhereUniqueInput }),
    create: t.field({ "required": true, "type": ProblemAttemptDetailsCreateWithoutUserInput }),
  }),
});

export const ProblemAttemptDetailsCreateManyUserInputEnvelope = builder.inputRef<Prisma.ProblemAttemptDetailsCreateManyUserInputEnvelope>('ProblemAttemptDetailsCreateManyUserInputEnvelope').implement({
  fields: (t) => ({
    data: t.field({ "required": true, "type": [ProblemAttemptDetailsCreateManyUserInput] }),
    skipDuplicates: t.boolean({ "required": false }),
  }),
});

export const ProblemAttemptDetailsUpsertWithWhereUniqueWithoutUserInput = builder.inputRef<Prisma.ProblemAttemptDetailsUpsertWithWhereUniqueWithoutUserInput>('ProblemAttemptDetailsUpsertWithWhereUniqueWithoutUserInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemAttemptDetailsWhereUniqueInput }),
    update: t.field({ "required": true, "type": ProblemAttemptDetailsUpdateWithoutUserInput }),
    create: t.field({ "required": true, "type": ProblemAttemptDetailsCreateWithoutUserInput }),
  }),
});

export const ProblemAttemptDetailsUpdateWithWhereUniqueWithoutUserInput = builder.inputRef<Prisma.ProblemAttemptDetailsUpdateWithWhereUniqueWithoutUserInput>('ProblemAttemptDetailsUpdateWithWhereUniqueWithoutUserInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemAttemptDetailsWhereUniqueInput }),
    data: t.field({ "required": true, "type": ProblemAttemptDetailsUpdateWithoutUserInput }),
  }),
});

export const ProblemAttemptDetailsUpdateManyWithWhereWithoutUserInput = builder.inputRef<Prisma.ProblemAttemptDetailsUpdateManyWithWhereWithoutUserInput>('ProblemAttemptDetailsUpdateManyWithWhereWithoutUserInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemAttemptDetailsScalarWhereInput }),
    data: t.field({ "required": true, "type": ProblemAttemptDetailsUpdateManyMutationInput }),
  }),
});

export const ProblemAttemptDetailsScalarWhereInput = builder.inputRef<Prisma.ProblemAttemptDetailsScalarWhereInput>('ProblemAttemptDetailsScalarWhereInput').implement({
  fields: (t) => ({
    AND: t.field({ "required": false, "type": [ProblemAttemptDetailsScalarWhereInput] }),
    OR: t.field({ "required": false, "type": [ProblemAttemptDetailsScalarWhereInput] }),
    NOT: t.field({ "required": false, "type": [ProblemAttemptDetailsScalarWhereInput] }),
    id: t.field({ "required": false, "type": IntFilter }),
    userId: t.field({ "required": false, "type": StringFilter }),
    status: t.field({ "required": false, "type": StringFilter }),
    createdAt: t.field({ "required": false, "type": DateTimeFilter }),
  }),
});

export const ProblemCreateWithoutProblemAttemptsInput = builder.inputRef<Prisma.ProblemCreateWithoutProblemAttemptsInput>('ProblemCreateWithoutProblemAttemptsInput').implement({
  fields: (t) => ({
    id: t.int({ "required": true }),
    frontendId: t.int({ "required": true }),
    title: t.string({ "required": true }),
    titleSlug: t.string({ "required": true }),
    difficulty: t.string({ "required": true }),
    acRate: t.float({ "required": true }),
    topics: t.field({ "required": false, "type": TopicOnProblemsCreateNestedManyWithoutProblemInput }),
    topicTags: t.field({ "required": false, "type": Json }),
  }),
});

export const ProblemCreateOrConnectWithoutProblemAttemptsInput = builder.inputRef<Prisma.ProblemCreateOrConnectWithoutProblemAttemptsInput>('ProblemCreateOrConnectWithoutProblemAttemptsInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemWhereUniqueInput }),
    create: t.field({ "required": true, "type": ProblemCreateWithoutProblemAttemptsInput }),
  }),
});

export const ProblemAttemptDetailsCreateWithoutProblemAttemptInput = builder.inputRef<Prisma.ProblemAttemptDetailsCreateWithoutProblemAttemptInput>('ProblemAttemptDetailsCreateWithoutProblemAttemptInput').implement({
  fields: (t) => ({
    user: t.field({ "required": true, "type": UserCreateNestedOneWithoutProblemAttemptsInput }),
    status: t.string({ "required": true }),
    createdAt: t.field({ "required": false, "type": DateTime }),
  }),
});

export const ProblemAttemptDetailsCreateOrConnectWithoutProblemAttemptInput = builder.inputRef<Prisma.ProblemAttemptDetailsCreateOrConnectWithoutProblemAttemptInput>('ProblemAttemptDetailsCreateOrConnectWithoutProblemAttemptInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemAttemptDetailsWhereUniqueInput }),
    create: t.field({ "required": true, "type": ProblemAttemptDetailsCreateWithoutProblemAttemptInput }),
  }),
});

export const ProblemUpsertWithoutProblemAttemptsInput = builder.inputRef<Prisma.ProblemUpsertWithoutProblemAttemptsInput>('ProblemUpsertWithoutProblemAttemptsInput').implement({
  fields: (t) => ({
    update: t.field({ "required": true, "type": ProblemUpdateWithoutProblemAttemptsInput }),
    create: t.field({ "required": true, "type": ProblemCreateWithoutProblemAttemptsInput }),
  }),
});

export const ProblemUpdateWithoutProblemAttemptsInput = builder.inputRef<Prisma.ProblemUpdateWithoutProblemAttemptsInput>('ProblemUpdateWithoutProblemAttemptsInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
    frontendId: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
    title: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    titleSlug: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    difficulty: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    acRate: t.field({ "required": false, "type": FloatFieldUpdateOperationsInput }),
    topics: t.field({ "required": false, "type": TopicOnProblemsUpdateManyWithoutProblemNestedInput }),
    topicTags: t.field({ "required": false, "type": Json }),
  }),
});

export const ProblemAttemptDetailsUpsertWithoutProblemAttemptInput = builder.inputRef<Prisma.ProblemAttemptDetailsUpsertWithoutProblemAttemptInput>('ProblemAttemptDetailsUpsertWithoutProblemAttemptInput').implement({
  fields: (t) => ({
    update: t.field({ "required": true, "type": ProblemAttemptDetailsUpdateWithoutProblemAttemptInput }),
    create: t.field({ "required": true, "type": ProblemAttemptDetailsCreateWithoutProblemAttemptInput }),
  }),
});

export const ProblemAttemptDetailsUpdateWithoutProblemAttemptInput = builder.inputRef<Prisma.ProblemAttemptDetailsUpdateWithoutProblemAttemptInput>('ProblemAttemptDetailsUpdateWithoutProblemAttemptInput').implement({
  fields: (t) => ({
    user: t.field({ "required": false, "type": UserUpdateOneRequiredWithoutProblemAttemptsNestedInput }),
    status: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    createdAt: t.field({ "required": false, "type": DateTimeFieldUpdateOperationsInput }),
  }),
});

export const UserCreateWithoutProblemAttemptsInput = builder.inputRef<Prisma.UserCreateWithoutProblemAttemptsInput>('UserCreateWithoutProblemAttemptsInput').implement({
  fields: (t) => ({
    id: t.string({ "required": false }),
    registeredAt: t.field({ "required": false, "type": DateTime }),
  }),
});

export const UserCreateOrConnectWithoutProblemAttemptsInput = builder.inputRef<Prisma.UserCreateOrConnectWithoutProblemAttemptsInput>('UserCreateOrConnectWithoutProblemAttemptsInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": UserWhereUniqueInput }),
    create: t.field({ "required": true, "type": UserCreateWithoutProblemAttemptsInput }),
  }),
});

export const ProblemAttemptCreateWithoutProblemAttemptDetailInput = builder.inputRef<Prisma.ProblemAttemptCreateWithoutProblemAttemptDetailInput>('ProblemAttemptCreateWithoutProblemAttemptDetailInput').implement({
  fields: (t) => ({
    createdAt: t.field({ "required": false, "type": DateTime }),
    frontendId: t.int({ "required": false }),
    problem: t.field({ "required": true, "type": ProblemCreateNestedOneWithoutProblemAttemptsInput }),
  }),
});

export const ProblemAttemptCreateOrConnectWithoutProblemAttemptDetailInput = builder.inputRef<Prisma.ProblemAttemptCreateOrConnectWithoutProblemAttemptDetailInput>('ProblemAttemptCreateOrConnectWithoutProblemAttemptDetailInput').implement({
  fields: (t) => ({
    where: t.field({ "required": true, "type": ProblemAttemptWhereUniqueInput }),
    create: t.field({ "required": true, "type": ProblemAttemptCreateWithoutProblemAttemptDetailInput }),
  }),
});

export const UserUpsertWithoutProblemAttemptsInput = builder.inputRef<Prisma.UserUpsertWithoutProblemAttemptsInput>('UserUpsertWithoutProblemAttemptsInput').implement({
  fields: (t) => ({
    update: t.field({ "required": true, "type": UserUpdateWithoutProblemAttemptsInput }),
    create: t.field({ "required": true, "type": UserCreateWithoutProblemAttemptsInput }),
  }),
});

export const UserUpdateWithoutProblemAttemptsInput = builder.inputRef<Prisma.UserUpdateWithoutProblemAttemptsInput>('UserUpdateWithoutProblemAttemptsInput').implement({
  fields: (t) => ({
    id: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    registeredAt: t.field({ "required": false, "type": DateTimeFieldUpdateOperationsInput }),
  }),
});

export const ProblemAttemptUpsertWithoutProblemAttemptDetailInput = builder.inputRef<Prisma.ProblemAttemptUpsertWithoutProblemAttemptDetailInput>('ProblemAttemptUpsertWithoutProblemAttemptDetailInput').implement({
  fields: (t) => ({
    update: t.field({ "required": true, "type": ProblemAttemptUpdateWithoutProblemAttemptDetailInput }),
    create: t.field({ "required": true, "type": ProblemAttemptCreateWithoutProblemAttemptDetailInput }),
  }),
});

export const ProblemAttemptUpdateWithoutProblemAttemptDetailInput = builder.inputRef<Prisma.ProblemAttemptUpdateWithoutProblemAttemptDetailInput>('ProblemAttemptUpdateWithoutProblemAttemptDetailInput').implement({
  fields: (t) => ({
    createdAt: t.field({ "required": false, "type": DateTimeFieldUpdateOperationsInput }),
    frontendId: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
    problem: t.field({ "required": false, "type": ProblemUpdateOneRequiredWithoutProblemAttemptsNestedInput }),
  }),
});

export const TopicOnProblemsCreateManyProblemInput = builder.inputRef<Prisma.TopicOnProblemsCreateManyProblemInput>('TopicOnProblemsCreateManyProblemInput').implement({
  fields: (t) => ({
    topicId: t.int({ "required": true }),
    topicSlug: t.string({ "required": true }),
    topicName: t.string({ "required": true }),
  }),
});

export const ProblemAttemptCreateManyProblemInput = builder.inputRef<Prisma.ProblemAttemptCreateManyProblemInput>('ProblemAttemptCreateManyProblemInput').implement({
  fields: (t) => ({
    id: t.int({ "required": false }),
    createdAt: t.field({ "required": false, "type": DateTime }),
    frontendId: t.int({ "required": false }),
    attemptDetailId: t.int({ "required": true }),
  }),
});

export const TopicOnProblemsUpdateWithoutProblemInput = builder.inputRef<Prisma.TopicOnProblemsUpdateWithoutProblemInput>('TopicOnProblemsUpdateWithoutProblemInput').implement({
  fields: (t) => ({
    topic: t.field({ "required": false, "type": TopicUpdateOneRequiredWithoutProblemsNestedInput }),
  }),
});

export const ProblemAttemptUpdateWithoutProblemInput = builder.inputRef<Prisma.ProblemAttemptUpdateWithoutProblemInput>('ProblemAttemptUpdateWithoutProblemInput').implement({
  fields: (t) => ({
    createdAt: t.field({ "required": false, "type": DateTimeFieldUpdateOperationsInput }),
    frontendId: t.field({ "required": false, "type": IntFieldUpdateOperationsInput }),
    problemAttemptDetail: t.field({ "required": false, "type": ProblemAttemptDetailsUpdateOneRequiredWithoutProblemAttemptNestedInput }),
  }),
});

export const TopicOnProblemsCreateManyTopicInput = builder.inputRef<Prisma.TopicOnProblemsCreateManyTopicInput>('TopicOnProblemsCreateManyTopicInput').implement({
  fields: (t) => ({
    problemId: t.int({ "required": true }),
  }),
});

export const TopicOnProblemsUpdateWithoutTopicInput = builder.inputRef<Prisma.TopicOnProblemsUpdateWithoutTopicInput>('TopicOnProblemsUpdateWithoutTopicInput').implement({
  fields: (t) => ({
    problem: t.field({ "required": false, "type": ProblemUpdateOneRequiredWithoutTopicsNestedInput }),
  }),
});

export const ProblemAttemptDetailsCreateManyUserInput = builder.inputRef<Prisma.ProblemAttemptDetailsCreateManyUserInput>('ProblemAttemptDetailsCreateManyUserInput').implement({
  fields: (t) => ({
    id: t.int({ "required": false }),
    status: t.string({ "required": true }),
    createdAt: t.field({ "required": false, "type": DateTime }),
  }),
});

export const ProblemAttemptDetailsUpdateWithoutUserInput = builder.inputRef<Prisma.ProblemAttemptDetailsUpdateWithoutUserInput>('ProblemAttemptDetailsUpdateWithoutUserInput').implement({
  fields: (t) => ({
    ProblemAttempt: t.field({ "required": false, "type": ProblemAttemptUpdateOneWithoutProblemAttemptDetailNestedInput }),
    status: t.field({ "required": false, "type": StringFieldUpdateOperationsInput }),
    createdAt: t.field({ "required": false, "type": DateTimeFieldUpdateOperationsInput }),
  }),
});