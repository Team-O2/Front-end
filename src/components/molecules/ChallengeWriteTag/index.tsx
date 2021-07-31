import React, { useState } from 'react';
import Styled from 'styled-components';
import MoreIcon from '../../../assets/images/moreIcon.svg';
import { interestList } from '../../../resources/string';
import Button from '../../atoms/Button';

// const selectedStyleList = [{ backgroundColor: '#6f6f6f', color: '#FFFFFF' }];

// for (let i = 0; i < 29; i++) {
//   selectedStyleList[i] = { backgroundColor: '#6f6f6f', color: '#FFFFFF' };
// }
const selectedStyleList = [
  { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
  { backgroundColor: '#6f6f6f', color: '#FFFFFF' },
];

const ChallengeTag = () => {
  const [isOpenTag, setIsOpenTag] = useState(false);
  const [isClickTag, setIsClickTag] = useState(false);
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

  // const modalBtnHandler = () => {
  //   setUserData({ ...userData, interest: selectedInterest });
  //   setIsInterestModalOpen(false);
  // };

  return (
    <STag>
      <div className="tag">
        해시태그
        <div>
          <Button
            onClick={() => {
              setIsOpenTag(!isOpenTag);
            }}
          >
            <img className="tag__moreIcon" src={MoreIcon} alt=""></img>
          </Button>
          {isOpenTag === true ? (
            interestList.map((interest, id) => {
              return (
                <button
                  className="tag__interest"
                  key={id}
                  onClick={() => {
                    modalInterestHandler(interest);
                    setIsClickTag(!isClickTag);
                  }}
                  style={
                    interest == selectedInterest[0]
                      ? selectedStyleList[0]
                      : interest == selectedInterest[1]
                      ? selectedStyleList[1]
                      : interest == selectedInterest[2]
                      ? selectedStyleList[2]
                      : interest == selectedInterest[3]
                      ? selectedStyleList[3]
                      : interest == selectedInterest[4]
                      ? selectedStyleList[4]
                      : interest == selectedInterest[5]
                      ? selectedStyleList[5]
                      : interest == selectedInterest[6]
                      ? selectedStyleList[6]
                      : interest == selectedInterest[7]
                      ? selectedStyleList[7]
                      : interest == selectedInterest[8]
                      ? selectedStyleList[8]
                      : interest == selectedInterest[9]
                      ? selectedStyleList[9]
                      : {}
                  }
                >
                  {interest}
                </button>
              );
            })
          ) : (
            <div className="modal__base"></div>
          )}
        </div>
      </div>
    </STag>
  );
};

const STag = Styled.div`
  .tag{
    align-items:center;
    margin:0 auto;
    padding-top:60px;
    width:844px;
    text-align: left;
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: var(--colors-grayscale-6-f);
    font-family: AppleSDGothicNeo;
    font-size: 24px;
    font-weight: bold;

    &__interest{
      margin : 12px 5px;
      border: solid 1px #8b8b8b;
      border-radius: 60px;
      background-color:#FFFFFF;
      padding : 12px 30px;
      height : 48px;
      line-height: 1.33;
      letter-spacing: -0.5px;
      color : #8b8b8b;
      font-size: 18px;
      font-weight: bold;
    }
}`;

export default ChallengeTag;
