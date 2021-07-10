import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShareTogether from 'pages/ShareTogether';
import ShareTogetherDetail from 'pages/ShareTogetherDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminWrite from './pages/AdminWrite';
import AdminChallengeOpen from './pages/AdminChallengeOpen';
import AdminChallengeList from 'pages/AdminChallengeList';
import Join from './pages/Join/index';
import FindPwd from 'pages/FindPwd';

function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ShareTogether" component={ShareTogether} />
        <Route exact path="/ShareTogetherDetail/:id" component={ShareTogetherDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adminwrite" component={AdminWrite} />
        <Route exact path="/adminchallengeopen" component={AdminChallengeOpen} />
        <Route exact path="/adminchallengelist" component={AdminChallengeList} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/findPwd" component={FindPwd} />
        <Route component={() => <div>404 Not Found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
