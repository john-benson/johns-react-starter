import React, { PropTypes } from 'react';
import Routes from '../routes';
import DevTools from '../devtools';
import { Provider } from 'react-redux';

const Root = ({ history, store }) => {
  return (
    <Provider store={ store }>
      <div>
        { process.env.NODE_ENV === 'production' ? null : <DevTools />  }
        <Routes history={ history } />
      </div>
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default Root;
