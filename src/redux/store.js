import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { carReducer } from './features/car/carReducer'


export const store = createStore(carReducer, composeWithDevTools())