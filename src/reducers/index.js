import {combineReducers} from 'redux';
import stage from './StageReducer';

const rootreducer = combineReducers({
    stage
});

export default rootreducer;