import { ChallengeEdit, getChallengeContent } from 'apis';
import {
  CharacterBlack,
  CharacterColor1,
  CharacterColor2,
  CharacterColor3,
  MoreClickedIcon,
} from 'assets/images/index';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userStatusState } from 'stores/user';
import { interestList } from '../../../resources/string';
import Button from '../../atoms/Button';
import Modal from '../../atoms/Modal/index';
import SWriteCard from './style';

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
interface IEditCard {
  id: string;
}

function EditCard({ id }: IEditCard) {
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const history = useHistory();
  const maxByte = 1000; //최대 1000바이트
  const [isBadgeModal, setIsBadgeModal] = useState(false); //뱃지 모달
  const [countProgressBar, setCountProgressBar] = useState(0); //프로그래스바

  const [byte, setByte] = useState({
    byte1: 0,
    byte2: 0,
    byte3: 0,
  });

  const [textForm, setTextForm] = useState({
    description1: '',
    description2: '',
    description3: '',
  });

  const { description1, description2, description3 } = textForm;
  const textOnChange = (target: any) => {
    const { name, value } = target;
    setTextForm({
      ...textForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setTextForm({
      description1: '',
      description2: '',
      description3: '',
    });
    const editData = {
      good: description1,
      bad: description2,
      learn: description3,
      interest: selectedInterest,
    };
    if (userStatusData) {
      const data = await ChallengeEdit(editData, userStatusData.token, id);
      data && history.goBack();
    }
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

  const totalOnChange = (e: any) => {
    const text_val = e.target.value; //입력한 문자
    const target_byte_name = 'byte' + e.target.name.split('description')[1];
    let str = '';
    let totalByte = stringtoByte(text_val);

    if (totalByte >= maxByte) {
      str = text_val.substring(0, maxByte);
      e.target.value = str;
      totalByte = maxByte;
    }
    textOnChange(e.target);
    setByte({
      ...byte,
      [target_byte_name]: totalByte,
    });
  };
  const stringtoByte = (value: string) => {
    return value.length;
  };

  useEffect(() => {
    progressBarState();
  }, [byte]);
  useEffect(() => {
    getDefaultData();
  }, []);

  const getDefaultData = async () => {
    if (userStatusData) {
      const data = await getChallengeContent(id, userStatusData.token);
      if (data) {
        setTextForm({ description1: data.good, description2: data.bad, description3: data.learn });
        setSelectedInterest(data.interest);
        setByte({
          byte1: stringtoByte(data.good),
          byte2: stringtoByte(data.bad),
          byte3: stringtoByte(data.learn),
        });
      }
    } else {
    }
  };

  const [isOpenTag, setIsOpenTag] = useState(false);
  const [isClickTag, setIsClickTag] = useState(false);

  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const modalInterestHandler = (interest: string) => {
    if (selectedInterest.length === 0) {
      setSelectedInterest([interest]);
    }
    if (selectedInterest.length < 3) {
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

  return (
    <>
      <SWriteCard>
        <div className="header">Learn Myself</div>
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
            <div className="character__color-step1">
              <img className="character__detail-step1" src={CharacterColor1} alt="" />
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
            <div className="character__color-step2">
              <img className="character__detail-step2" src={CharacterColor2} alt="" />
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
            <div className="character__color-step3">
              <img className="character__detail-step3" src={CharacterColor3} alt="" />
              <div className="character__message">더 성장한 내일의 나를 위해!</div>
            </div>
            <div className="bar">
              <span className="progressbar">
                <span className="gauge__whole">.</span>
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
            onChange={totalOnChange}
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
            onChange={totalOnChange}
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
            onChange={totalOnChange}
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
              <img className="tag__moreIcon" src={MoreClickedIcon} alt=""></img>
            </Button>
            <div className="tag__group">
              {isOpenTag === true ? (
                <button className="tag__group-detail">
                  {isOpenTag === true ? (
                    interestList.map((interest, id) => {
                      return setInterestButton(id, interest);
                    })
                  ) : (
                    <div className="modal__base"></div>
                  )}
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {countProgressBar === 3 ? (
          <div className="button">
            <button className="write__button-color" onClick={handleSubmit}>
              수정완료
            </button>
          </div>
        ) : (
          <div className="button">
            <button className="write__button-black">수정완료</button>
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

export default EditCard;
