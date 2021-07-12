import React from 'react';
import Styled from 'styled-components';

export interface IData {
  // cardiNum: number; //기수
  createdDT: string; //오픈일자
  registerStartDT: string;
  registerEndDT: string;
  challengeStartDT: string;
  challengeEndDT: string;
  applyNum: number; //신청인
  participants: number; //참여인원수
  postNum: number; //총 게시물 개수
  img: string; //이미지주소
}
export interface IProps {
  challengeData: IData;
}

function AdminChallengeCard({ challengeData }: IProps): React.ReactElement {
  return (
    <SAdminChallengeCard
      onClick={() => {
        // console.log(`${challengeData.cardiNum}기`);
      }}
    >
      <img className="card__image" src={challengeData.img}></img>
      <div className="card__container--bottom">
        {/* <div className="card__title">오투 회고 챌린지 {challengeData.cardiNum}</div> */}
        <div className="card__title">오투 회고 챌린지 1기</div>

        <div className="card__container--row">
          <div className="card__label">오픈일자</div>
          <div className="card__exp">{challengeData.createdDT}</div>
        </div>
        <div className="card__container--row">
          <div className="card__label">진행기간</div>
          <div className="card__exp">
            {challengeData.challengeStartDT}~{challengeData.challengeEndDT}
          </div>
        </div>
        <div className="card__container--row">
          <div className="card__label">신청기간</div>
          <div className="card__exp">
            {challengeData.registerStartDT}~{challengeData.registerEndDT}
          </div>
        </div>
        <div className="card__container--row">
          <div className="card__label">신청인</div>
          <div className="card__exp">{challengeData.applyNum}명</div>
        </div>
        <div className="card__container--row">
          <div className="card__label">참여인원수</div>
          <div className="card__exp">{challengeData.participants}명</div>
        </div>
        <div className="card__container--row">
          <div className="card__label">총 게시물 개수</div>
          <div className="card__exp">{challengeData.postNum}개</div>
        </div>
      </div>
    </SAdminChallengeCard>
  );
}

const SAdminChallengeCard = Styled.div`
    width: 402px;
    height: 484px;
    border-radius: 18px;
    box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
    background-color: #ffffff;
    display : flex;
    flex-direction : column;
    align-items : center;
    cursor : pointer;
    .card{
        &__image{
            height : 148px;
            width : 402px;
            border-top-left-radius:18px;
            border-top-right-radius:18px;
            object-fit: cover;
            margin-bottom : 30px;
        }
        &__title{
            font-size: 32px;
            font-weight: bold;
            line-height: 1.31;
            letter-spacing: -0.5px;
            color : #3d3d3d;
            margin-bottom : 40px;
            width : 322px;
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
            width : 90px;
            margin-right : 41px;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: -0.5px;
            text-align: left;
            color:#6f6f6f;
        }
        &__exp{
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: -0.5px;
            color : #6f6f6f;
            font-weight: bold;
        }
    }
  `;

export default AdminChallengeCard;
