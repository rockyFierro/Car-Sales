import * as actions from './actionTypes';

export const addFeature = newFeature => ({
  type: actions.ADD_FEATURE,
  payload: newFeature
})

export const removeFeature = removeFeature => ({
  type: actions.REMOVE_FEATURE,
  payload: removeFeature
})