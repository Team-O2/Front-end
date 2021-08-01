import React from 'react';
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
  id: string;
  content?: string;
  date: string;
  boardId: string;
  category: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDetailModal: (id: string) => void;
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
  return (
    <Wrapper>
      {content && (
        <RowWrapper>
          <RowCheckBox id={id} onChange={onChange} checked={isChecked} />
          <RowLabel htmlFor={id}>{content}</RowLabel>
          <InfoWrapper>
            <InfoDate>{date}</InfoDate>
            <VerticalBar></VerticalBar>
            {category === 'Challenge' ? (
              <OriginBoardButton
                onClick={() => {
                  handleDetailModal(boardId);
                }}
              >
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
