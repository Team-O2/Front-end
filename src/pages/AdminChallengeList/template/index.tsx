import { GreydfPlusIcon as PlusIcon } from 'assets/images';
import { AdminChallengeCard } from 'components/molecules';
import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/admin/challenge/open">
          <AddCard>
            <AddImage src={PlusIcon}></AddImage>
            <AddExp>챌린지 등록하기</AddExp>
          </AddCard>
        </Link>
        {challengeDataList?.map((data, id) => {
          return (
            data && (
              <Link to={`/challenge/${data.generation}`}>
                <AdminChallengeCard key={id} challengeData={data} />
              </Link>
            )
          );
        })}
      </ListContainer>
    </Wrapper>
  );
}

export default AdminChallengeListTemplate;
