import { MyPageEditIcon, UserImg } from 'assets/images';
import { Icon, Link } from 'components/atoms';
import { MyPageSlider } from 'components/molecules';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import { IMyPageHeader } from 'types/myPage.type';
import { Wrapper } from './style';

export interface IProps {
  userInfo: IMyPageHeader | null;
}

function MyPageHeader({ userInfo }: IProps): React.ReactElement {
  const globalUserInfo = useRecoilValue(userState);

  return (
    <Wrapper>
      <div className="userInfo">
        <Icon
          className="userInfo__thumbnail"
          src={globalUserInfo ? globalUserInfo.img : UserImg}
          height="75px"
          circular={true}
        />
        <p className="dp1">{globalUserInfo?.nickname}님의</p>
        <span className="dp1_eng">MY O2</span>
        <Link to="/setting">
          <Icon className="userInfo__editIcon" src={MyPageEditIcon} />
        </Link>
        <div className="userInfo__tag body3">
          {globalUserInfo?.interest?.map((tag, idx) => (
            <span key={idx}>#{tag} </span>
          ))}
        </div>
      </div>
      <div>
        <MyPageSlider userInfo={userInfo} />
      </div>
    </Wrapper>
  );
}

export default MyPageHeader;
