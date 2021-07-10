import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import WriteLearnMyself from 'components/templates/LearnMyself/ChallengeWrite';
import LearnMyself from 'components/templates/LearnMyself/ChallengeList';
import EditLearnMyself from 'components/templates/LearnMyself/ChallengeEdit';
import ChallengeRegister from 'components/templates/LearnMyself/ChallengeRegister';

function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/challenge" component={LearnMyself} />
        <Route exact path="/challengeRegister" component={ChallengeRegister} />
        <Route exact path="/write" component={WriteLearnMyself} />
        <Route exact path="/edit" component={WriteLearnMyself} />
        <Route component={() => <div>404 Not Found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
