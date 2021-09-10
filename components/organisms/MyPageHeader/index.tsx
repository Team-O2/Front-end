import { Icon, Link } from 'components/atoms';
import { MyPageSlider } from 'components/molecules';
import { MyPageEditIcon, UserImg } from 'public/assets/images';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import { IMyPageHeader } from 'types/myPage.type';
import { EditIconLinkWrapper, Tag, Text, TextEng, Thumbnail, UserInfo, Wrapper } from './style';

export interface IProps {
  userInfo: IMyPageHeader | null;
}

function MyPageHeader({ userInfo }: IProps): React.ReactElement {
  const globalUserInfo = useRecoilValue(userState);

  return (
    <Wrapper>
      <UserInfo>
        <Thumbnail>
          <Icon src={globalUserInfo ? globalUserInfo.img : UserImg} size={75} circular="true" />
        </Thumbnail>
        <Text>{globalUserInfo?.nickname}님의</Text>
        <TextEng>MY O2</TextEng>
        <EditIconLinkWrapper>
          <Link to="/setting">
            <Icon src={MyPageEditIcon} size={20} />
          </Link>
        </EditIconLinkWrapper>
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
