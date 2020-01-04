import * as Constants from '../constants/constants';

const inititalState = {
  categroyListData: [],
};

export default function categoryReducer(state = inititalState, action) {
  switch (action.type) {
    case Constants.FETCH_SEARCH_CATEGORY_ID_SUCCESS:
    case Constants.FETCH_SEARCH_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        categroyListData: action.payload,
      });

    default:
      return state;
  }
}
