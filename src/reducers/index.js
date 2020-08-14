/* eslint-disable implicit-arrow-linebreak */
import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      if (state.myList.find((item) => item.id === action.payload.id)) {
        return { ...state };
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case actions.delFavorite:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };
    case actions.loginRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.logoutRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.registerRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.getVideoSource:
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          {},
      };
    case actions.findVideo:
      if (action.payload.length === 0) {
        return {
          ...state,
          searchResults: [],
        };
      }
      return {
        ...state,
        searchResults:
          state.trends
            .concat(state.originals)
            .filter((item) =>
              item.title.toLowerCase().includes(action.payload)
            ) || [],
      };
    default:
      return state;
  }
};

export default reducer;
