import React from 'react';
import Styled from 'styled-components';
import Label from 'components/atoms/Label';
import AdminChallengeCard from 'components/molecules/AdminChallengeCard';
import plusIcon from 'assets/images/plusIcon_dfdfdf.svg';
import { Link } from 'react-router-dom';

const challengeDataList = [
  {
    cardiNum: 1, //기수
    createdDT: '2021. 05. 15.', //오픈일자
    registerStartDT: '2021. 05. 20.',
    registerEndDT: '05. 30.',
    challengeStartDT: '2021. 06. 01.',
    challengeEndDT: '06. 30. ',
    applyNum: 105, //신청인
    participants: 20, //참여인원수
    postNum: 300, //총 게시물 개수
    img: 'https://images.velog.io/images/sukong/post/be8cbf04-1f14-451b-9a2a-20723fcb220a/Atto3.jpg', //이미지주소
  },
  {
    cardiNum: 2, //기수
    createdDT: '2021. 05. 15.', //오픈일자
    registerStartDT: '2021. 05. 20.',
    registerEndDT: '05. 30.',
    challengeStartDT: '2021. 06. 01.',
    challengeEndDT: '06. 30. ',
    applyNum: 105, //신청인
    participants: 20, //참여인원수
    postNum: 300, //총 게시물 개수
    img: 'https://images.velog.io/images/sukong/post/d55b039a-038d-4e5d-bc8c-facdcc15f576/Atto1.JPG', //이미지주소
  },
];

function AdminChallengeList(): React.ReactElement {
  return (
    <SAdminChallengeList>
      <Label className="admin__label--page" name="관리자 페이지" />
      <Label className="admin__label--title" name="챌린지 정보" />
      <div className="admin__container--bottom">
        <Link to="/adminchallengeopen">
          <div className="admin__card--add">
            <img className="admin__icon--add" src={plusIcon}></img>
            <div className="admin__label--add">챌린지 등록하기</div>
          </div>
        </Link>
        {challengeDataList.map((data, id) => {
          return <AdminChallengeCard key={id} challengeData={data} />;
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
