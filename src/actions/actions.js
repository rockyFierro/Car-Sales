import * as action from './actionTypes';

export const addFeature = feature => ({
  type: action.ADD_FEATURE,
  payload: feature
})

export const removeFeature = feature => ({
  type: action.REMOVE_FEATURE,
  payload: feature
})