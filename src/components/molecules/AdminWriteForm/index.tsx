import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import Label from 'components/atoms/Label';
import Input from 'components/atoms/Input';
import DropDown from 'components/molecules/DropDown';
import ChipBtn from 'components/atoms/ChipBtn';
import { interestList } from 'resources/string';
import EditorForm from 'components/molecules/EditorForm';

interface IUserData {
  title: string;
  category: string[];
  menu: string;
  content: string;
  hashtag: string[];
}
interface IConditionMet {
  title: boolean;
  category: boolean;
  menu: boolean;
  content: boolean;
  hashtag: boolean;
}
export interface IProps {
  setIsConditionMet: (value: IConditionMet) => void;
  writeData: IUserData;
  setWriteData: (value: IUserData) => void;
}

function AdminWriteForm({ setIsConditionMet, writeData, setWriteData }: IProps): React.ReactElement {
  const [category, setCategory] = useState('카테고리를 선택하세요');
  const [menu, setMenu] = useState('메뉴를 선택하세요');
  const [content, setContent] = useState('');
  const [currentHashtag, setCurrentHashtag] = useState('');
  const [isValueExist, setIsValueExist] = useState({
    // 값이 들어있는지 유무
    title: false,
    category: false,
    menu: false,
    content: false,
    hashtag: false,
  });
  const [isFocused, setIsFocused] = useState({
    // 인풋에 포커스가 되어있는지 유무
    title: false,
    hashtag: false,
  });
  const hashTagInputHandler = () => {
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
    setIsConditionMet(isValueExist);
  }, [isValueExist]);

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
  }, [category]);
  useEffect(() => {
    //DropDown으로 받아온 입력값들 writeData에 저장
    menu != '메뉴를 선택하세요' && setWriteData({ ...writeData, menu: menu });
  }, [menu]);

  useEffect(() => {
    if (writeData.title !== '') {
      setIsValueExist({ ...isValueExist, title: true });
    } else {
      setIsValueExist({ ...isValueExist, title: false });
    }
  }, [writeData.title]);
  useEffect(() => {
    if (writeData.hashtag.length > 0 && writeData.hashtag[0] != '') {
      setIsValueExist({ ...isValueExist, hashtag: true });
    } else {
      setIsValueExist({ ...isValueExist, hashtag: false });
    }
  }, [writeData.hashtag]);

  useEffect(() => {
    if (writeData.category.length >= 1) setIsValueExist({ ...isValueExist, category: true });
    else {
      setCategory('카테고리를 선택하세요');
      //카테고리를 다 지워서 하나도 남지 않으면 DropDown의 테두리 색을 회색으로 돌려두고 설명을 보여주기 위함
      setIsValueExist({ ...isValueExist, category: false });
    }
  }, [writeData.category]);

  useEffect(() => {
    if (writeData.menu !== '') {
      setIsValueExist({ ...isValueExist, menu: true });
    } else {
      setIsValueExist({ ...isValueExist, menu: false });
    }
  }, [writeData.menu]);
  useEffect(() => {
    console.log(content);
    setWriteData({ ...writeData, content: content });
    if (content !== '<p><br></p>' && content !== '') {
      setIsValueExist({ ...isValueExist, content: true });
    } else {
      setIsValueExist({ ...isValueExist, content: false });
    }
  }, [content]);

  return (
    <SAdminWriteForm isValueExist={isValueExist} isFocused={isFocused}>
      <Label className="admin__label" name="제목" />
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
      <div className="admin__container--dropdowns">
        <div style={{ marginRight: '62px' }}>
          <Label className="admin__label" name="카테고리" />
          <DropDown
            state={category}
            setState={setCategory}
            defaultMsg="카테고리를 선택하세요"
            itemList={interestList}
            page="adminwrite"
          />
        </div>
        <div>
          <Label className="admin__label" name="메뉴" />
          <DropDown
            state={menu}
            setState={setMenu}
            defaultMsg="메뉴를 선택하세요"
            itemList={['Share Together', '공지사항']}
            page="adminwrite"
          />
        </div>
      </div>
      {writeData.category.length > 0 ? (
        <div className="admin__container--categoryChips">
          {writeData.category.map((category, id) => {
            return (
              category != '' && <ChipBtn name={category} key={id} writeData={writeData} setWriteData={setWriteData} />
            );
          })}
        </div>
      ) : (
        <div className="admin__container--categoryChips">for hide</div>
      )}

      <EditorForm setContent={setContent} content={content} />
      <Label className="admin__label" name="해시태그" />
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
              hashTagInputHandler();
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
  };
  isFocused: {
    title: boolean;
    hashtag: boolean;
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
      }
      &--categoryChips{
        width : 100%;
        display : flex;
        column-gap: 10px;
        flex-direction: row;
        justify-content : flex-start;
        flex-wrap : wrap;
        margin-top : 20px;
        height : 46px;
        color : rgba(0,0,0,0);
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
`;

export default AdminWriteForm;
