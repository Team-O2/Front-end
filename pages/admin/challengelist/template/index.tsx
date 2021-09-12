import { Link } from 'components/atoms';
import { AdminChallengeCard } from 'components/molecules';
import { GreydfPlusIcon as PlusIcon } from 'public/assets/images';
import React from 'react';
import { IAdminChallenge } from 'types/admin.type';
import { AddCard, AddExp, AddImage, ListContainer, PageLabel, Title, Wrapper } from './style';

interface IProps {
  challengeDataList: IAdminChallenge[] | null;
}

function AdminChallengeListTemplate({ challengeDataList }: IProps): React.ReactElement {
  return (
    <Wrapper>
      <PageLabel>관리자 페이지</PageLabel>
      <Title>챌린지 정보</Title>
      <ListContainer>
        <Link to="/admin/challengeopen">
          <AddCard>
            <AddImage src={PlusIcon}></AddImage>
            <AddExp>챌린지 등록하기</AddExp>
          </AddCard>
        </Link>
        {challengeDataList?.map((data, id) => {
          return data && <AdminChallengeCard key={id} challengeData={data} />;
        })}
      </ListContainer>
    </Wrapper>
  );
}

export default AdminChallengeListTemplate;
