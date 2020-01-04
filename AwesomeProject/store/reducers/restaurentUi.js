import * as Constants from '../constants/constants';

const inititalState = {
  categoryMessage: null,
  categoryListFetching: false,
  categoryListFetched: false,
  categoryListError: false,
};

export default function categoryListUiReducer(state = inititalState, action) {
  switch (action.type) {
    case Constants.FETCH_SEARCH_CATEGORY_ID_REQUEST:
    case Constants.FETCH_SEARCH_CATEGORY_REQUEST:
      return Object.assign({}, state, {
        categoryListFetched: false,
        categoryListFetching: true,
        categoryListError: null,
      });
    case Constants.FETCH_SEARCH_CATEGORY_ID_SUCCESS:
    case Constants.FETCH_SEARCH_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        categoryListFetched: true,
        categoryListFetching: false,
      });
    case Constants.FETCH_SEARCH_CATEGORY_ID_FAILURE:
    case Constants.FETCH_SEARCH_CATEGORY_FAILURE:
      return Object.assign({}, state, {
        categoryMessage: 'loading category failed',
        categoryListFetching: false,
        categoryListError: action.payload,
      });

    default:
      return state;
  }
}
