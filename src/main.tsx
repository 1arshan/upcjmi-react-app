import React, {Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import {IRoute} from 'types/common.type';

import LoadingScreen from 'screens/loading.screen';
import NotFoundScreen from 'screens/404.screen';
import AppHeader from 'components/appHeader';
import {checkUserAction} from 'actions/auth.action';
import Screen from 'components/screen';
import Footer from 'components/footer';
import A2hsPrompt from './components/a2hsPrompt';

interface IStateProps {
  routes: Array<IRoute>;
  connected: null | boolean;
}

interface IDispatchProps {
  checkUser(): any;
}

interface IProps extends IStateProps, IDispatchProps {}

const Main = ({routes, checkUser}: IProps) => {
  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <AppHeader />
      <A2hsPrompt />
      <main>
        <Switch>
          {routes.map((route, index) => (
            <Route
              exact={route.exact === undefined ? true : route.exact}
              path={route.path}
              component={() => <Screen title={route.title} screen={route.screen} />}
              key={index.toString()}
            />
          ))}
          <Route component={NotFoundScreen} />
        </Switch>
      </main>
      <Footer />
    </Suspense>
  );
};

const mapStateToProps = (state: any): IStateProps => ({
  routes: state.navigator.routes,
  connected: state.navigator.connected,
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  checkUser: () => dispatch(checkUserAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
