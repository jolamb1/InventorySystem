/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      inventory {
        items {
          id
          quantity
          createdAt
          updatedAt
          locationInventoryId
          inventoryItemId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        inventory {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInventory = /* GraphQL */ `
  query GetInventory($id: ID!) {
    getInventory(id: $id) {
      id
      item {
        id
        name
        unitPrice
        createdAt
        updatedAt
      }
      quantity
      location {
        id
        name
        inventory {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      locationInventoryId
      inventoryItemId
    }
  }
`;
export const listInventories = /* GraphQL */ `
  query ListInventories(
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        item {
          id
          name
          unitPrice
          createdAt
          updatedAt
        }
        quantity
        location {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        locationInventoryId
        inventoryItemId
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      unitPrice
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $id: ID
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listItems(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        unitPrice
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
