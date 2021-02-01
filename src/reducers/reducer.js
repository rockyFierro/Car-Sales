
import { initialState } from './initState'
import '../actions/actionTypes'
import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actionTypes'

export const reducer = (state = initialState, action) => {

  switch (action.type){
    case ADD_FEATURE:
      let total = state.car.price;
      return {
        ...state,
        additionalFeatures: state.additionalFeatures.filter(
          (feature) => feature.id !== action.payload.id
        ),
        car: {
          ...state.car,
          price: (total += action.payload.price),
          features: [...state.car.features, action.payload],
        },
      };
    case REMOVE_FEATURE:
      let removeTotal = state.car.price;
      return {
        ...state,
        car: {
          ...state.car,
          price: (removeTotal -= action.payload.price),
          features: state.car.features.filter(
            (feature) => feature.id !== action.payload.id
          ),
        },
        additionalFeatures: [...state.additionalFeatures, action.payload],
      };
    default: return state
  }
}