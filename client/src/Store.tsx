import {CombinedReducers} from './Reducers/CombinedReducers';

import {createStore} from 'redux';
export default createStore(CombinedReducers);