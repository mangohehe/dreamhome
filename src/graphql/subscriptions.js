/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResearches = /* GraphQL */ `
  subscription OnCreateResearches(
    $filter: ModelSubscriptionResearchesFilterInput
  ) {
    onCreateResearches(filter: $filter) {
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
export const onUpdateResearches = /* GraphQL */ `
  subscription OnUpdateResearches(
    $filter: ModelSubscriptionResearchesFilterInput
  ) {
    onUpdateResearches(filter: $filter) {
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
export const onDeleteResearches = /* GraphQL */ `
  subscription OnDeleteResearches(
    $filter: ModelSubscriptionResearchesFilterInput
  ) {
    onDeleteResearches(filter: $filter) {
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
export const onCreateNews = /* GraphQL */ `
  subscription OnCreateNews($filter: ModelSubscriptionNewsFilterInput) {
    onCreateNews(filter: $filter) {
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
export const onUpdateNews = /* GraphQL */ `
  subscription OnUpdateNews($filter: ModelSubscriptionNewsFilterInput) {
    onUpdateNews(filter: $filter) {
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
export const onDeleteNews = /* GraphQL */ `
  subscription OnDeleteNews($filter: ModelSubscriptionNewsFilterInput) {
    onDeleteNews(filter: $filter) {
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
