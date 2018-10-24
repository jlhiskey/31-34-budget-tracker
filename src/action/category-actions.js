export const create = ({ expenseName, expenseAmount }) => {
  return {
    type: 'CATEGORY_CREATE',
    payload: {
      id: Math.random(),
      expenseName,
      expenseAmount,
      createdOn: new Date(),
    },
  };
};
export const update = (category) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

export const remove = (category) => {
  return {
    type: 'CATEGORY_REMOVE',
    payload: category,
  };
};
