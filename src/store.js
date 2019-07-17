
import {createStore, combineReducers} from 'redux';
import navigationReducer from './reducers/navigation.reducer'


const rootReducer = combineReducers({
    navigation:navigationReducer, 

});

export const store = createStore(rootReducer);