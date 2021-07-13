import plusIcon from 'assets/images/plusIcon_dfdfdf.svg';
import Label from 'components/atoms/Label';
import AdminChallengeCard from 'components/molecules/AdminChallengeCard';
import { getChallengeList } from 'libs/axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
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
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [challengeDataList, setChallengeDataList] = useState<IChallengeData[] | null>(null);
  useEffect(() => {
    if (userStatusData) getChallengeDataList(userStatusData.token);
    else alert('로그인 후 이용하세요');
  }, []);
  const getChallengeDataList = async (token: string): Promise<void> => {
    const data = await getChallengeList(token);
    console.log(data);
    data && setChallengeDataList(data);
    console.log(challengeDataList);
  };

  return (
    <SAdminChallengeList>
      <Label className="admin__label--page">관리자 페이지</Label>
      <Label className="admin__label--title">챌린지 정보</Label>
      <div className="admin__container--bottom">
        <Link to="/adminchallengeopen">
          <div className="admin__card--add">
            <img className="admin__icon--add" src={plusIcon}></img>
            <div className="admin__label--add">챌린지 등록하기</div>
          </div>
        </Link>
        {challengeDataList?.map((data, id) => {
          return data && <AdminChallengeCard key={id} challengeData={data} />;
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
                font-size: 16px;
                line-height: 1.5;
                letter-spacing: -0.5px;
                color : #3d3d3d;
                margin-top : 60px;
            }
            &--title{
                font-size: 48px;
                font-weight: bold;
                line-height: 1.42;
                letter-spacing: -0.5px;
                color:#3d3d3d;
                margin-top:10px;
                margin-bottom : 110px;
            }
        }
        &__container{
            &--bottom{
                display : grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 40px;
                grid-row-gap: 40px;
                margin-bottom : 354px;
            }
        }
        &__card{
            &--add{
                width: 402px;
                height: 484px;
                height: 484px;
                border-radius: 18px;
                box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
                background-color : #ffffff;
                display : flex;
                flex-direction : column;
                align-items : center;
            }
        }
        &__icon{
          &--add{
            width : 140px;
            height : 140px;
            margin-top : 162px;
          }
        }
        &__label{
          &--add{
            font-size: 24px;
            font-weight: bold;
            line-height: 1.33;
            letter-spacing: -0.5px;
            color : #dfdfdf;
          }
        }
    }
`;

export default AdminChallengeList;
