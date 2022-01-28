/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createInventory = /* GraphQL */ `
  mutation CreateInventory(
    $input: CreateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    createInventory(input: $input, condition: $condition) {
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
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory(
    $input: UpdateInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    updateInventory(input: $input, condition: $condition) {
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
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory(
    $input: DeleteInventoryInput!
    $condition: ModelInventoryConditionInput
  ) {
    deleteInventory(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      name
      unitPrice
      createdAt
      updatedAt
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      name
      unitPrice
      createdAt
      updatedAt
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      name
      unitPrice
      createdAt
      updatedAt
    }
  }
`;
