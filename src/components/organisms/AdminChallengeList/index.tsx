import { getChallengeList } from 'apis';
import { GreydfPlusIcon as PlusIcon } from 'assets/images';
import { Label } from 'components/atoms';
import { AdminChallengeCard } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';

interface IChallengeData {
  registerStartDT: string;
  registerEndDT: string;
  challengeStartDT: string;
  challengeEndDT: string;
  createdDT: string;
  applyNum: number;
  participants: number;
  postNum: number;
  img: string;
  generation: number;
}

function AdminChallengeList(): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const [challengeDataList, setChallengeDataList] = useState<IChallengeData[] | null>(null);

  useEffect(() => {
    if (userStatusData) getChallengeDataList(userStatusData.token, 30, 0);
    else alert('로그인 후 이용하세요');
  }, [userStatusData]);

  const getChallengeDataList = async (token: string, limit: number, offset: number): Promise<void> => {
    const data = await getChallengeList(token, limit, offset);
    data && setChallengeDataList(data);
  };

  return (
    <SAdminChallengeList>
      <Label className="admin__label--page">관리자 페이지</Label>
      <Label className="admin__label--title">챌린지 정보</Label>
      <div className="admin__container--bottom">
        <Link to="/admin/challenge/open">
          <div className="admin__card--add">
            <img className="admin__icon--add" src={PlusIcon}></img>
            <div className="admin__label--add">챌린지 등록하기</div>
          </div>
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
      </div>
    </SAdminChallengeList>
  );
}

const SAdminChallengeList = Styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    .admin{
        &__label{
            &--page{
                margin-top : 60px;
                line-height: 1.5;
                letter-spacing: -0.5px;
                color : #3d3d3d;
                font-size: 16px;
            }
            &--title{
                margin-top:10px;
                margin-bottom : 110px;
                line-height: 1.42;
                letter-spacing: -0.5px;
                color:#3d3d3d;
                font-size: 48px;
                font-weight: bold;
            }
        }
        &__container{
            &--bottom{
                display : grid;
                grid-template-columns: repeat(2, 1fr);
                grid-row-gap: 40px;
                grid-column-gap: 40px;
                margin-bottom : 354px;
            }
        }
        &__card{
            &--add{
                display : flex;
                flex-direction : column;
                align-items : center;
                border-radius: 18px;
                box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
                background-color : #ffffff;
                width: 402px;
                height: 484px;
                height: 484px;
            }
        }
        &__icon{
          &--add{
            margin-top : 162px;
            width : 140px;
            height : 140px;
          }
        }
        &__label{
          &--add{
            line-height: 1.33;
            letter-spacing: -0.5px;
            color : #dfdfdf;
            font-size: 24px;
            font-weight: bold;
          }
        }
    }
`;

export default AdminChallengeList;
