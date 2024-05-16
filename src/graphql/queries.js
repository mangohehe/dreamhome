/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResearches = /* GraphQL */ `
  query GetResearches($id: ID!) {
    getResearches(id: $id) {
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
export const listResearches = /* GraphQL */ `
  query ListResearches(
    $filter: ModelResearchesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResearches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getNews = /* GraphQL */ `
  query GetNews($id: ID!) {
    getNews(id: $id) {
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
export const listNews = /* GraphQL */ `
  query ListNews(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      totalCount
      __typename
    }
  }
`;
