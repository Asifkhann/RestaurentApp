import * as Constants from '../constants/constants';

const inititalState = {
  categoryMessage: null,
  categoryFetching: false,
  categoryFetched: false,
  categoryError: false,
};

export default (state = inititalState, action) => {
  switch (action.type) {
    case Constants.FETCH_CATEGORY_REQUEST:
      return Object.assign({}, state, {
        categoryFetched: false,
        categoryFetching: true,
        categoryError: null,
      });
    case Constants.FETCH_CATEGORY_SUCCESS:
      return Object.assign({}, state, {
        categoryFetched: true,
        categoryFetching: false,
      });
    case Constants.FETCH_CATEGORY_FAILURE:
      return Object.assign({}, state, {
        categoryMessage: 'loading category failed',
        categoryFetching: false,
        categoryError: action.payload,
      });

    default:
      return state;
  }
}
