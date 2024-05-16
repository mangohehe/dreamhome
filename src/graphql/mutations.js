/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResearches = /* GraphQL */ `
  mutation CreateResearches(
    $input: CreateResearchesInput!
    $condition: ModelResearchesConditionInput
  ) {
    createResearches(input: $input, condition: $condition) {
      id
      title
      latest_update_date
      authors
      institutions
      abstraction
      summary
      categories
      doi
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateResearches = /* GraphQL */ `
  mutation UpdateResearches(
    $input: UpdateResearchesInput!
    $condition: ModelResearchesConditionInput
  ) {
    updateResearches(input: $input, condition: $condition) {
      id
      title
      latest_update_date
      authors
      institutions
      abstraction
      summary
      categories
      doi
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteResearches = /* GraphQL */ `
  mutation DeleteResearches(
    $input: DeleteResearchesInput!
    $condition: ModelResearchesConditionInput
  ) {
    deleteResearches(input: $input, condition: $condition) {
      id
      title
      latest_update_date
      authors
      institutions
      abstraction
      summary
      categories
      doi
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNews = /* GraphQL */ `
  mutation CreateNews(
    $input: CreateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    createNews(input: $input, condition: $condition) {
      id
      title
      publish_date
      publisher
      summary
      url
      language
      thumbnail
      createdAt
      updatedAt
      translatedTitle
      translatedSummary
      __typename
    }
  }
`;
export const updateNews = /* GraphQL */ `
  mutation UpdateNews(
    $input: UpdateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    updateNews(input: $input, condition: $condition) {
      id
      title
      publish_date
      publisher
      summary
      url
      language
      thumbnail
      createdAt
      updatedAt
      translatedTitle
      translatedSummary
      __typename
    }
  }
`;
export const deleteNews = /* GraphQL */ `
  mutation DeleteNews(
    $input: DeleteNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    deleteNews(input: $input, condition: $condition) {
      id
      title
      publish_date
      publisher
      summary
      url
      language
      thumbnail
      createdAt
      updatedAt
      translatedTitle
      translatedSummary
      __typename
    }
  }
`;
