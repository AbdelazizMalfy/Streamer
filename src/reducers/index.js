import {  combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducers from './AuthReducer'


export default combineReducers({
   auth: AuthReducers ,
   form: formReducer
});