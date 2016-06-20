import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';

export const historyProvider = browserHistory;

const createHistory = (store) => {
  return syncHistoryWithStore(historyProvider, store);
};

export default createHistory;
