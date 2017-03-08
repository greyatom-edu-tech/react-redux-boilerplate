import { combineReducers } from 'redux';

import app from 'screens/App/reducers';
import routing from './routing';

export default combineReducers({ app, routing });
