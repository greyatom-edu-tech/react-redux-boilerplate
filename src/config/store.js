import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from 'shared/reducers/root';
import { initialAppState } from 'screens/App/shared/utils';

const store = createStore(rootReducer, {
  app: initialAppState,
}, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
