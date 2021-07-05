import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import ShareTogether from 'pages/ShareTogether/index';
import ShareTogetherDetail from 'pages/ShareTogetherDetail/index';
function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/ShareTogether" component={ShareTogether} />
        <Route exact path="/ShareTogetherDetail/:id" component={ShareTogetherDetail} />
        <Route component={() => <div>404 Not Found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
