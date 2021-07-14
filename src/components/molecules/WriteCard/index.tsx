import { writeForm } from 'libs/getChallenge';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import CharacterBlack from '../../../assets/images/character_black.svg';
import CharacterColor1 from '../../../assets/images/character_color1.svg';
import CharacterColor2 from '../../../assets/images/character_color2.svg';
import CharacterColor3 from '../../../assets/images/character_color3.svg';
import MoreIcon from '../../../assets/images/moreIcon.svg';
import { interestList } from '../../../resources/string';
import Button from '../../atoms/Button';
import Modal from '../../atoms/Modal/index';

export interface IProps {
  description?: string;
  className?: string;
  value?: string;
}

type selectedStyle = {
  backgroundColor: string;
  color: string;
};

type selectedStyleLists = {
  [key: string]: selectedStyle;
};

const selectedInterestStyle: selectedStyleLists = {
  '건강 및 피트니스': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '게임': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '교육': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '그래픽 및 디자인': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '금융': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  'K-pop': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '뉴스, 신문': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '데이트': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '날씨': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '네비게이션': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '출판,도서': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '뷰티': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '라이프 스타일': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '만화': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '부동산 / 홈 인테리어': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '사진 및 비디오': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '쇼핑': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '비즈니스': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '생산성': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '소셜 네트워킹': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '스포츠': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '어린이': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  'AR앱': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '여행': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '유틸리티': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '음식 및 음료': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '음악': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '의료': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  '기타': { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
};

type MyFormProps = {
  onChangeForm: (form: { description1: string; description2: string; description3: string }) => void;
};

function WriteCard({ onChangeForm }: MyFormProps) {
  const maxByte = 1000; //최대 1000바이트
  const [isBadgeModal, setIsBadgeModal] = useState(false); //뱃지 모달
  const [countProgressBar, setCountProgressBar] = useState(0); //프로그래스바

  const [byte, setByte] = useState({
    byte1: 0,
    byte2: 0,
    byte3: 0,
  });
  const [isButtonClick, setIsButtonClick] = useState(false);

  const [form, setForm] = useState({
    description1: '',
    description2: '',
    description3: '',
  });

  const { description1, description2, description3 } = form;
  const onChange2 = (target: any) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    setUserData({ ...userData, interest: selectedInterest });
    e.preventDefault();
    onChangeForm(form);
    setForm({
      description1: '',
      description2: '',
      description3: '',
    });
    const writeData = {
      good: description1,
      bad: description2,
      learn: description3,
      interest: selectedInterest,
      generation: 2,
    };
    const data = await writeForm(writeData);
    console.log('getData', data);
  };

  const progressBarState = () => {
    let count = 0;
    if (byte.byte1 > 0) {
      count++;
    }
    if (byte.byte2 > 0) {
      count++;
    }
    if (byte.byte3 > 0) {
      count++;
    }
    setCountProgressBar(count);
  };

  const onChange = (e: any) => {
    const text_val = e.target.value; //입력한 문자
    const target_byte_name = 'byte' + e.target.name.split('description')[1];

    let str = '';
    let totalByte = 0;
    for (let i = 0; i < text_val.length; i++) {
      const each_char = text_val.charAt(i);
      const uni_char = escape(each_char); //유니코드 형식으로 변환
      if (uni_char.length > 4) {
        totalByte += 1; //처음엔 한글 2Byte했다가 바꿈
      } else {
        // 영문,숫자,특수문자 : 1Byte
        totalByte += 1;
      }
    }

    if (totalByte >= maxByte) {
      str = text_val.substring(0, maxByte);
      e.target.value = str;

      totalByte = maxByte;
    }

    onChange2(e.target);
    setByte({
      ...byte,
      [target_byte_name]: totalByte,
    });
  };

  useEffect(() => {
    progressBarState();
  }, [byte]);

  const [isOpenTag, setIsOpenTag] = useState(false);
  const [isClickTag, setIsClickTag] = useState(false);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);

  const [userData, setUserData] = useState({
    interest: [''],
  });
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const modalInterestHandler = (interest: string) => {
    if (selectedInterest.length === 0) {
      setSelectedInterest([interest]);
    }
    if (selectedInterest.length < 30) {
      if (!selectedInterest.includes(interest)) {
        setSelectedInterest([...selectedInterest, interest]);
      } else {
        setSelectedInterest(selectedInterest.filter((v) => v !== interest));
      }
    } else {
      if (selectedInterest.includes(interest)) {
        setSelectedInterest(selectedInterest.filter((v) => v !== interest));
      }
    }
  };

  const setInterestButton = (id: any, interest: string) => {
    return (
      <button
        className="tag__interest"
        key={id}
        onClick={() => {
          modalInterestHandler(interest);
          setIsClickTag(!isClickTag);
        }}
        style={
          selectedInterestStyle[interest] && selectedInterest.indexOf(interest) > -1
            ? selectedInterestStyle[interest]
            : {}
        }
      >
        {interest}
      </button>
    );
  };

  useEffect(() => {
    setSelectedInterest(selectedInterest);
  }, [selectedInterest]);

  return (
    <>
      <SWriteCard>
        <div className="header">Learn Myself 2nd</div>
        {countProgressBar === 0 ? (
          <div className="character">
            <img className="character__black" src={CharacterBlack} alt="" />
            <div className="character__message">당신의 오늘을 알고싶어요!</div>
            <div className="bar">
              <span className="progressbar">
                <span className="gauge__initial">.</span>
              </span>
            </div>
          </div>
        ) : null}

        {countProgressBar === 1 ? (
          <div className="character">
            <div className="character__color1">
              <img className="character__1" src={CharacterColor1} alt="" />
              <div className="character__message">오호라! 오늘 이런 일이 있었군요!</div>
            </div>
            <div className="bar">
              <span className="progressbar">
                <span className="gauge__quarter">.</span>
              </span>
            </div>
          </div>
        ) : null}
        {countProgressBar === 2 ? (
          <div className="character">
            <div className="character__color2">
              <img className="character__2" src={CharacterColor2} alt="" />
              <div className="character__message">우와! 내일의 당신은 더 행복할거에요 :)</div>
            </div>
            <div className="bar">
              <span className="progressbar">
                <span className="gauge__half">.</span>
              </span>
            </div>
          </div>
        ) : null}
        {countProgressBar === 3 ? (
          <div className="character">
            <div className="character__color3">
              <img className="character__3" src={CharacterColor3} alt="" />
              <div className="character__message">더 성장한 내일의 나를 위해!</div>
            </div>
            <div className="bar">
              <span className="progressbar">
                <span className="gauge__one">.</span>
              </span>
            </div>
          </div>
        ) : null}

        <div className="challenge-card">
          <div className="challenge-card__title">오늘의 잘한 점을 적어보세요.</div>
          <div className="challenge-card__restriction">
            {byte.byte1}/{maxByte}
          </div>
          <textarea
            className="textarea"
            name="description1"
            value={description1}
            placeholder="오늘의 잘한 점을 적어보세요."
            onChange={onChange}
          ></textarea>
        </div>
        <div className="challenge-card">
          <div className="challenge-card__title">오늘의 못한 점을 적어보세요.</div>
          <div className="challenge-card__restriction">
            {byte.byte2}/{maxByte}
          </div>
          <textarea
            className="textarea"
            name="description2"
            value={description2}
            placeholder="오늘의 못한 점을 적어보세요."
            onChange={onChange}
          ></textarea>
        </div>
        <div className="challenge-card">
          <div className="challenge-card__title">잘한 점/못한 점을 통해 배운 것과 다음에 실천할 것을 적어보세요.</div>
          <div className="challenge-card__restriction">
            {byte.byte3}/{maxByte}
          </div>
          <textarea
            className="textarea"
            name="description3"
            value={description3}
            placeholder="배운 것과 실천할 것을 적어보세요."
            onChange={onChange}
          ></textarea>
        </div>

        <div className="tag">
          해시태그
          <div className="tag__list">
            {interestList.map((interest, id) => {
              if (id < 5) {
                return setInterestButton(id, interest);
              }
            })}
            <Button
              onClick={() => {
                setIsOpenTag(!isOpenTag);
              }}
            >
              <img className="tag__moreIcon" src={MoreIcon} alt=""></img>
            </Button>
            {isOpenTag === true ? (
              interestList.map((interest, id) => {
                return setInterestButton(id, interest);
              })
            ) : (
              <div className="modal__base"></div>
            )}
          </div>
        </div>

        {countProgressBar === 3 ? (
          <div className="button">
            <button className="write__button-color" onClick={handleSubmit}>
              글 올리기
            </button>
          </div>
        ) : (
          <div className="button">
            <button className="write__button-black">글 올리기</button>
          </div>
        )}

        <Modal isOpen={isBadgeModal} setIsOpen={setIsBadgeModal} isBlur={true}>
          <div className="badge">
            <div className="badge__modal">뱃지 획득</div>
            <div className="badge__detail">축하합니다! 뱃지 하나가 추가되었습니다</div>
            <div className="badge__detail">마이페이지를 확인해주세요 :)</div>
          </div>
        </Modal>
      </SWriteCard>
    </>
  );
}

const SWriteCard = Styled.div`

    .header{
      padding-top:100px;
      text-align:center;
      font-family: HomepageBaukasten;
      font-size: 46px;
      font-weight: bold;
      line-height: 1.22;
      letter-spacing: -0.5px;
}
    }
    .challenge-card{
        padding-top:60px;
        width:844px;
        margin: 0 auto;

        &__title{
            font-weight: bold;
            font-size:22px;
            line-height:38px;
            letter-spacing: -0.5px;
            color: #3D3D3D;
        }
        &__restriction{
            font-weight: bold;
            font-size: 14px;
            line-height: 18px;
            text-align: right;
            padding-bottom: 30px;
            color: #B1B1B1;
        }
    }
    .textarea{
        align-items: center;
        padding: 40px 60px 40px 60px;
        width: 844px;
        height:369px;
        font-size: 18px;
        border: 1px solid #DFDFDF;
        box-sizing: border-box;
    }

    .button{
        width:844px;
        margin: 0 auto;
        align-items: center;
    }
    
    .write__button-color{
        width:844px;
        margin: 0 auto;
        margin-top:60px;
        text-align: center;
        background: linear-gradient(91.91deg, #36C8F5 7.34%, #13E2DD 90.35%);
        border-radius: 4px;
        height: 60px;
        color: #FFFFFF;
        border:none;
    }
    .write__button-black{
        width:844px;
        margin: 0 auto;
        margin-top:60px;
        text-align: center;
        background: #DFDFDF;
        border-radius: 4px;
        height: 60px;
        color: #FFFFFF;
        border:none;
    }
    .character{
        padding-top:60px;
        width:844px;
        margin: 0 auto;

        &__1{
            padding-left:60px;
        }
        &__2{
            padding-left:50px;
        }
        &__black{
            padding-right:50px;
        }
        &__color1{
            padding-left:200px;
        }
        &__color2{
            padding-left:450px;
        }
        &__color3{
            text-align:end;
        }

        &__message{
            padding-top:12.32px;
            padding-bottom: 12px;
            font-size: 14px;
            font-weight: bold;
            line-height: 1.43;
            letter-spacing: -0.5px;
        }
    }   
    .progressbar{
        display: inline-block;
        width: 844px;
        height: 5px;
        background-color: #d6d3d3;
    }
    .gauge__initial{
        display: inline-block;
        width: 1%;
        height: 5px;
        background-color: #3abff7;
    }

    .gauge__quarter{
            display: inline-block;
            width: 34%;
            height: 5px;
            background-color: #3abff7;
        }
    .gauge__half{
            display: inline-block;
            width: 67%;
            height: 5px;
            background-color: #3abff7;
        }
    .gauge__one{
            display: inline-block;
            width: 100%;
            height: 5px;
            background-color: #3abff7;
        }
    }

    .tag{
      width:844px;
      align-items:center;
      margin:0 auto;
      padding-top:60px;
      font-family: AppleSDGothicNeo;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.33;
      letter-spacing: -0.5px;
      text-align: left;
      color: var(--colors-grayscale-6-f);

      &__moreIcon{
        vertical-align : middle;
        padding-bottom:5px;
      }
  
      &__interest{
          padding : 12px 30px;
          margin : 12px 5px;
          height : 48px;
          border-radius: 60px;
          border: solid 1px #8b8b8b;
          font-size: 18px;
          font-weight: bold;
          line-height: 1.33;
          letter-spacing: -0.5px;
          color : #8b8b8b;
          background-color:#FFFFFF;
        }

`;

export default WriteCard;
