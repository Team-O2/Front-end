import { GreyPlusIcon } from 'assets/images';
import { ChipBtn, FileUpload, Input, Label } from 'components/atoms';
import { DropDown, EditorForm } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { interestList } from 'resources/string';
import Styled from 'styled-components';
import { IUserData } from 'types/user.type';

interface IConditionMet {
  title: boolean;
  category: boolean;
  menu: boolean;
  content: boolean;
  hashtag: boolean;
  video: boolean;
  thumbnail: boolean;
  nickname: boolean;
}

export interface IProps {
  setIsConditionMet: (value: IConditionMet) => void;
  writeData: IUserData;
  setWriteData: (value: IUserData) => void;
  menuProps: string;
}

function AdminWriteForm({ setIsConditionMet, writeData, setWriteData, menuProps }: IProps): React.ReactElement {
  const [category, setCategory] = useState('카테고리를 선택하세요');
  const [menu, setMenu] = useState('');
  const [content, setContent] = useState('');
  const [currentHashtag, setCurrentHashtag] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const [isValueExist, setIsValueExist] = useState({
    // 값이 들어있는지 유무
    title: false,
    category: false,
    menu: false,
    content: false,
    hashtag: false,
    video: false,
    thumbnail: false,
    nickname: false,
  });
  const [isFocused, setIsFocused] = useState({
    // 인풋에 포커스가 되어있는지 유무
    title: false,
    hashtag: false,
    nickname: false,
  });
  const addHashTag = () => {
    if (currentHashtag !== '' && writeData.hashtag.length < 15) {
      if (writeData.hashtag[0] == '') {
        setWriteData({ ...writeData, hashtag: [currentHashtag] });
      } else {
        setWriteData({ ...writeData, hashtag: [...writeData.hashtag, currentHashtag] });
      }
      setCurrentHashtag('');
    }
  };

  useEffect(() => {
    if (menuProps === 'sharetogether') setMenu('Share Together');
    else setMenu('공지사항');
  }, [menuProps]);

  useEffect(() => {
    setIsConditionMet(isValueExist);
  }, [isValueExist, setIsConditionMet]);

  useEffect(() => {
    //DropDown으로 받아온 입력값들 writeData에 저장
    if (category != '카테고리를 선택하세요' && writeData.category[0] == '') {
      setWriteData({ ...writeData, category: [category] });
    } else if (
      !writeData.category.includes(category) &&
      category != '카테고리를 선택하세요' &&
      writeData.category.length < 3
    ) {
      setWriteData({ ...writeData, category: [...writeData.category, category] });
    }
  }, [category, setWriteData, writeData]);
  useEffect(() => {
    //DropDown으로 받아온 입력값들 writeData에 저장
    menu != '메뉴를 선택하세요' && setWriteData({ ...writeData, menu: menu });
  }, [menu, setWriteData, writeData]);

  useEffect(() => {
    if (writeData.title !== '') {
      setIsValueExist({ ...isValueExist, title: true });
    } else {
      setIsValueExist({ ...isValueExist, title: false });
    }
  }, [isValueExist, writeData.title]);

  useEffect(() => {
    if (writeData.nickname !== '') {
      setIsValueExist({ ...isValueExist, nickname: true });
    } else {
      setIsValueExist({ ...isValueExist, nickname: false });
    }
  }, [isValueExist, writeData.nickname]);

  useEffect(() => {
    if (writeData.hashtag.length > 0 && writeData.hashtag[0] != '') {
      setIsValueExist({ ...isValueExist, hashtag: true });
    } else {
      setIsValueExist({ ...isValueExist, hashtag: false });
    }
  }, [isValueExist, writeData.hashtag]);

  useEffect(() => {
    if (writeData.category.length >= 1) setIsValueExist({ ...isValueExist, category: true });
    else {
      setCategory('카테고리를 선택하세요');
      //카테고리를 다 지워서 하나도 남지 않으면 DropDown의 테두리 색을 회색으로 돌려두고 설명을 보여주기 위함
      setIsValueExist({ ...isValueExist, category: false });
    }
  }, [isValueExist, writeData.category]);

  useEffect(() => {
    if (writeData.menu !== '') {
      setIsValueExist({ ...isValueExist, menu: true });
    } else {
      setIsValueExist({ ...isValueExist, menu: false });
    }
  }, [isValueExist, writeData.menu]);

  useEffect(() => {
    setWriteData({ ...writeData, content: content });
    if (content !== '<p><br></p>' && content !== '') {
      setIsValueExist({ ...isValueExist, content: true });
    } else {
      setIsValueExist({ ...isValueExist, content: false });
    }
  }, [content, isValueExist, setWriteData, writeData]);

  useEffect(() => {
    setWriteData({ ...writeData, video: videoFile });
    if (videoFile !== null) {
      setIsValueExist({ ...isValueExist, video: true });
    } else {
      setIsValueExist({ ...isValueExist, video: false });
    }
  }, [isValueExist, setWriteData, videoFile, writeData]);

  useEffect(() => {
    setWriteData({ ...writeData, thumbnail: thumbnail });
    if (thumbnail !== null) {
      setIsValueExist({ ...isValueExist, thumbnail: true });
    } else {
      setIsValueExist({ ...isValueExist, thumbnail: false });
    }
  }, [isValueExist, setWriteData, thumbnail, writeData]);

  return (
    <SAdminWriteForm isValueExist={isValueExist} isFocused={isFocused}>
      <div className="admin__container--topouter">
        <div className="admin__container--title">
          <Label className="admin__label">제목</Label>
          <div className="admin__div admin__div--title">
            <Input
              className="admin__input"
              name="adminWriteTitle"
              placeholder="제목을 입력하세요"
              onChange={(e) => {
                setWriteData({ ...writeData, title: e.target.value });
              }}
              onFocus={() => {
                setIsFocused({ ...isFocused, title: true });
              }}
              onBlur={() => {
                setIsFocused({ ...isFocused, title: false });
              }}
            />
          </div>
        </div>
        <div className="admin__container--nickname">
          <Label className="admin__label">연사 닉네임</Label>
          <div className="admin__div admin__div--nickname">
            <Input
              className="admin__input"
              name="adminWriteTitle"
              placeholder="연사 닉네임을 입력하세요"
              onChange={(e) => {
                setWriteData({ ...writeData, nickname: e.target.value });
              }}
              onFocus={() => {
                setIsFocused({ ...isFocused, nickname: true });
              }}
              onBlur={() => {
                setIsFocused({ ...isFocused, nickname: false });
              }}
            />
          </div>
        </div>
      </div>
      <div className="admin__container--dropdowns">
        <div>
          <Label className="admin__label">메뉴</Label>
          <DropDown
            state={menu}
            setState={setMenu}
            defaultMsg="메뉴를 선택하세요"
            itemList={['Share Together', '공지사항']}
            page="adminwrite"
          />
        </div>
        <div>
          <Label className="admin__label">카테고리</Label>
          <DropDown
            state={category}
            setState={setCategory}
            defaultMsg="카테고리를 선택하세요"
            itemList={interestList}
            page="adminwrite"
          />
          {writeData.category.length > 0 ? (
            <div className="admin__container--categoryChips">
              {writeData.category.map((category, id) => {
                return (
                  category != '' && (
                    <ChipBtn name={category} key={id} writeData={writeData} setWriteData={setWriteData} />
                  )
                );
              })}
            </div>
          ) : (
            <div className="admin__container--categoryChips">for hide</div>
          )}
        </div>
      </div>

      <EditorForm setContent={setContent} content={content} />
      <div className="admin__container--uploads">
        <div className="admin__container--upload admin__container--videoUpload">
          <Label className="admin__label">동영상 업로드</Label>
          <FileUpload width={'400px'} height={'225px'} setFile={setVideoFile} fileType={1}>
            <div className="fileUpload__container fileUpload__container--video">
              <img className="fileUpload__icon--plus" src={GreyPlusIcon}></img>
              <div className="fileUpload__desc">동영상 업로드하기</div>
            </div>
          </FileUpload>
        </div>
        <div className="admin__container--upload">
          <Label className="admin__label">썸네일 업로드</Label>
          <FileUpload width={'262px'} height={'225px'} setFile={setThumbnail} fileType={0}>
            <div className="fileUpload__container fileUpload__container--thumbnail">
              <img className="fileUpload__icon--plus" src={GreyPlusIcon}></img>
              <div className="fileUpload__desc">썸네일 이미지 업로드하기</div>
            </div>
          </FileUpload>
        </div>
      </div>
      <Label className="admin__label">해시태그</Label>
      <div className="admin__div admin__div--hashtag">
        <Input
          className="admin__input"
          name="adminWriteTitle"
          placeholder="최대 15개 가능"
          value={currentHashtag}
          onChange={(e) => {
            setCurrentHashtag(e.target.value);
          }}
          onFocus={() => {
            setIsFocused({ ...isFocused, hashtag: true });
          }}
          onBlur={() => {
            setIsFocused({ ...isFocused, hashtag: false });
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              addHashTag();
            }
          }}
        />
      </div>
      {writeData.hashtag.length >= 0 ? (
        <div className="admin__container--hastagList">
          {writeData.hashtag.map((hashtag, id) => {
            return (
              hashtag != '' && (
                <div className="admin__hashtag" key={id}>
                  #{hashtag}
                </div>
              )
            );
          })}
        </div>
      ) : (
        <div className="admin__container--hastagList"></div>
      )}
    </SAdminWriteForm>
  );
}

const SAdminWriteForm = Styled.div<{
  isValueExist?: {
    title: boolean;
    category: boolean;
    menu: boolean;
    content: boolean;
    hashtag: boolean;
    nickname: boolean;
  };
  isFocused: {
    title: boolean;
    hashtag: boolean;
    nickname: boolean;
  };
}>`
  display : flex;
  flex-direction : column;
  align-items : center;
  width : 844px;
  input{
    border : none;
    :focus{
        outline : none;
      }
  }
  .admin{
    &__label{
      width : 100%;
      font-size: 18px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: -0.5px;
      color: #0d0d0d;
      margin-bottom : 8px;
    }
    &__div{
      width : 100%;
      height : 60px;
      border-radius: 4px;
      border: solid 1px #c1c1c1;
      &--title{
        border : ${(props) =>
          props.isValueExist?.title || props.isFocused.title ? 'double 1px transparent' : '1px solid #c1c1c1'};
        background-image : ${(props) =>
          props.isValueExist?.title || props.isFocused.title
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : ${(props) =>
          props.isValueExist?.title || props.isFocused.title ? 'border-box' : undefined};
        background-clip : ${(props) =>
          props.isValueExist?.title || props.isFocused.title ? 'content-box, border-box' : undefined};    
      }
      &--hashtag{
        border : ${(props) =>
          props.isValueExist?.hashtag || props.isFocused.hashtag ? 'double 1px transparent' : '1px solid #c1c1c1'};
        background-image : ${(props) =>
          props.isValueExist?.hashtag || props.isFocused.hashtag
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : ${(props) =>
          props.isValueExist?.hashtag || props.isFocused.hashtag ? 'border-box' : undefined};
        background-clip : ${(props) =>
          props.isValueExist?.hashtag || props.isFocused.hashtag ? 'content-box, border-box' : undefined};    
      }
      &--nickname{
        border : ${(props) =>
          props.isValueExist?.nickname || props.isFocused.nickname ? 'double 1px transparent' : '1px solid #c1c1c1'};
        background-image : ${(props) =>
          props.isValueExist?.nickname || props.isFocused.nickname
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : ${(props) =>
          props.isValueExist?.nickname || props.isFocused.nickname ? 'border-box' : undefined};
        background-clip : ${(props) =>
          props.isValueExist?.nickname || props.isFocused.nickname ? 'content-box, border-box' : undefined};    
      }
    }
    &__input{
      width : 100%;
      height : 100%;
      border-radius:4px;
      padding : 18px 20px;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: -0.5px;
    }

    &__container{
      &--topouter{
        width : 100%;
        display : flex;
        justify-content : space-between;
      }
      &--title{
        width : 600px;
        display : flex;
        flex-direction : column;
      }
      &--nickname{
        width : 224px;
        display : flex;
        flex-direction : column;
      }
      &--hastagList{
        width : 100%;
        display : flex;
        column-gap: 10px;
        flex-direction: row;
        flex-wrap : wrap;
        margin-top : 20px;
        margin-bottom : 130px;
      }
      &--dropdowns{
        display : flex;
        justify-content : space-between;
        margin-top : 42px;
        width : 844px;
      }
      &--categoryChips{
        width : 412px;
        display : flex;
        column-gap: 10px;
        row-gap : 10px;
        flex-direction: row;
        justify-content : flex-start;
        flex-wrap : wrap;
        margin-top : 20px;
        min-height : 46px;
        color : rgba(0,0,0,0);
      }
      &--uploads{
        display : flex;
        flex-direction: row;
        width : 100%;
        justify-content : flex-start;
        margin-bottom : 40px;
      }
      &--upload{
        display : flex;
        flex-direction: column;
      }
      &--videoUpload{
        margin-right : 20px;
      }
    }
    &__editor{
      width : 844px;
      height : 717px;
      background-color: #dfdfdf;
      margin-top : 34px;
      margin-bottom : 40px;
    }
    &__hashtag{
      padding : 5px 10px;
      background-color: #f5f5f5;
      color : #a5a5a5;
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: -0.5px; 
      min-height : 31px;
      max-width : 100%;
      white-space : break-all;
      border-radius: 50px;
      margin-bottom:10px;
    }
  }

  .fileUpload{
        &__container{
            background-color : #f2f2f2;
            display : flex;
            flex-direction : column;
            align-items : center;
            justify-content : center;
            &--video{
              width: 400px;
              height: 225px; 
            }
            &--thumbnail{
              width: 262px;
              height: 225px;
            }
        }
        &__icon--plus{
            width : 38px;
            height : 38px;
        }
        &__desc{
            font-size: 16px;
            font-weight: bold;
            line-height: 1.38;
            letter-spacing: -0.5px;
            color : #a5a5a5;
            text-align: center;
            margin-top :4px;
            margin-bottom : 20px;
        }
    }
`;

export default AdminWriteForm;
