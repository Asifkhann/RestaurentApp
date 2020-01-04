import {combineReducers} from 'redux';
import categoryReducer from './category';
import categoryUiReducer from './categoryUi';
import restaurentReducer from './restaurent';
import restaurentUiReducer from './restaurentUi';

const entitiesReducers = combineReducers({
  categoryReducer,
  restaurentReducer,
});

const uiReducers = combineReducers({
  categoryUiReducer,
  restaurentUiReducer,
});

export default combineReducers({
  entities: entitiesReducers,
  ui: uiReducers,
});
