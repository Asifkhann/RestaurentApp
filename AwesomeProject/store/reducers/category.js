import * as Constants from '../constants/constants';

const inititalState = {
  categroyData: [],
};

export default function categoryReducer(state = inititalState, action) {
  switch (action.type) {
    case Constants.FETCH_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        categroyData: action.payload,
      });
      
    default:
      return state;
  }
}
