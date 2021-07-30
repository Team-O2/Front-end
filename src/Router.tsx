import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import {
  AdminChallengeList,
  AdminChallengeOpen,
  AdminWrite,
  ChallengeEdit,
  ChallengeList,
  ChallengeRegister,
  ChallengeWrite,
  Concert,
  ConcertDetail,
  FindPwd,
  Home,
  Join,
  Login,
  MyChallengeList,
  MyPage,
  Notice,
  NoticeDetail,
  ScrappedChallengeList,
  ScrappedConcertList,
  SetPwd,
  Setting,
} from 'pages';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Styled from 'styled-components';

function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/concert" component={Concert} />
        <Route exact path="/concert/:id" component={ConcertDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adminwrite/:menu" component={AdminWrite} />
        <Route exact path="/adminchallengeopen" component={AdminChallengeOpen} />
        <Route exact path="/adminchallengelist" component={AdminChallengeList} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/findPwd" component={FindPwd} />
        <Route exact path="/setPwd" component={SetPwd} />
        <Route exact path="/challenge/:generationNum" component={ChallengeList} />
        <Route exact path="/challengeRegister" component={ChallengeRegister} />
        <Route exact path="/write" component={ChallengeWrite} />
        <Route exact path="/notice" component={Notice} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/edit/:id" component={ChallengeEdit} />
        <Route exact path="/notice/:id" component={NoticeDetail} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/mypage/challenge/scrap" component={ScrappedChallengeList} />
        <Route exact path="/mypage/challenge/mine" component={MyChallengeList} />
        <Route exact path="/mypage/concert/scrap" component={ScrappedConcertList} />
        <Route
          component={() => (
            <ForbiddenComponent>
              <p>404 Not Found</p>
            </ForbiddenComponent>
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

const ForbiddenComponent = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vw;
`;

export default Router;
