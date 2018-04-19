import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './Styles/styles.scss';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();