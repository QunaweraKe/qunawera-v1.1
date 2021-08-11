import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

//from web font
import WebFont from 'webfontloader';
// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

// Local
import App from './components/App';
import theme from './theme';
import store from './redux/store';
import { useEffect } from 'react';

ReactDOM.render(

  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <App />
        
      </Router>
    </ThemeProvider>
  </Provider>,
  
  document.getElementById('app'),
  
);

if (module.hot) {
  module.hot.accept();
}
useEffect(()=> {
  WebFont.load({
    google: {
      families: [ 'sans-serif']
    }
  });
  },[]);