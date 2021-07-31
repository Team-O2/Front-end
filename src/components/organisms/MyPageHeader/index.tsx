import { MyPageEditIcon, UserImg } from 'assets/images';
import { Icon, Link } from 'components/atoms';
import { MyPageSlider } from 'components/molecules';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import Styled from 'styled-components';
import { palette } from 'styled-tools';
import { IMyPageHeader } from 'types/myPage.type';

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

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .dp1 {
    color: ${palette('grayscale', 0)};
  }

  .dp1_eng {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
  }

  .userInfo {
    margin-right: 50px;

    &__thumbnail {
      width : 74px;
      height : 74px;
      margin-bottom: 36px;
      border: solid 1px ${palette('grayscale', 0)};
    }

    &__editIcon {
      margin: 10px 0 0 20px;
    }

    &__tag {
      margin-top: 40px;
      color: ${palette('grayscale', 1)};
    }
  }
`;

export default MyPageHeader;
