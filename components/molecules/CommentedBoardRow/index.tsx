import React from 'react';
import { getTimeForToday } from 'utils';
import {
  InfoDate,
  InfoWrapper,
  LinkText,
  OriginBoardButton,
  OriginBoardLink,
  RowCheckBox,
  RowLabel,
  RowWrapper,
  VerticalBar,
  Wrapper,
} from './style';

export interface IProps {
  isChecked: boolean;
  id: number;
  content?: string;
  date: string;
  boardId: number;
  category: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDetailModal: (id: number) => void;
}

function CommentedBoardRow({
  content,
  date,
  boardId,
  id,
  onChange,
  isChecked,
  category,
  handleDetailModal,
}: IProps): React.ReactElement {
  const onClickHandler = () => {
    handleDetailModal(boardId);
  };

  return (
    <Wrapper>
      {content && (
        <RowWrapper>
          <RowCheckBox id={id.toString()} onChange={onChange} checked={isChecked} />
          <RowLabel htmlFor={id.toString()}>{content}</RowLabel>
          <InfoWrapper>
            <InfoDate>{getTimeForToday(date)}</InfoDate>
            <VerticalBar></VerticalBar>
            {category === 'Challenge' ? (
              <OriginBoardButton onClick={onClickHandler}>
                <LinkText>원문보기</LinkText>
              </OriginBoardButton>
            ) : (
              <OriginBoardLink to={category === 'Concert' ? `concert/${boardId}` : `notice/${boardId}`}>
                <LinkText>원문보기</LinkText>
              </OriginBoardLink>
            )}
          </InfoWrapper>
        </RowWrapper>
      )}
    </Wrapper>
  );
}

export default CommentedBoardRow;
