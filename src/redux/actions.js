export const ACTIONS = {
  SET_LISTING: 'SET_LISTING',
  SET_LOADING: 'SET_LOADING',
  SET_TEXT: 'SET_TEXT',
  SET_PAGE: 'SET_PAGE',
  SET_DESK: 'SET_DESK'
}

export const setListing = (listing) => {
  return {
    type: ACTIONS.SET_LISTING,
    payload: listing
  }
}

export const setIsLoading = (isLoading) => {
  return {
    type: ACTIONS.SET_LOADING,
    payload: isLoading
  }
}

export const setText = (text) => {
  return {
    type: ACTIONS.SET_TEXT,
    payload: text
  }
}

export const setPage = (page) => {
  return {
    type: ACTIONS.SET_PAGE,
    payload: page
  }
}

export const setDesk = (desk) => {
  return {
    type: ACTIONS.SET_DESK,
    payload: desk
  }
}