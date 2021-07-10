import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import CharacterBlack from '../../../assets/images/character_black.svg';
import CharacterColor1 from '../../../assets/images/character_color1.svg';
import CharacterColor2 from '../../../assets/images/character_color2.svg';
import CharacterColor3 from '../../../assets/images/character_color3.svg';
import GroupIcon from '../../../assets/images/groupIcon.svg';
import ChallengeTag from '../../molecules/ChallengeWriteTag/index';
import Modal from '../../atoms/Modal/index';

export interface IProps {
  description?: string;
  className?: string;
  value?: string;
}

type MyFormProps = {
  onSubmit: (form: { description1: string; description2: string; description3: string }) => void;
};

function WriteCard({ onSubmit }: MyFormProps) {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      description1: '',
      description2: '',
      description3: '',
    });
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

        <ChallengeTag />
        <form onSubmit={handleSubmit}>
          {countProgressBar === 3 ? (
            <div className="button">
              <button className="write__button-color">글 올리기</button>
            </div>
          ) : (
            <div className="button">
              <button className="write__button-black">글 올리기</button>
            </div>
          )}
        </form>

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
            font-style: normal;
            font-weight: bold;
            font-size:22px;
            line-height:38px;
            letter-spacing: -0.5px;
            color: #3D3D3D;
        }
        &__restriction{
            font-style: normal;
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

`;

export default WriteCard;
