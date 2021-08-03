import { ChallengeEdit, getChallengeContent } from 'apis';
import {
  CharacterBlackIcon,
  CharacterColor1Icon,
  CharacterColor2Icon,
  CharacterColor3Icon,
  MoreClickedIcon,
} from 'assets/images';
import { Button, Modal } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { interestList } from 'resources/string';
import { userStatusState } from 'stores/user';
import {
  BlackButton,
  ButtonWrapper,
  CharacterStepImg,
  CharacterWrapper,
  ColorButton,
  Header,
  InterestTagButton,
  ProgressBarStep0,
  ProgressBarStep1,
  ProgressBarStep2,
  ProgressBarStep3,
  QuestionWrapper,
  TagListWrapper,
  TagWrapper,
} from './style';

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

function EditCard({ id }: IEditCard): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
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

  const handleTotalOnChange = (e: any) => {
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
      <InterestTagButton
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
      </InterestTagButton>
    );
  };

  return (
    <>
      <Header>Learn Myself</Header>
      {countProgressBar === 0 ? (
        <CharacterWrapper>
          <div>
            <img src={CharacterBlackIcon} alt="" />
            <p>당신의 오늘을 알고싶어요!</p>
          </div>
          <div>
            <ProgressBarStep0>
              <span>.</span>
            </ProgressBarStep0>
          </div>
        </CharacterWrapper>
      ) : null}

      {countProgressBar === 1 ? (
        <CharacterWrapper>
          <h1>
            <CharacterStepImg src={CharacterColor1Icon} alt="" />
            <p>오호라! 오늘 이런 일이 있었군요!</p>
          </h1>
          <div>
            <ProgressBarStep1>
              <span>.</span>
            </ProgressBarStep1>
          </div>
        </CharacterWrapper>
      ) : null}
      {countProgressBar === 2 ? (
        <CharacterWrapper>
          <h2>
            <CharacterStepImg src={CharacterColor2Icon} alt="" />
            <p>우와! 내일의 당신은 더 행복할거에요 :)</p>
          </h2>
          <div>
            <ProgressBarStep2>
              <span>.</span>
            </ProgressBarStep2>
          </div>
        </CharacterWrapper>
      ) : null}
      {countProgressBar === 3 ? (
        <CharacterWrapper>
          <h3>
            <img src={CharacterColor3Icon} alt="" />
            <p>더 성장한 내일의 나를 위해!</p>
          </h3>
          <div>
            <ProgressBarStep3>
              <span>.</span>
            </ProgressBarStep3>
          </div>
        </CharacterWrapper>
      ) : null}

      <QuestionWrapper>
        <h1>오늘의 잘한 점을 적어보세요.</h1>
        <p>
          {byte.byte1}/{maxByte}
        </p>
        <textarea
          name="description1"
          value={description1}
          placeholder="오늘의 잘한 점을 적어보세요."
          onChange={handleTotalOnChange}
        ></textarea>
      </QuestionWrapper>

      <QuestionWrapper>
        <h1>오늘의 못한 점을 적어보세요.</h1>
        <p>
          {byte.byte2}/{maxByte}
        </p>
        <textarea
          name="description2"
          value={description2}
          placeholder="오늘의 못한 점을 적어보세요."
          onChange={handleTotalOnChange}
        ></textarea>
      </QuestionWrapper>
      <QuestionWrapper>
        <h1>잘한 점/못한 점을 통해 배운 것과 다음에 실천할 것을 적어보세요.</h1>
        <p>
          {byte.byte3}/{maxByte}
        </p>
        <textarea
          name="description3"
          value={description3}
          placeholder="배운 것과 실천할 것을 적어보세요."
          onChange={handleTotalOnChange}
        ></textarea>
      </QuestionWrapper>

      <TagWrapper>
        해시태그
        <div>
          {interestList.map((interest, id) => {
            if (id < 6) {
              return setInterestButton(id, interest);
            }
          })}

          <Button
            onClick={() => {
              setIsOpenTag(!isOpenTag);
            }}
          >
            <img src={MoreClickedIcon} alt=""></img>
          </Button>
          <TagListWrapper>
            {isOpenTag === true ? (
              <button>
                {isOpenTag === true ? (
                  interestList.map((interest, id) => {
                    return setInterestButton(id, interest);
                  })
                ) : (
                  <div></div>
                )}
              </button>
            ) : null}
          </TagListWrapper>
        </div>
      </TagWrapper>

      {countProgressBar === 3 ? (
        <ButtonWrapper>
          <ColorButton onClick={handleSubmit}>글 올리기</ColorButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <BlackButton>글 올리기</BlackButton>
        </ButtonWrapper>
      )}

      <Modal isOpen={isBadgeModal} setIsOpen={setIsBadgeModal} isBlur={true}>
        <div>
          <h1>뱃지 획득</h1>
          <h2>축하합니다! 뱃지 하나가 추가되었습니다</h2>
          <p>마이페이지를 확인해주세요 :)</p>
        </div>
      </Modal>
    </>
  );
}

export default EditCard;
