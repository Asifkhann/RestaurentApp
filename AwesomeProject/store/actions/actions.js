import * as Constants from '../constants/constants';
import axios from 'axios';

export const listCategory = () => dispatch => {
  dispatch({
    type: Constants.FETCH_CATEGORY_REQUEST,
  });

  axios
    .get('https://developers.zomato.com/api/v2.1/categories', {
      headers: {
        user_key: '31f2a398c47ec5be1cc537b5d9ff206c',
        Accept: 'application/json',
      },
    })
    .then(data => {
      dispatch({
        type: Constants.FETCH_CATEGORY_SUCCESS,
        payload: data.data.categories,
      });
    })
    .catch(error => {
      dispatch({
        type: Constants.FETCH_CATEGORY_FAILURE,
        payload: error,
      });
    });
};

export const listCategoryId = id => dispatch => {
  dispatch({
    type: Constants.FETCH_SEARCH_CATEGORY_REQUEST,
  });

  axios
    .get(`https://developers.zomato.com/api/v2.1/search?category=${id}`, {
      headers: {
        user_key: '31f2a398c47ec5be1cc537b5d9ff206c',
        category: id,
        Accept: 'application/json',
      },
    })
    .then(data => {
      dispatch({
        type: Constants.FETCH_SEARCH_CATEGORY_SUCCESS,
        payload: data.data.restaurants,
      });
    })
    .catch(error => {
      dispatch({
        type: Constants.FETCH_SEARCH_CATEGORY_FAILURE,
        payload: error,
      });
    });
};

export const listCategorySearch = search => dispatch => {
  dispatch({
    type: Constants.FETCH_SEARCH_CATEGORY_REQUEST,
  });

  axios
    .get(`https://developers.zomato.com/api/v2.1/search?q=${search}&count=10`, {
      headers: {
        user_key: '31f2a398c47ec5be1cc537b5d9ff206c',
        Accept: 'application/json',
      },
    })
    .then(data => {
      dispatch({
        type: Constants.FETCH_SEARCH_CATEGORY_SUCCESS,
        payload: data.data.restaurants,
      });
    })
    .catch(error => {
      dispatch({
        type: Constants.FETCH_SEARCH_CATEGORY_FAILURE,
        payload: error,
      });
    });
};
