import { createStore } from 'redux';
import categoryReducer from './reducer/category-reducer';

export default () => {
  return createStore(categoryReducer);
};
