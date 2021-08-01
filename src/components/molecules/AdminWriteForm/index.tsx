import { GreyPlusIcon } from 'assets/images';
import { ChipBtn, FileUpload, StyledInput } from 'components/atoms';
import { DropDown, EditorForm } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { interestList } from 'resources/string';
import { IAdminWriteConditionMet } from 'types/admin.type';
import { IUserData } from 'types/user.type';
import {
  CategoryChipsContainer,
  HashTag,
  HashTagContainer,
  HashTagInput,
  HashTagInputContainer,
  Icon,
  NicknameContainer,
  RowContainer,
  RowUploadContainer,
  ThumbnailUploadSpace,
  TitleContainer,
  TopRowContainer,
  UploadContainer,
  UploadDescription,
  VideoUploadSpace,
  Wrapper,
  WriteLabel,
} from './style';

export interface IProps {
  isConditionMet: IAdminWriteConditionMet;
  setIsConditionMet: (value: IAdminWriteConditionMet) => void;
  writeData: IUserData;
  setWriteData: (value: IUserData) => void;
  menuProps: string;
}

function AdminWriteForm({
  setIsConditionMet,
  writeData,
  setWriteData,
  menuProps,
  isConditionMet,
}: IProps): React.ReactElement {
  const [category, setCategory] = useState('카테고리를 선택하세요');
  const [menu, setMenu] = useState('');
  const [content, setContent] = useState('');
  const [currentHashtag, setCurrentHashtag] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [isHashTagFocused, setIsHashTagFocused] = useState(false);

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
  }, []);

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
      setIsConditionMet({ ...isConditionMet, title: true });
    } else {
      setIsConditionMet({ ...isConditionMet, title: false });
    }
  }, [writeData.title]);

  useEffect(() => {
    if (writeData.nickname !== '') {
      setIsConditionMet({ ...isConditionMet, nickname: true });
    } else {
      setIsConditionMet({ ...isConditionMet, nickname: false });
    }
  }, [writeData.nickname]);

  useEffect(() => {
    if (writeData.hashtag.length > 0 && writeData.hashtag[0] != '') {
      setIsConditionMet({ ...isConditionMet, hashtag: true });
    } else {
      setIsConditionMet({ ...isConditionMet, hashtag: false });
    }
  }, [writeData.hashtag]);

  useEffect(() => {
    if (writeData.category.length >= 1) setIsConditionMet({ ...isConditionMet, category: true });
    else {
      setCategory('카테고리를 선택하세요');
      //카테고리를 다 지워서 하나도 남지 않으면 DropDown의 테두리 색을 회색으로 돌려두고 설명을 보여주기 위함
      setIsConditionMet({ ...isConditionMet, category: false });
    }
  }, [writeData.category]);

  useEffect(() => {
    if (writeData.menu !== '') {
      setIsConditionMet({ ...isConditionMet, menu: true });
    } else {
      setIsConditionMet({ ...isConditionMet, menu: false });
    }
  }, [writeData.menu]);

  useEffect(() => {
    setWriteData({ ...writeData, content: content });
    if (content !== '<p><br></p>' && content !== '') {
      setIsConditionMet({ ...isConditionMet, content: true });
    } else {
      setIsConditionMet({ ...isConditionMet, content: false });
    }
  }, [content]);

  useEffect(() => {
    setWriteData({ ...writeData, video: videoFile });
    if (videoFile !== null) {
      setIsConditionMet({ ...isConditionMet, video: true });
    } else {
      setIsConditionMet({ ...isConditionMet, video: false });
    }
  }, [videoFile]);

  useEffect(() => {
    setWriteData({ ...writeData, thumbnail: thumbnail });
    if (thumbnail !== null) {
      setIsConditionMet({ ...isConditionMet, thumbnail: true });
    } else {
      setIsConditionMet({ ...isConditionMet, thumbnail: false });
    }
  }, [thumbnail]);

  return (
    <Wrapper>
      <TopRowContainer>
        <TitleContainer>
          <WriteLabel className="subhead4">제목</WriteLabel>
          <StyledInput
            placeHolder="제목을 입력하세요"
            width="598px"
            height="60px"
            onChange={(value) => {
              if (typeof value === 'string') setWriteData({ ...writeData, title: value });
            }}
            isConditionMet={isConditionMet.title}
          />
        </TitleContainer>
        <NicknameContainer>
          <WriteLabel className="subhead4">연사 닉네임</WriteLabel>
          <StyledInput
            placeHolder="연사 닉네임을 입력하세요"
            width="222px"
            height="60px"
            onChange={(value) => {
              if (typeof value === 'string') setWriteData({ ...writeData, nickname: value });
            }}
            isConditionMet={isConditionMet.nickname}
          />
        </NicknameContainer>
      </TopRowContainer>
      <RowContainer>
        <div>
          <WriteLabel className="subhead4">메뉴</WriteLabel>
          <DropDown
            state={menu}
            setState={setMenu}
            defaultMsg="메뉴를 선택하세요"
            itemList={['Share Together', '공지사항']}
            page="adminwrite"
          />
        </div>
        <div>
          <WriteLabel className="subhead4">카테고리</WriteLabel>
          <DropDown
            state={category}
            setState={setCategory}
            defaultMsg="카테고리를 선택하세요"
            itemList={interestList}
            page="adminwrite"
          />
          <CategoryChipsContainer>
            {writeData.category.length > 0 &&
              writeData.category.map((category, id) => {
                return (
                  category != '' && (
                    <ChipBtn name={category} key={id} writeData={writeData} setWriteData={setWriteData} />
                  )
                );
              })}
          </CategoryChipsContainer>
        </div>
      </RowContainer>
      <EditorForm setContent={setContent} content={content} />
      <RowUploadContainer>
        <UploadContainer>
          <WriteLabel className="subhead4">동영상 업로드</WriteLabel>
          <FileUpload width={'400px'} height={'225px'} setFile={setVideoFile} fileType={1}>
            <VideoUploadSpace className="fileUpload__container fileUpload__container--video">
              <Icon src={GreyPlusIcon}></Icon>
              <UploadDescription className="subhead3">동영상 업로드하기</UploadDescription>
            </VideoUploadSpace>
          </FileUpload>
        </UploadContainer>
        <UploadContainer>
          <WriteLabel className="subhead4">썸네일 업로드</WriteLabel>
          <FileUpload width={'262px'} height={'225px'} setFile={setThumbnail} fileType={0}>
            <ThumbnailUploadSpace>
              <Icon src={GreyPlusIcon}></Icon>
              <UploadDescription className="subhead3">썸네일 이미지 업로드하기</UploadDescription>
            </ThumbnailUploadSpace>
          </FileUpload>
        </UploadContainer>
      </RowUploadContainer>
      <WriteLabel className="subhead4">해시태그</WriteLabel>
      <HashTagInputContainer isFocused={isHashTagFocused}>
        <HashTagInput
          className="admin__input body2"
          name="adminWriteTitle"
          placeholder="최대 15개 가능"
          value={currentHashtag}
          onChange={(e) => {
            setCurrentHashtag(e.target.value);
          }}
          onFocus={() => {
            setIsHashTagFocused(true);
          }}
          onBlur={() => {
            setIsHashTagFocused(false);
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              addHashTag();
            }
          }}
        />
      </HashTagInputContainer>
      <HashTagContainer>
        {writeData.hashtag.length >= 0 &&
          writeData.hashtag.map((hashtag, id) => {
            return (
              hashtag != '' && (
                <HashTag className="body2" key={id}>
                  #{hashtag}
                </HashTag>
              )
            );
          })}
      </HashTagContainer>
    </Wrapper>
  );
}

export default AdminWriteForm;
