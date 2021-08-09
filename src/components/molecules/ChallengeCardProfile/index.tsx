import { CancelChallengeScrap, ChallengeScrap } from 'apis';
import { ColorScrapIcon, DeleteIcon, EditIcon, GrayScrapIcon, MenuBarIcon } from 'assets/images';
import { Link } from 'components/atoms';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import {
  DeleteBar,
  DeleteEditCardButton,
  InterestTag,
  MenuBarWrapper,
  MenuButton,
  ProfileDetailWrapper,
  ProfileImage,
  ProfileWrapper,
} from './style';

interface IProps {
  setIsDeleteModalOpen: (value: boolean) => void;
  setIsLoginModalOpen: (value: boolean) => void;
  isMine: boolean;
  nickname?: string;
  image?: string;
  createdAt?: string;
  isScrap?: boolean;
  interest?: string[];
  id: string;
}

function ChallengeCardProfile({
  setIsDeleteModalOpen,
  setIsLoginModalOpen,
  isMine,
  nickname,
  image,
  createdAt,
  isScrap,
  interest,
  id,
}: IProps): React.ReactElement {
  const [isMenuBar, setIsMenuBar] = useState(true);
  const [scrapRender, setScrapRender] = useState(isScrap);
  const userStatusData = useRecoilValue(userStatusState);
  const [userStateNum, setUserState] = useState(userStatusData ? userStatusData.userType : 0);

  const submitScrap = async () => {
    if (userStatusData) {
      const token = userStatusData.token;
      const submitSuccess = await ChallengeScrap(token, id);
      if (submitSuccess) {
        setScrapRender(true);
      }
    }
  };

  const cancelScrap = async () => {
    if (userStatusData) {
      const token = userStatusData.token;
      const cancelSuccess = await CancelChallengeScrap(token, id);
      if (cancelSuccess) {
        setScrapRender(false);
      }
    }
  };

  const scrapCancelHandelOnClick = () => {
    cancelScrap();
    userStateNum === 0 ? setIsLoginModalOpen(true) : setIsLoginModalOpen(false);
  };

  const scrapSubmitHandelOnClick = () => {
    submitScrap();
    userStateNum === 0 ? setIsLoginModalOpen(true) : setIsLoginModalOpen(false);
  };

  //userState상태 :
  // 0: 비회원,
  // 1: 챌린지안하는유저,
  // 2: 챌린지하는유저,
  // 3: 챌린지하는유저&챌린지종료,
  // 4: 관리자

  return (
    <div>
      <ProfileImage src={image} />
      <ProfileWrapper>
        <div>
          <ProfileDetailWrapper>
            <h3>{nickname}</h3>
            <h4>{dayjs(createdAt).format('MM.DD')}</h4>
          </ProfileDetailWrapper>
          {userStateNum === 0 || userStateNum === 1 || userStateNum === 2 || isMine === false ? (
            scrapRender === false ? (
              <MenuBarWrapper>
                <MenuButton>
                  <img
                    src={GrayScrapIcon}
                    alt=""
                    onClick={() => {
                      scrapSubmitHandelOnClick();
                    }}
                  />
                </MenuButton>
              </MenuBarWrapper>
            ) : (
              <MenuBarWrapper>
                <MenuButton>
                  <img
                    src={ColorScrapIcon}
                    alt=""
                    onClick={() => {
                      scrapCancelHandelOnClick();
                    }}
                  />
                </MenuButton>
              </MenuBarWrapper>
            )
          ) : isMenuBar === false ? (
            <DeleteBar>
              <DeleteEditCardButton
                onClick={() => {
                  setIsDeleteModalOpen(true);
                }}
              >
                <img src={DeleteIcon} alt="" />
              </DeleteEditCardButton>
              <Link to={`/challenge/edit/${id}`}>
                <DeleteEditCardButton>
                  <img src={EditIcon} alt="" />
                </DeleteEditCardButton>
              </Link>
            </DeleteBar>
          ) : (
            <MenuBarWrapper>
              <MenuButton>
                <img
                  src={MenuBarIcon}
                  alt=""
                  onClick={() => {
                    setIsMenuBar(false);
                  }}
                />
              </MenuButton>
            </MenuBarWrapper>
          )}
        </div>
        {interest &&
          interest.map((item, id) => {
            return <InterestTag key={id}>#{item}</InterestTag>;
          })}
      </ProfileWrapper>
    </div>
  );
}

export default ChallengeCardProfile;
