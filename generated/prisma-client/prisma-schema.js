module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCharacter {
  count: Int!
}

type AggregateFeeling {
  count: Int!
}

type AggregatePath {
  count: Int!
}

type AggregateProcess {
  count: Int!
}

type AggregateSource {
  count: Int!
}

type AggregateThought {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Character {
  id: ID!
  key: String!
  title: String!
  description: String
  process: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  userId: ID!
}

type CharacterConnection {
  pageInfo: PageInfo!
  edges: [CharacterEdge]!
  aggregate: AggregateCharacter!
}

input CharacterCreateInput {
  key: String!
  title: String!
  description: String
  process: String!
  userId: ID!
}

type CharacterEdge {
  node: Character!
  cursor: String!
}

enum CharacterOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  process_ASC
  process_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  userId_ASC
  userId_DESC
}

type CharacterPreviousValues {
  id: ID!
  key: String!
  title: String!
  description: String
  process: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  userId: ID!
}

type CharacterSubscriptionPayload {
  mutation: MutationType!
  node: Character
  updatedFields: [String!]
  previousValues: CharacterPreviousValues
}

input CharacterSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CharacterWhereInput
  AND: [CharacterSubscriptionWhereInput!]
  OR: [CharacterSubscriptionWhereInput!]
  NOT: [CharacterSubscriptionWhereInput!]
}

input CharacterUpdateInput {
  key: String
  title: String
  description: String
  process: String
  userId: ID
}

input CharacterUpdateManyMutationInput {
  key: String
  title: String
  description: String
  process: String
  userId: ID
}

input CharacterWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  process: String
  process_not: String
  process_in: [String!]
  process_not_in: [String!]
  process_lt: String
  process_lte: String
  process_gt: String
  process_gte: String
  process_contains: String
  process_not_contains: String
  process_starts_with: String
  process_not_starts_with: String
  process_ends_with: String
  process_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
  AND: [CharacterWhereInput!]
  OR: [CharacterWhereInput!]
  NOT: [CharacterWhereInput!]
}

input CharacterWhereUniqueInput {
  id: ID
  key: String
}

scalar DateTime

type Feeling {
  id: ID!
  key: String!
  title: String!
  thoughts: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  userId: ID!
}

type FeelingConnection {
  pageInfo: PageInfo!
  edges: [FeelingEdge]!
  aggregate: AggregateFeeling!
}

input FeelingCreateInput {
  key: String!
  title: String!
  thoughts: FeelingCreatethoughtsInput
  userId: ID!
}

input FeelingCreatethoughtsInput {
  set: [String!]
}

type FeelingEdge {
  node: Feeling!
  cursor: String!
}

enum FeelingOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  userId_ASC
  userId_DESC
}

type FeelingPreviousValues {
  id: ID!
  key: String!
  title: String!
  thoughts: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  userId: ID!
}

type FeelingSubscriptionPayload {
  mutation: MutationType!
  node: Feeling
  updatedFields: [String!]
  previousValues: FeelingPreviousValues
}

input FeelingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FeelingWhereInput
  AND: [FeelingSubscriptionWhereInput!]
  OR: [FeelingSubscriptionWhereInput!]
  NOT: [FeelingSubscriptionWhereInput!]
}

input FeelingUpdateInput {
  key: String
  title: String
  thoughts: FeelingUpdatethoughtsInput
  userId: ID
}

input FeelingUpdateManyMutationInput {
  key: String
  title: String
  thoughts: FeelingUpdatethoughtsInput
  userId: ID
}

input FeelingUpdatethoughtsInput {
  set: [String!]
}

input FeelingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
  AND: [FeelingWhereInput!]
  OR: [FeelingWhereInput!]
  NOT: [FeelingWhereInput!]
}

input FeelingWhereUniqueInput {
  id: ID
  key: String
}

scalar Long

type Mutation {
  createCharacter(data: CharacterCreateInput!): Character!
  updateCharacter(data: CharacterUpdateInput!, where: CharacterWhereUniqueInput!): Character
  updateManyCharacters(data: CharacterUpdateManyMutationInput!, where: CharacterWhereInput): BatchPayload!
  upsertCharacter(where: CharacterWhereUniqueInput!, create: CharacterCreateInput!, update: CharacterUpdateInput!): Character!
  deleteCharacter(where: CharacterWhereUniqueInput!): Character
  deleteManyCharacters(where: CharacterWhereInput): BatchPayload!
  createFeeling(data: FeelingCreateInput!): Feeling!
  updateFeeling(data: FeelingUpdateInput!, where: FeelingWhereUniqueInput!): Feeling
  updateManyFeelings(data: FeelingUpdateManyMutationInput!, where: FeelingWhereInput): BatchPayload!
  upsertFeeling(where: FeelingWhereUniqueInput!, create: FeelingCreateInput!, update: FeelingUpdateInput!): Feeling!
  deleteFeeling(where: FeelingWhereUniqueInput!): Feeling
  deleteManyFeelings(where: FeelingWhereInput): BatchPayload!
  createPath(data: PathCreateInput!): Path!
  updatePath(data: PathUpdateInput!, where: PathWhereUniqueInput!): Path
  updateManyPaths(data: PathUpdateManyMutationInput!, where: PathWhereInput): BatchPayload!
  upsertPath(where: PathWhereUniqueInput!, create: PathCreateInput!, update: PathUpdateInput!): Path!
  deletePath(where: PathWhereUniqueInput!): Path
  deleteManyPaths(where: PathWhereInput): BatchPayload!
  createProcess(data: ProcessCreateInput!): Process!
  updateProcess(data: ProcessUpdateInput!, where: ProcessWhereUniqueInput!): Process
  updateManyProcesses(data: ProcessUpdateManyMutationInput!, where: ProcessWhereInput): BatchPayload!
  upsertProcess(where: ProcessWhereUniqueInput!, create: ProcessCreateInput!, update: ProcessUpdateInput!): Process!
  deleteProcess(where: ProcessWhereUniqueInput!): Process
  deleteManyProcesses(where: ProcessWhereInput): BatchPayload!
  createSource(data: SourceCreateInput!): Source!
  updateSource(data: SourceUpdateInput!, where: SourceWhereUniqueInput!): Source
  updateManySources(data: SourceUpdateManyMutationInput!, where: SourceWhereInput): BatchPayload!
  upsertSource(where: SourceWhereUniqueInput!, create: SourceCreateInput!, update: SourceUpdateInput!): Source!
  deleteSource(where: SourceWhereUniqueInput!): Source
  deleteManySources(where: SourceWhereInput): BatchPayload!
  createThought(data: ThoughtCreateInput!): Thought!
  updateThought(data: ThoughtUpdateInput!, where: ThoughtWhereUniqueInput!): Thought
  updateManyThoughts(data: ThoughtUpdateManyMutationInput!, where: ThoughtWhereInput): BatchPayload!
  upsertThought(where: ThoughtWhereUniqueInput!, create: ThoughtCreateInput!, update: ThoughtUpdateInput!): Thought!
  deleteThought(where: ThoughtWhereUniqueInput!): Thought
  deleteManyThoughts(where: ThoughtWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Path {
  id: ID!
  key: String!
  title: String!
  feelings: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  userId: ID!
}

type PathConnection {
  pageInfo: PageInfo!
  edges: [PathEdge]!
  aggregate: AggregatePath!
}

input PathCreatefeelingsInput {
  set: [String!]
}

input PathCreateInput {
  key: String!
  title: String!
  feelings: PathCreatefeelingsInput
  userId: ID!
}

type PathEdge {
  node: Path!
  cursor: String!
}

enum PathOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  userId_ASC
  userId_DESC
}

type PathPreviousValues {
  id: ID!
  key: String!
  title: String!
  feelings: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  userId: ID!
}

type PathSubscriptionPayload {
  mutation: MutationType!
  node: Path
  updatedFields: [String!]
  previousValues: PathPreviousValues
}

input PathSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PathWhereInput
  AND: [PathSubscriptionWhereInput!]
  OR: [PathSubscriptionWhereInput!]
  NOT: [PathSubscriptionWhereInput!]
}

input PathUpdatefeelingsInput {
  set: [String!]
}

input PathUpdateInput {
  key: String
  title: String
  feelings: PathUpdatefeelingsInput
  userId: ID
}

input PathUpdateManyMutationInput {
  key: String
  title: String
  feelings: PathUpdatefeelingsInput
  userId: ID
}

input PathWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
  AND: [PathWhereInput!]
  OR: [PathWhereInput!]
  NOT: [PathWhereInput!]
}

input PathWhereUniqueInput {
  id: ID
  key: String
}

type Process {
  id: ID!
  key: String!
  title: String!
  sources: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  userId: ID!
}

type ProcessConnection {
  pageInfo: PageInfo!
  edges: [ProcessEdge]!
  aggregate: AggregateProcess!
}

input ProcessCreateInput {
  key: String!
  title: String!
  sources: ProcessCreatesourcesInput
  userId: ID!
}

input ProcessCreatesourcesInput {
  set: [String!]
}

type ProcessEdge {
  node: Process!
  cursor: String!
}

enum ProcessOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  userId_ASC
  userId_DESC
}

type ProcessPreviousValues {
  id: ID!
  key: String!
  title: String!
  sources: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  userId: ID!
}

type ProcessSubscriptionPayload {
  mutation: MutationType!
  node: Process
  updatedFields: [String!]
  previousValues: ProcessPreviousValues
}

input ProcessSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProcessWhereInput
  AND: [ProcessSubscriptionWhereInput!]
  OR: [ProcessSubscriptionWhereInput!]
  NOT: [ProcessSubscriptionWhereInput!]
}

input ProcessUpdateInput {
  key: String
  title: String
  sources: ProcessUpdatesourcesInput
  userId: ID
}

input ProcessUpdateManyMutationInput {
  key: String
  title: String
  sources: ProcessUpdatesourcesInput
  userId: ID
}

input ProcessUpdatesourcesInput {
  set: [String!]
}

input ProcessWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
  AND: [ProcessWhereInput!]
  OR: [ProcessWhereInput!]
  NOT: [ProcessWhereInput!]
}

input ProcessWhereUniqueInput {
  id: ID
  key: String
}

type Query {
  character(where: CharacterWhereUniqueInput!): Character
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character]!
  charactersConnection(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CharacterConnection!
  feeling(where: FeelingWhereUniqueInput!): Feeling
  feelings(where: FeelingWhereInput, orderBy: FeelingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Feeling]!
  feelingsConnection(where: FeelingWhereInput, orderBy: FeelingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FeelingConnection!
  path(where: PathWhereUniqueInput!): Path
  paths(where: PathWhereInput, orderBy: PathOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Path]!
  pathsConnection(where: PathWhereInput, orderBy: PathOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PathConnection!
  process(where: ProcessWhereUniqueInput!): Process
  processes(where: ProcessWhereInput, orderBy: ProcessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Process]!
  processesConnection(where: ProcessWhereInput, orderBy: ProcessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProcessConnection!
  source(where: SourceWhereUniqueInput!): Source
  sources(where: SourceWhereInput, orderBy: SourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Source]!
  sourcesConnection(where: SourceWhereInput, orderBy: SourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SourceConnection!
  thought(where: ThoughtWhereUniqueInput!): Thought
  thoughts(where: ThoughtWhereInput, orderBy: ThoughtOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Thought]!
  thoughtsConnection(where: ThoughtWhereInput, orderBy: ThoughtOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ThoughtConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Source {
  id: ID!
  key: String!
  title: String!
  feelings: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  userId: ID!
}

type SourceConnection {
  pageInfo: PageInfo!
  edges: [SourceEdge]!
  aggregate: AggregateSource!
}

input SourceCreatefeelingsInput {
  set: [String!]
}

input SourceCreateInput {
  key: String!
  title: String!
  feelings: SourceCreatefeelingsInput
  userId: ID!
}

type SourceEdge {
  node: Source!
  cursor: String!
}

enum SourceOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  userId_ASC
  userId_DESC
}

type SourcePreviousValues {
  id: ID!
  key: String!
  title: String!
  feelings: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
  userId: ID!
}

type SourceSubscriptionPayload {
  mutation: MutationType!
  node: Source
  updatedFields: [String!]
  previousValues: SourcePreviousValues
}

input SourceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SourceWhereInput
  AND: [SourceSubscriptionWhereInput!]
  OR: [SourceSubscriptionWhereInput!]
  NOT: [SourceSubscriptionWhereInput!]
}

input SourceUpdatefeelingsInput {
  set: [String!]
}

input SourceUpdateInput {
  key: String
  title: String
  feelings: SourceUpdatefeelingsInput
  userId: ID
}

input SourceUpdateManyMutationInput {
  key: String
  title: String
  feelings: SourceUpdatefeelingsInput
  userId: ID
}

input SourceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
  AND: [SourceWhereInput!]
  OR: [SourceWhereInput!]
  NOT: [SourceWhereInput!]
}

input SourceWhereUniqueInput {
  id: ID
  key: String
}

type Subscription {
  character(where: CharacterSubscriptionWhereInput): CharacterSubscriptionPayload
  feeling(where: FeelingSubscriptionWhereInput): FeelingSubscriptionPayload
  path(where: PathSubscriptionWhereInput): PathSubscriptionPayload
  process(where: ProcessSubscriptionWhereInput): ProcessSubscriptionPayload
  source(where: SourceSubscriptionWhereInput): SourceSubscriptionPayload
  thought(where: ThoughtSubscriptionWhereInput): ThoughtSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Thought {
  id: ID!
  character: ID
  thought: String!
  quality: Boolean
  source: ID
  process: ID
  path: ID
  feeling: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  prayedAt: DateTime
  sharedAt: DateTime
  amendedAt: DateTime
  resolvedAt: DateTime
  userId: ID!
}

type ThoughtConnection {
  pageInfo: PageInfo!
  edges: [ThoughtEdge]!
  aggregate: AggregateThought!
}

input ThoughtCreateInput {
  character: ID
  thought: String!
  quality: Boolean
  source: ID
  process: ID
  path: ID
  feeling: ID!
  prayedAt: DateTime
  sharedAt: DateTime
  amendedAt: DateTime
  resolvedAt: DateTime
  userId: ID!
}

type ThoughtEdge {
  node: Thought!
  cursor: String!
}

enum ThoughtOrderByInput {
  id_ASC
  id_DESC
  character_ASC
  character_DESC
  thought_ASC
  thought_DESC
  quality_ASC
  quality_DESC
  source_ASC
  source_DESC
  process_ASC
  process_DESC
  path_ASC
  path_DESC
  feeling_ASC
  feeling_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  prayedAt_ASC
  prayedAt_DESC
  sharedAt_ASC
  sharedAt_DESC
  amendedAt_ASC
  amendedAt_DESC
  resolvedAt_ASC
  resolvedAt_DESC
  userId_ASC
  userId_DESC
}

type ThoughtPreviousValues {
  id: ID!
  character: ID
  thought: String!
  quality: Boolean
  source: ID
  process: ID
  path: ID
  feeling: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  prayedAt: DateTime
  sharedAt: DateTime
  amendedAt: DateTime
  resolvedAt: DateTime
  userId: ID!
}

type ThoughtSubscriptionPayload {
  mutation: MutationType!
  node: Thought
  updatedFields: [String!]
  previousValues: ThoughtPreviousValues
}

input ThoughtSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ThoughtWhereInput
  AND: [ThoughtSubscriptionWhereInput!]
  OR: [ThoughtSubscriptionWhereInput!]
  NOT: [ThoughtSubscriptionWhereInput!]
}

input ThoughtUpdateInput {
  character: ID
  thought: String
  quality: Boolean
  source: ID
  process: ID
  path: ID
  feeling: ID
  prayedAt: DateTime
  sharedAt: DateTime
  amendedAt: DateTime
  resolvedAt: DateTime
  userId: ID
}

input ThoughtUpdateManyMutationInput {
  character: ID
  thought: String
  quality: Boolean
  source: ID
  process: ID
  path: ID
  feeling: ID
  prayedAt: DateTime
  sharedAt: DateTime
  amendedAt: DateTime
  resolvedAt: DateTime
  userId: ID
}

input ThoughtWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  character: ID
  character_not: ID
  character_in: [ID!]
  character_not_in: [ID!]
  character_lt: ID
  character_lte: ID
  character_gt: ID
  character_gte: ID
  character_contains: ID
  character_not_contains: ID
  character_starts_with: ID
  character_not_starts_with: ID
  character_ends_with: ID
  character_not_ends_with: ID
  thought: String
  thought_not: String
  thought_in: [String!]
  thought_not_in: [String!]
  thought_lt: String
  thought_lte: String
  thought_gt: String
  thought_gte: String
  thought_contains: String
  thought_not_contains: String
  thought_starts_with: String
  thought_not_starts_with: String
  thought_ends_with: String
  thought_not_ends_with: String
  quality: Boolean
  quality_not: Boolean
  source: ID
  source_not: ID
  source_in: [ID!]
  source_not_in: [ID!]
  source_lt: ID
  source_lte: ID
  source_gt: ID
  source_gte: ID
  source_contains: ID
  source_not_contains: ID
  source_starts_with: ID
  source_not_starts_with: ID
  source_ends_with: ID
  source_not_ends_with: ID
  process: ID
  process_not: ID
  process_in: [ID!]
  process_not_in: [ID!]
  process_lt: ID
  process_lte: ID
  process_gt: ID
  process_gte: ID
  process_contains: ID
  process_not_contains: ID
  process_starts_with: ID
  process_not_starts_with: ID
  process_ends_with: ID
  process_not_ends_with: ID
  path: ID
  path_not: ID
  path_in: [ID!]
  path_not_in: [ID!]
  path_lt: ID
  path_lte: ID
  path_gt: ID
  path_gte: ID
  path_contains: ID
  path_not_contains: ID
  path_starts_with: ID
  path_not_starts_with: ID
  path_ends_with: ID
  path_not_ends_with: ID
  feeling: ID
  feeling_not: ID
  feeling_in: [ID!]
  feeling_not_in: [ID!]
  feeling_lt: ID
  feeling_lte: ID
  feeling_gt: ID
  feeling_gte: ID
  feeling_contains: ID
  feeling_not_contains: ID
  feeling_starts_with: ID
  feeling_not_starts_with: ID
  feeling_ends_with: ID
  feeling_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  prayedAt: DateTime
  prayedAt_not: DateTime
  prayedAt_in: [DateTime!]
  prayedAt_not_in: [DateTime!]
  prayedAt_lt: DateTime
  prayedAt_lte: DateTime
  prayedAt_gt: DateTime
  prayedAt_gte: DateTime
  sharedAt: DateTime
  sharedAt_not: DateTime
  sharedAt_in: [DateTime!]
  sharedAt_not_in: [DateTime!]
  sharedAt_lt: DateTime
  sharedAt_lte: DateTime
  sharedAt_gt: DateTime
  sharedAt_gte: DateTime
  amendedAt: DateTime
  amendedAt_not: DateTime
  amendedAt_in: [DateTime!]
  amendedAt_not_in: [DateTime!]
  amendedAt_lt: DateTime
  amendedAt_lte: DateTime
  amendedAt_gt: DateTime
  amendedAt_gte: DateTime
  resolvedAt: DateTime
  resolvedAt_not: DateTime
  resolvedAt_in: [DateTime!]
  resolvedAt_not_in: [DateTime!]
  resolvedAt_lt: DateTime
  resolvedAt_lte: DateTime
  resolvedAt_gt: DateTime
  resolvedAt_gte: DateTime
  userId: ID
  userId_not: ID
  userId_in: [ID!]
  userId_not_in: [ID!]
  userId_lt: ID
  userId_lte: ID
  userId_gt: ID
  userId_gte: ID
  userId_contains: ID
  userId_not_contains: ID
  userId_starts_with: ID
  userId_not_starts_with: ID
  userId_ends_with: ID
  userId_not_ends_with: ID
  AND: [ThoughtWhereInput!]
  OR: [ThoughtWhereInput!]
  NOT: [ThoughtWhereInput!]
}

input ThoughtWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  password: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
}

input UserUpdateManyMutationInput {
  email: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    