import React from 'react';
import Styled from 'styled-components';
import { IAdminChallenge } from 'types/admin.type';

export interface IProps {
  challengeData: IAdminChallenge;
}
const changeDatetoString = (date: string, isIncludeYear: boolean): string => {
  const year = date.substr(0, 4);
  const month = date.substr(5, 2);
  const day = date.substr(8, 2);
  if (isIncludeYear) return `${year}.${month}.${day}`;
  else return `${month}.${day}`;
};

function AdminChallengeCard({ challengeData }: IProps): React.ReactElement {
  return (
    <SAdminChallengeCard>
      <img className="card__image" src={challengeData.img}></img>
      <div className="card__container--bottom">
        <div className="card__title">오투 회고 챌린지 {challengeData.generation}기</div>

        <div className="card__container--row">
          <div className="card__label body3">오픈일자</div>
          <div className="card__exp subhead3">{changeDatetoString(challengeData.createdDT, true)}</div>
        </div>
        <div className="card__container--row">
          <div className="card__label body3">진행기간</div>
          <div className="card__exp subhead3">
            {changeDatetoString(challengeData.challengeStartDT, true)} ~{' '}
            {changeDatetoString(challengeData.challengeEndDT, false)}
          </div>
        </div>
        <div className="card__container--row">
          <div className="card__label body3">신청기간</div>
          <div className="card__exp subhead3">
            {changeDatetoString(challengeData.registerStartDT, true)} ~{' '}
            {changeDatetoString(challengeData.registerEndDT, false)}
          </div>
        </div>
        <div className="card__container--row">
          <div className="card__label body3">신청인</div>
          <div className="card__exp subhead3">{challengeData.applyNum}명</div>
        </div>
        <div className="card__container--row">
          <div className="card__label body3">참여인원수</div>
          <div className="card__exp subhead3">{challengeData.participants}명</div>
        </div>
        <div className="card__container--row">
          <div className="card__label body3">총 게시물 개수</div>
          <div className="card__exp subhead3">{challengeData.postNum}개</div>
        </div>
      </div>
    </SAdminChallengeCard>
  );
}

const SAdminChallengeCard = Styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    border-radius: 18px;
    box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
    background-color: #ffffff;
    cursor : pointer;
    width: 402px;
    height: 484px;
    .card{
        &__image{
            margin-bottom : 30px;
            border-top-left-radius:18px;
            border-top-right-radius:18px;
            width : 402px;
            height : 148px;
            object-fit: cover;
        }
        &__title{
            margin-bottom : 40px;
            width : 322px;
            line-height: 1.31;
            letter-spacing: -0.5px;
            color : #3d3d3d;
            font-size: 32px;
            font-weight: bold;
        }
        &__container{
            &--row{
                display : flex;
                flex-direction : row;
                justify-content : flex-start;
                margin-bottom : 9px;
            }
            &--bottom{
                display : flex;
                flex-direction : column;
                width : 322px;
            }
        }
        &__label{
            margin-right : 41px;
            width : 90px;
            color:#6f6f6f;
        }
        &__exp{
            color : #6f6f6f;
        }
    }
  `;

export default AdminChallengeCard;
