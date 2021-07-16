import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import editIcon from 'assets/images/editwhite.png';
import xIcon from 'assets/images/xIcon.svg';
import StyledInput from 'components/atoms/StyledInput';
import DropDown from 'components/molecules/DropDown';
import DropDownMulti from 'components/molecules/DropDownMulti';
import Header from 'components/organisms/Header';
import { getUserInfo, updateUserInfo } from 'libs/axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { interestList } from 'resources/string';
import { userState, userStatusState } from 'stores/user';
import styled, { css } from 'styled-components';

interface IUserInfo {
  nickname: string;
  img: string;
  marpolicy: boolean;
  _id: string;
  email: string;
  gender: number;
  interest: string[];
}

function Setting({}: any): React.ReactElement {
  // for edit btn
  const [isBtnAtv, setIsBtnAtv] = useState(true);
  const history = useHistory();

  // for user info
  const [userData, setUserData] = useRecoilState(userState);
  const userStatusData = useRecoilValue(userStatusState);
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    nickname: '',
    img: '',
    marpolicy: true,
    _id: '',
    email: '',
    gender: 0,
    interest: [],
  });

  // for img input
  const imgInput = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);
  const handleInputImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUserInfo({
        ...userInfo,
        img: URL.createObjectURL(e.target.files[0]),
      });
      setImg(e.target.files[0]);
      setIsEmpty(false);
    }
    imgInput.current && imgInput.current.value;
  };

  const handleClickDel = (e: string) => {
    setUserInfo({
      ...userInfo,
      interest: userInfo.interest.filter((it: string) => it !== e),
    });
  };

  const handleClickEdit = async () => {
    let data = null;
    if (!isEmpty) {
      data = await updateUserInfo(
        userStatusData?.token,
        img,
        userInfo.nickname,
        userInfo.interest,
        userInfo.gender,
        userInfo.marpolicy,
      );
    } else {
      data = await updateUserInfo(
        userStatusData?.token,
        undefined,
        userInfo.nickname,
        userInfo.interest,
        userInfo.gender,
        userInfo.marpolicy,
      );
    }
    if (data) {
      history.goBack();
      setUserData(userInfo);
    }
  };

  // get user info
  useEffect(() => {
    (async () => {
      if (userStatusData) {
        const userInfo = await getUserInfo(userStatusData?.token);
        setUserInfo(userInfo);
      }
    })();
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    userInfo.nickname.length === 0 || userInfo.interest.length === 0 ? setIsBtnAtv(false) : setIsBtnAtv(true);
  }, [userInfo]);

  return (
    <div>
      <Header />
      <Container>
        <div style={{ marginBottom: '90px' }}>
          <ProfileImg url={userInfo.img} />
          <label htmlFor="file">
            <EditBtn src={editIcon} />
          </label>
          <input
            type="file"
            id="file"
            accept="image/jpeg, image/jpg, image/png"
            ref={imgInput}
            onChange={handleInputImg}
            style={{ width: '0', height: '0' }}
          />
        </div>
        <Txt>아이디</Txt>
        <Email>{userInfo.email}</Email>
        <Txt>닉네임</Txt>
        <div style={{ marginBottom: '50px' }}>
          <StyledInput
            width="844px"
            height="60px"
            placeHolder={userInfo.nickname}
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                nickname: String(e),
              })
            }
            isConditionMet={userInfo.nickname !== ''}
            errorMsg="닉네임을 입력해주세요"
          />
        </div>
        <Txt>카테고리</Txt>
        <div style={{ marginBottom: '20px' }}>
          <DropDownMulti
            className="user_info_dropdown"
            state={userInfo.interest}
            setState={(e) => {
              !userInfo.interest.includes(String(e)) &&
                userInfo.interest.length < 5 &&
                setUserInfo({
                  ...userInfo,
                  interest: userInfo.interest.concat([String(e)]),
                });
            }}
            defaultMsg="카테고리를 선택해 주세요 (최대 5개)"
            itemList={interestList}
          />
        </div>
        <div style={{ width: '844px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '50px' }}>
          {userInfo.interest.map((item: string, idx: number) => {
            return <InterestTag text={item} setList={handleClickDel} key={idx} />;
          })}
        </div>
        <Txt>성별</Txt>
        <div style={{ marginBottom: '50px' }}>
          <DropDown
            className="user_info_dropdown"
            state={userInfo.gender === 0 ? '남성' : userInfo.gender === 1 ? '여성' : '선택안함'}
            setState={(e) =>
              setUserInfo({
                ...userInfo,
                gender: e === '남성' ? 0 : e === '여성' ? 1 : 2,
              })
            }
            defaultMsg="성별 선택"
            itemList={['남성', '여성', '선택안함']}
            page="joinform"
            isSetting={true}
          />
        </div>
        <Txt>비밀번호 변경</Txt>
        <PwBtn onClick={() => history.push('/setPwd')}>비밀번호 변경하기</PwBtn>
        <PolicyCntnr>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Txt style={{ width: 'auto' }}>이메일 수신 설정</Txt>
            <TxtSmall>오투에서 진행하는 챌린지, 이벤트, 프로모션에 관한 광고를 수신하겠습니다.</TxtSmall>
          </div>
          <IOSSwitch
            checked={userInfo.marpolicy}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInfo({
                ...userInfo,
                marpolicy: e.target.checked,
              })
            }
            name="checkedB"
          />
        </PolicyCntnr>
        <Btn
          isActive={isBtnAtv}
          onClick={
            isBtnAtv
              ? handleClickEdit
              : () => {
                  console.log('');
                }
          }
        >
          수정완료
        </Btn>
      </Container>
    </div>
  );
}

export default withRouter(Setting);

const Container = styled.div`
  width: 100%;
  padding: 100px 0 400px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface IProfileImg {
  url: string;
}
const ProfileImg = styled.div<IProfileImg>`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background: url(${(props) => props.url}) center center / cover;
`;

const EditBtn = styled.img`
  cursor: pointer;

  position: relative;
  top: -54px;
  left: 105px;

  width: 45px;
  height: 45px;
`;

const Txt = styled.div`
  width: 844px;
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 700;
  color: #0d0d0d;
`;

const TxtSmall = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #6f6f6f;
`;

const Email = styled.div`
  width: 844px;
  height: 60px;
  margin-bottom: 50px;
  padding: 18px 20px 18px 20px;
  border-radius: 4px;
  background-color: #dfdfdf;

  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  color: #8b8b8b;
`;

const PolicyCntnr = styled.div`
  width: 844px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

const PwBtn = styled.div`
  cursor: pointer;

  width: 844px;
  height: 60px;
  margin-bottom: 50px;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color: #0d0d0d;
`;

interface IBtn {
  isActive: boolean;
}
const Btn = styled.div<IBtn>`
  cursor: pointer;

  width: 844px;
  height: 60px;
  border-radius: 4px;
  background-color: #dfdfdf;
  ${(props) =>
    props.isActive &&
    css`
      background-image: linear-gradient(to right, #36c8f5, #13e2dd);
    `}

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  color: #ffffff;
`;

const InterestTag = ({ setList, text }: { setList: (e: string) => void; text: string }) => {
  return (
    <InterestTagCntnr>
      <div style={{ marginRight: '10px' }}>{text}</div>
      <img id={text} style={{ width: '14px' }} src={xIcon} onClick={(e: any) => setList(e.target.id)} />
    </InterestTagCntnr>
  );
};

const InterestTagCntnr = styled.div`
  margin-right: 10px;
  padding: 12px 30px;
  border-radius: 60px;
  border: solid 1px #03b6ce;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 16px;
  font-weight: bold;
  line-height: 1.38;
  color: #03b6ce;
  letter-spacing: -0.5px;
`;

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
