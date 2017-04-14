/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM'

/*
 * action creators
 */

export function addItem(name, imagePath, category, quantity, description) {
  return { type: ADD_ITEM, name, imagePath, category, quantity, description }
}
