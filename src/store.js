import {createStore} from 'redux';
import reducer from './reducers';
import { createDispatchHook } from 'react-redux';

const store = createStore(reducer);

export default store;