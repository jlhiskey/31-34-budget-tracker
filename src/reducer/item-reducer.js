const emptyState = {};

export default (state = emptyState, { type, payload }) => {
  let categoryId;
  let categoryItems;
  let updatedItems;
  let updatedState;

  switch (type) {
    case 'CATEGORY_CREATE':
      return { ...state, [payload.id]: [] };
    case 'CATEGORY_REMOVE':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'ITEM_CREATE':
            categoryId = payload.categoryId; // eslint-disable-line
      categoryItems = state[categoryId];
      updatedItems = [...categoryItems, payload];
      return { ...state, [categoryId]: updatedItems };
    case 'ITEM_UPDATE':
            categoryId = payload.categoryId; // eslint-disable-line
      categoryItems = state[categoryId];
      updatedItems = categoryItems.map(item => (item.id === payload.id ? payload : item));
      return { ...state, [categoryId]: updatedItems };
    case 'ITEM_REMOVE':
            categoryId = payload.categoryId; // eslint-disable-line
      categoryItems = state[categoryId];
      updatedItems = categoryItems.filter(item => item.id !== payload.id);
      return { ...state, [categoryId]: updatedItems };
    default:
      return state;
  }
};
