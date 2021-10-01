import { DotText, Icon, Img, Link, MyPageCard } from 'components/atoms';
import dayjs from 'dayjs';
import {
  CommunicationKingFillIcon,
  CommunicationKingIcon,
  EmpathizingFillIcon,
  EmpathizingIcon,
  FirstCommentFillIcon,
  FirstCommentIcon,
  GetChallengeFillIcon,
  GetChallengeIcon,
  GrowingTogetherFillIcon,
  GrowingTogetherIcon,
  LargeLeftArrowIcon,
  LargeRightArrowIcon,
  NaturalBornO2FillIcon,
  NaturalBornO2Icon,
  Percent100Icon,
  Percent20Icon,
  Percent40Icon,
  Percent60Icon,
  Percent80Icon,
  ReadyForCommunicationFillIcon,
  ReadyForCommunicationIcon,
  ReadyForGrowFillIcon,
  ReadyForGrowIcon,
  ShyEmailFillIcon,
  ShyEmailIcon,
  SympathyKingFillIcon,
  SympathyKingIcon,
  UsefulLearnMyselfFillIcon,
  UsefulLearnMyselfIcon,
  UsefulShareTogetherFillIcon,
  UsefulShareTogetherIcon,
  WelcomeToO2FillIcon,
  WelcomeToO2Icon,
} from 'public/assets/images';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import { IMyPageConcert, IMyPageHeader } from 'types/myPage.type';
import * as S from './style';

export interface IProps {
  userInfo: IMyPageHeader | null;
}

function MyPageSlider({ userInfo }: IProps): React.ReactElement {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [localVisible, setLocalVisible] = useState(!currentSlide);
  const globalUserInfo = useRecoilValue(userState);
  const slideRef = useRef<HTMLInputElement>(null);

  const nextSlide = (): void => {
    if (currentSlide <= 0) {
      setCurrentSlide(currentSlide + 426);
    }
  };

  const prevSlide = (): void => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 426);
    }
  };

  useEffect(() => {
    if (slideRef?.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}px)`;
    }
  }, [currentSlide]);

  useEffect(() => {
    if ((localVisible && currentSlide) || (localVisible && !currentSlide)) {
      setAnimation(true);
      setTimeout(() => setAnimation(false), 500);
    }

    setLocalVisible(!currentSlide);
  }, [localVisible, currentSlide]);

  const getLevelIcon = (percent: number): string => {
    if (percent <= 20) return Percent20Icon;
    else if (percent <= 50) return Percent40Icon;
    else if (percent <= 80) return Percent60Icon;
    else if (percent <= 99) return Percent80Icon;
    else return Percent100Icon;
  };

  return (
    <S.Wrapper>
      <S.PrevButton onClick={prevSlide}>
        <Icon src={LargeLeftArrowIcon} size={48} />
      </S.PrevButton>
      <S.Slider>
        <S.SliderBox ref={slideRef}>
          <MyPageCard title="Learn Myself" width="350">
            {userInfo?.learnMyselfAchieve ? (
              <Link to={`challenge/${userInfo.learnMyselfAchieve.generation}`}>
                <S.SliderLearnMySelf>
                  <S.SliderLearnMySelfDate>
                    {`${dayjs(userInfo.learnMyselfAchieve.startDT).format('YY.MM.DD')} - ${dayjs(
                      userInfo.learnMyselfAchieve.endDT,
                    ).format('YY.MM.DD')}`}
                  </S.SliderLearnMySelfDate>
                  <S.SliderLearnMySelfImg>
                    <Img src={getLevelIcon(userInfo.learnMyselfAchieve.percent)} width={180} height={115} />
                  </S.SliderLearnMySelfImg>
                  <S.SliderLearnMySelfPercentage>
                    {userInfo.learnMyselfAchieve.percent}% 달성
                  </S.SliderLearnMySelfPercentage>
                  <S.SliderLearnMySelfSuccess>
                    내가 쓴 개수 &nbsp; &nbsp;<span>{userInfo.learnMyselfAchieve.completeNum}</span> &nbsp;/ &nbsp;
                    {userInfo.learnMyselfAchieve.totalNum}
                  </S.SliderLearnMySelfSuccess>
                </S.SliderLearnMySelf>
              </Link>
            ) : (
              <S.SliderNoContent>
                <p>현재 참여한 챌린지가 없어요!</p>
              </S.SliderNoContent>
            )}
          </MyPageCard>
          <MyPageCard title="Share Together" width="310">
            {userInfo?.shareTogether ? (
              <S.SliderShareTogether>
                <h4>
                  {globalUserInfo?.nickname}님이 하셨던
                  <br /> 강연의 주제들이에요!
                </h4>
                {userInfo?.shareTogether.map((item: IMyPageConcert) => (
                  <DotText key={item.id} content={item.title} />
                ))}
              </S.SliderShareTogether>
            ) : (
              <S.SliderNoContent>
                <p>현재 참여한 강연이 없어요!</p>
              </S.SliderNoContent>
            )}
          </MyPageCard>
          <MyPageCard title="Coupon Book" width="550">
            <S.CouponBookWrapper>
              <S.SliderCoupon>
                <Icon size={70} src={userInfo?.couponBook.welcomeBadge ? WelcomeToO2FillIcon : WelcomeToO2Icon} />
                <S.TextLabel>웰컴 투 오투</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon size={70} src={userInfo?.couponBook.firstJoinBadge ? ReadyForGrowFillIcon : ReadyForGrowIcon} />
                <S.TextLabel>성장 준비 완료</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon
                  size={70}
                  src={userInfo?.couponBook.firstWriteBadge ? GrowingTogetherFillIcon : GrowingTogetherIcon}
                />
                <S.TextLabel>함께 성장 중</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon
                  size={70}
                  src={userInfo?.couponBook.oneCommentBadge ? ReadyForCommunicationFillIcon : ReadyForCommunicationIcon}
                />
                <S.TextLabel>소통 준비 완료</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon
                  size={70}
                  src={userInfo?.couponBook.challengeBadge === 1 ? GetChallengeFillIcon : GetChallengeIcon}
                />
                <S.TextLabel>1차 챌린지 달성</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon
                  size={70}
                  src={userInfo?.couponBook.fiveCommentBadge ? CommunicationKingFillIcon : CommunicationKingIcon}
                />
                <S.TextLabel>나는야 소통왕</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon size={70} src={userInfo?.couponBook.oneLikeBadge ? EmpathizingFillIcon : EmpathizingIcon} />
                <S.TextLabel>당신은 공감중</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon size={70} src={userInfo?.couponBook.fiveLikeBadge ? SympathyKingFillIcon : SympathyKingIcon} />
                <S.TextLabel>당신은 공감왕</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon size={70} src={userInfo?.couponBook.loginBadge ? NaturalBornO2FillIcon : NaturalBornO2Icon} />
                <S.TextLabel>뼛속부터 오투인</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon
                  size={70}
                  src={userInfo?.couponBook.challengeBadge === 2 ? GetChallengeFillIcon : GetChallengeIcon}
                />
                <S.TextLabel>2차 챌린지 달성</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon size={70} src={userInfo?.couponBook.marketingBadge ? ShyEmailFillIcon : ShyEmailIcon} />
                <S.TextLabel>수줍은 이메일</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon
                  size={70}
                  src={userInfo?.couponBook.learnMySelfBadge ? UsefulLearnMyselfFillIcon : UsefulLearnMyselfIcon}
                />
                <S.TextLabel>유용한 런마쎌</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon
                  size={70}
                  src={userInfo?.couponBook.concertScrapBadge ? UsefulShareTogetherFillIcon : UsefulShareTogetherIcon}
                />
                <S.TextLabel>유용한 쉐투</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon size={70} src={userInfo?.couponBook.firstReplyBadge ? FirstCommentFillIcon : FirstCommentIcon} />
                <S.TextLabel>설레는 첫 답글</S.TextLabel>
              </S.SliderCoupon>
              <S.SliderCoupon>
                <Icon
                  size={70}
                  src={userInfo?.couponBook.challengeBadge === 3 ? GetChallengeFillIcon : GetChallengeIcon}
                />
                <S.TextLabel>3차 챌린지 달성</S.TextLabel>
              </S.SliderCoupon>
            </S.CouponBookWrapper>
          </MyPageCard>
        </S.SliderBox>
      </S.Slider>
      {(!localVisible || animation) && <S.GradientLeft disappear={!!currentSlide}></S.GradientLeft>}
      {(localVisible || animation) && <S.GradientRight disappear={!!currentSlide}></S.GradientRight>}
      <S.NextButton onClick={nextSlide}>
        <Icon src={LargeRightArrowIcon} size={48} />
      </S.NextButton>
    </S.Wrapper>
  );
}

export default MyPageSlider;
