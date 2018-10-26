import uuid from 'uuid/v4';

const create = ({ expenseName, expenseAmount, categoryId }) => {
  return {
    type: 'ITEM_CREATE',
    payload: {
      id: uuid(),
      expenseName,
      expenseAmount,
      categoryId,
      createdOn: new Date(),
    },
  };
};
const update = (item) => {
  return {
    type: 'ITEM_UPDATE',
    payload: item,
  };
};

const remove = (item) => {
  return {
    type: 'ITEM_REMOVE',
    payload: item,
  };
};

export { create, update, remove };
