import { Switch, withStyles } from '@material-ui/core';
import { EditWhiteIcon, XIcon } from 'assets/images';
import { StyledInput } from 'components/atoms';
import { DropDown, DropDownMulti } from 'components/molecules';
import React from 'react';
import { interestList } from 'resources/string';
import { ISettingUserInfo } from 'types/setting.type';
import {
  Btn,
  CategoryContainer,
  Container,
  DropdownWrapper,
  EditBtn,
  Email,
  InterestList,
  InterestTagCntnr,
  NicknameInputContainer,
  PolicyCntnr,
  ProfileContainer,
  ProfileImg,
  ProfileInput,
  PwBtn,
  Text,
  TextWrapper,
  Txt,
  TxtSmall,
} from './style';

export interface IProps {
  userInfo: ISettingUserInfo;
  imgInput: React.RefObject<HTMLInputElement>;
  isBtnAtv: boolean;
  handleInputImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUserNickname: (nickname: string) => void;
  handleClickDel: (e: string) => void;
  handleUserInterest: (e: string) => void;
  handleUserGender: (e: string) => void;
  handleUserMarpolicy: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickEdit: () => Promise<void>;
  handlePasswordBtnClicked: () => void;
}

function SettingTemplate({
  userInfo,
  imgInput,
  isBtnAtv,
  handleInputImg,
  handleUserNickname,
  handleClickDel,
  handleUserInterest,
  handleUserGender,
  handleUserMarpolicy,
  handleClickEdit,
  handlePasswordBtnClicked,
}: IProps): React.ReactElement {
  return (
    <Container>
      <ProfileContainer>
        <ProfileImg url={userInfo.img} />
        <label htmlFor="file">
          <EditBtn src={EditWhiteIcon} />
        </label>
        <ProfileInput
          type="file"
          id="file"
          accept="image/jpeg, image/jpg, image/png"
          ref={imgInput}
          onChange={handleInputImg}
        />
      </ProfileContainer>
      <Txt>아이디</Txt>
      <Email>{userInfo.email}</Email>
      <Txt>닉네임</Txt>
      <NicknameInputContainer>
        <StyledInput
          width="844px"
          height="60px"
          placeHolder={userInfo.nickname}
          onChange={handleUserNickname}
          isConditionMet={userInfo.nickname !== ''}
          errorMsg="닉네임을 입력해주세요"
        />
      </NicknameInputContainer>
      <Txt>카테고리</Txt>
      <CategoryContainer>
        <DropDownMulti
          state={userInfo.interest}
          setState={handleUserInterest}
          defaultMsg="카테고리를 선택해 주세요 (최대 5개)"
          itemList={interestList}
        />
      </CategoryContainer>
      <InterestList>
        {userInfo.interest.map((item: string, idx: number) => {
          return <InterestTag text={item} setList={handleClickDel} key={idx} />;
        })}
      </InterestList>
      <Txt>성별</Txt>
      <DropdownWrapper>
        <DropDown
          state={userInfo.gender === 0 ? '남성' : userInfo.gender === 1 ? '여성' : '선택안함'}
          setState={handleUserGender}
          defaultMsg="성별 선택"
          itemList={['남성', '여성', '선택안함']}
          page="joinform"
          isSetting={true}
        />
      </DropdownWrapper>
      <Txt>비밀번호 변경</Txt>
      <PwBtn onClick={handlePasswordBtnClicked}>비밀번호 변경하기</PwBtn>
      <PolicyCntnr>
        <TextWrapper>
          <Text>이메일 수신 설정</Text>
          <TxtSmall>오투에서 진행하는 챌린지, 이벤트, 프로모션에 관한 광고를 수신하겠습니다.</TxtSmall>
        </TextWrapper>
        <IOSSwitch checked={userInfo.marpolicy} onChange={handleUserMarpolicy} name="checkedB" />
      </PolicyCntnr>
      <Btn isActive={isBtnAtv} onClick={handleClickEdit}>
        수정완료
      </Btn>
    </Container>
  );
}

export default SettingTemplate;

const InterestTag = ({ setList, text }: { setList: (e: string) => void; text: string }) => {
  return (
    <InterestTagCntnr>
      <div>{text}</div>
      <img id={text} src={XIcon} onClick={(e: any) => setList(e.target.id)} />
    </InterestTagCntnr>
  );
};

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    'padding': 1,
    '&$checked': {
      'transform': 'translateX(16px)',
      'color': theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#3d3d3d',
        opacity: 1,
        border: '#dfdfdf',
      },
    },
    '&$focusVisible $thumb': {
      color: '#3d3d3d',
      border: '6px solid #dfdfdf',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }: any) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
