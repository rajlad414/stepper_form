import { combineReducers } from 'redux';
import formDataReducer from './reducer';

const rootReducer = combineReducers({
   formData: formDataReducer,
});

export default rootReducer;
