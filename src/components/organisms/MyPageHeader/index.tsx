import { MyPageEditIcon, UserImg } from 'assets/images';
import { Link } from 'components/atoms';
import { MyPageSlider } from 'components/molecules';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import { IMyPageHeader } from 'types/myPage.type';
import { EditIcon, Tag, Text, TextEng, Thumbnail, UserInfo, Wrapper } from './style';

export interface IProps {
  userInfo: IMyPageHeader | null;
}

function MyPageHeader({ userInfo }: IProps): React.ReactElement {
  const globalUserInfo = useRecoilValue(userState);

  return (
    <Wrapper>
      <UserInfo>
        <Thumbnail src={globalUserInfo ? globalUserInfo.img : UserImg} height="75px" circular={true} />
        <Text>{globalUserInfo?.nickname}님의</Text>
        <TextEng>MY O2</TextEng>
        <Link to="/setting">
          <EditIcon src={MyPageEditIcon} />
        </Link>
        <Tag>
          {globalUserInfo?.interest?.map((tag, idx) => (
            <span key={idx}>#{tag} </span>
          ))}
        </Tag>
      </UserInfo>
      <div>
        <MyPageSlider userInfo={userInfo} />
      </div>
    </Wrapper>
  );
}

export default MyPageHeader;
