import EditLearnMyself from 'components/templates/LearnMyself/ChallengeEdit';
import LearnMyself from 'components/templates/LearnMyself/ChallengeList';
import ChallengeRegister from 'components/templates/LearnMyself/ChallengeRegister';
import WriteLearnMyself from 'components/templates/LearnMyself/ChallengeWrite';
import AdminChallengeList from 'pages/AdminChallengeList';
import FindPwd from 'pages/FindPwd';
import Notice from 'pages/Notice';
import ShareTogether from 'pages/ShareTogether';
import ShareTogetherDetail from 'pages/ShareTogetherDetail';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminChallengeOpen from './pages/AdminChallengeOpen';
import AdminWrite from './pages/AdminWrite';
import Home from './pages/Home';
import Join from './pages/Join/index';
import Login from './pages/Login';

function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ShareTogether" component={ShareTogether} />
        <Route exact path="/ShareTogether/:id" component={ShareTogetherDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adminwrite" component={AdminWrite} />
        <Route exact path="/adminchallengeopen" component={AdminChallengeOpen} />
        <Route exact path="/adminchallengelist" component={AdminChallengeList} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/findPwd" component={FindPwd} />
        <Route exact path="/challenge" component={LearnMyself} />
        <Route exact path="/challengeRegister" component={ChallengeRegister} />
        <Route exact path="/write" component={WriteLearnMyself} />
        <Route exact path="/edit" component={EditLearnMyself} />
        <Route exact path="/notice" component={Notice} />
        <Route component={() => <div>404 Not Found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
