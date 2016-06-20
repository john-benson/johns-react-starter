import rootReducer from './reducer';
import { createStore, compose, applyMiddleware } from 'redux';
import DevTools from '../devtools';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { historyProvider } from './history';

const enchancers = [
  applyMiddleware(thunk, routerMiddleware(historyProvider)),
  DevTools.instrument()
];

const enchancer = compose.apply(null, enchancers);

const configureStore = () => {
  const store = createStore(rootReducer, enchancer);

  if(module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(require('./reducer'));
    });
  }

  return store;
}

export default configureStore;
