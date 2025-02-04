import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppProvider } from '@edx/frontend-platform/react';

import Footer from '@edx/frontend-component-footer';
import Header from '@edx/frontend-component-header';

import { routePath } from 'data/constants/app';
import store from 'data/store';
import GradebookPage from 'containers/GradebookPage';
import './App.scss';
import Head from './head/Head';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import messages from './i18n';

const App = () => (
  <AppProvider store={store}>
    <IntlProvider defaultLocale='mn' locale='mn' messages={messages.mn}>
      <Head />
      <Router>
        <div>
          <Header />
          <main>
            <Switch>
              <Route
                exact
                path={routePath}
                component={GradebookPage}
              />
            </Switch>
          </main>
          <Footer logo={process.env.LOGO_POWERED_BY_OPEN_EDX_URL_SVG} />
        </div>
      </Router>
    </IntlProvider>
  </AppProvider>
);

export default App;
