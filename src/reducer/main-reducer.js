import { combineReducers } from 'redux';
import categories from './category-reducer';
import items from './item-reducer';

export default combineReducers({
  categories,
  items,
});
