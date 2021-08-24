import { ChipBtn, FileUpload, StyledInput } from 'components/atoms';
import { DropDown, EditorForm } from 'components/molecules';
import { GreyPlusIcon } from 'public/assets/images';
import React, { useEffect, useState } from 'react';
import { interestList } from 'resources/string';
import { IAdminWriteConditionMet } from 'types/admin.type';
import { IUserData } from 'types/user.type';
import {
  CategoryChipsContainer,
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
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const handleTitleOnChange = (value: string) => {
    setWriteData({ ...writeData, title: value });
  };

  const handleNicknameOnChange = (value: string) => {
    setWriteData({ ...writeData, nickname: value });
  };

  useEffect(() => {
    if (menuProps === 'sharetogether') setMenu('Share Together');
    else if (menuProps === 'notice') setMenu('공지사항');
  }, [menuProps]);

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
          <WriteLabel>제목</WriteLabel>
          <StyledInput
            placeHolder="제목을 입력하세요"
            width="598px"
            height="60px"
            onChange={handleTitleOnChange}
            isConditionMet={isConditionMet.title}
          />
        </TitleContainer>
        <NicknameContainer>
          <WriteLabel>연사 닉네임</WriteLabel>
          <StyledInput
            placeHolder="연사 닉네임을 입력하세요"
            width="222px"
            height="60px"
            onChange={handleNicknameOnChange}
            isConditionMet={isConditionMet.nickname}
          />
        </NicknameContainer>
      </TopRowContainer>
      <RowContainer>
        <div>
          <WriteLabel>메뉴</WriteLabel>
          <DropDown
            state={menu}
            setState={setMenu}
            defaultMsg="메뉴를 선택하세요"
            itemList={['Share Together', '공지사항']}
            page="adminwrite"
          />
        </div>
        <div>
          <WriteLabel>카테고리</WriteLabel>
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
          <WriteLabel>동영상 업로드</WriteLabel>
          <FileUpload width={'400px'} height={'225px'} setFile={setVideoFile} fileType={1}>
            <VideoUploadSpace>
              <Icon src={GreyPlusIcon}></Icon>
              <UploadDescription>동영상 업로드하기</UploadDescription>
            </VideoUploadSpace>
          </FileUpload>
        </UploadContainer>
        <UploadContainer>
          <WriteLabel>썸네일 업로드</WriteLabel>
          <FileUpload width={'262px'} height={'225px'} setFile={setThumbnail} fileType={0}>
            <ThumbnailUploadSpace>
              <Icon src={GreyPlusIcon}></Icon>
              <UploadDescription>썸네일 이미지 업로드하기</UploadDescription>
            </ThumbnailUploadSpace>
          </FileUpload>
        </UploadContainer>
      </RowUploadContainer>
    </Wrapper>
  );
}

export default AdminWriteForm;
