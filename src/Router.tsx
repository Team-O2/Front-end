import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import { MyPage, Setting } from 'pages';
import AdminChallengeList from 'pages/AdminChallengeList';
import FindPwd from 'pages/FindPwd';
import EditLearnMyself from 'pages/LearnMyself/template/ChallengeEdit';
import LearnMyself from 'pages/LearnMyself/template/ChallengeList';
import ChallengeRegister from 'pages/LearnMyself/template/ChallengeRegister';
import WriteLearnMyself from 'pages/LearnMyself/template/ChallengeWrite';
import Notice from 'pages/Notice';
import NoticeDetail from 'pages/Notice/NoticeDetail';
import SetPwd from 'pages/SetPwd';
import ShareTogether from 'pages/ShareTogether';
import ShareTogetherDetail from 'pages/ShareTogether/ShareTogetherDetail';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Styled from 'styled-components';
import AdminChallengeOpen from './pages/AdminChallengeOpen';
import AdminWrite from './pages/AdminWrite';
import Home from './pages/Home';
import Join from './pages/Join/index';
import Login from './pages/Login';
import MyChallengeList from './pages/MyPage/MyChallengeList/index';
import ScrappedLearnMyself from './pages/MyPage/ScrappedLearnMyself/index';
import ScrappedShareTogether from './pages/MyPage/ScrappedShareTogether/index';

function Router(): React.ReactElement {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/concert" component={ShareTogether} />
        <Route exact path="/concert/:id" component={ShareTogetherDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/adminwrite/:menu" component={AdminWrite} />
        <Route exact path="/adminchallengeopen" component={AdminChallengeOpen} />
        <Route exact path="/adminchallengelist" component={AdminChallengeList} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/findPwd" component={FindPwd} />
        <Route exact path="/setPwd" component={SetPwd} />
        <Route exact path="/challenge/:generationNum" component={LearnMyself} />
        <Route exact path="/challengeRegister" component={ChallengeRegister} />
        <Route exact path="/write" component={WriteLearnMyself} />
        <Route exact path="/notice" component={Notice} />
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/edit/:id" component={EditLearnMyself} />
        <Route exact path="/notice/:id" component={NoticeDetail} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/mypage/challenge/scrap" component={ScrappedLearnMyself} />
        <Route exact path="/mypage/challenge/mine" component={MyChallengeList} />
        <Route exact path="/mypage/concert/scrap" component={ScrappedShareTogether} />
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
