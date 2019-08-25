import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleWare=applyMiddleware(thunk)(createStore);

const store=createStoreWithMiddleWare(reducers);

export default store;