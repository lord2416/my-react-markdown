import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {editMarkdown} from './reducer';

const logger = createLogger();

const reducers = combineReducers({editMarkdown});
const store = createStore(
    reducers,
    applyMiddleware(logger)
);

export default store;