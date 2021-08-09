import React, { useState } from 'react';
import { IUserData } from 'types/user.type';
import { HashTag, HashTagContainer, HashTagInput, HashTagInputContainer, Wrapper } from './style';

export interface IProps {
  writeData: IUserData;
  setWriteData: (value: IUserData) => void;
}

function HashTagAddForm({ writeData, setWriteData }: IProps): React.ReactElement {
  const [currentHashtag, setCurrentHashtag] = useState('');
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
  return (
    <Wrapper>
      <HashTagInputContainer isFocused={isHashTagFocused}>
        <HashTagInput
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
            return hashtag != '' && <HashTag key={id}>#{hashtag}</HashTag>;
          })}
      </HashTagContainer>
    </Wrapper>
  );
}

export default HashTagAddForm;
