import { SET_VISIBILITY_FILTER } from '../actions/videos';

const visibilityFilter = (state = 'All', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;

export const getVisibilityFilter = (state) =>
  state.visibilityFilter;
