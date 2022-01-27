/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      name
      inventory {
        items {
          id
          quantity
          createdAt
          updatedAt
          locationInventoryId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      name
      inventory {
        items {
          id
          quantity
          createdAt
          updatedAt
          locationInventoryId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      name
      inventory {
        items {
          id
          quantity
          createdAt
          updatedAt
          locationInventoryId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory {
    onCreateInventory {
      id
      item {
        id
        name
        unitPrice
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
      locationInventoryId
    }
  }
`;
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory {
    onUpdateInventory {
      id
      item {
        id
        name
        unitPrice
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
      locationInventoryId
    }
  }
`;
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory {
    onDeleteInventory {
      id
      item {
        id
        name
        unitPrice
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
      locationInventoryId
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
      id
      name
      unitPrice
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
      id
      name
      unitPrice
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
      id
      name
      unitPrice
      createdAt
      updatedAt
    }
  }
`;
