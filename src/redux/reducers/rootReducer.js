// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import ecommerce from '@src/views/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  ecommerce
})

export default rootReducer
