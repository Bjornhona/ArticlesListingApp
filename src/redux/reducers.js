import {ACTIONS} from './actions';

const DEFAULT_STATE = {
  listing: undefined,
  isLoading: true,
  text: '',
  page: 1,
  desk: undefined
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SET_LISTING:
      return {...state, listing: action.payload}
    case ACTIONS.SET_LOADING:
      return {...state, isLoading: action.payload}
    case ACTIONS.SET_TEXT:
      return {...state, text: action.payload}
    case ACTIONS.SET_PAGE:
      return {...state, page: action.payload}
    case ACTIONS.SET_DESK:
      return {...state, desk: action.payload}
    default:
      return state
  }
}

export default rootReducer;