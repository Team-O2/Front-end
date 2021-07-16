import { EmptyCheckBox, FilledCheckBox } from 'assets/images';
import { Button, CheckBox, Label, Link } from 'components/atoms';
import React from 'react';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export interface IProps {
  isChecked: boolean;
  id: string;
  content?: string;
  date: string;
  boardId: string;
  category: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CommentedBoardRow({ content, date, boardId, id, onChange, isChecked, category }: IProps): React.ReactElement {
  return (
    <Wrapper>
      {content && (
        <div className="row">
          <CheckBox className="row__checkbox" id={id} onChange={onChange} checked={isChecked} />
          <Label className="row__content body4" htmlFor={id}>
            {content}
          </Label>
          <div className="row__infoWrapper">
            <span className="row__date body3_eng">{date}</span>
            <span className="row__date--bar"></span>
            {category === 'Challenge' ? (
              <Button
                className="row__link body3"
                onClick={() => {
                  alert('런마셀 상세보기'); // TODO: 런마셀 모달 띄워주기
                }}
              >
                <span>원문보기</span>
              </Button>
            ) : (
              <Link
                className="row__link"
                to={category === 'Concert' ? `ShareTogether/${boardId}` : `notice/${boardId}`}
              >
                <span className="body3">원문보기</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = Styled.div`
  width: 1061px;
  height: 57px;
  border-bottom: 1px solid ${palette('grayscale', 1)};
  margin-bottom: 40px;

  .row {
    position: relative;
    display: flex;
    align-items: center;

    &__checkbox {
      display: none;
      width: 20px;
      height: 20px;
      margin-right: 11px;

      + label {
        padding-left: 31px; 
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: left center;
        background-image: url('${EmptyCheckBox}');
      }

      :checked + label {
        background-image: url('${FilledCheckBox}');
      }
    }

    &__content {
      width: 783px;
      height: 28px;
      color: ${palette('grayscale', -3)};
      margin-right: 78px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__infoWrapper {
      position: absolute;
      right: 0px;
      display: flex;
      align-items: center;
      color: ${palette('grayscale', -5)};
    }

    &__date {
      width: 95px;
      height: 20px;
      text-align: right;
      margin-right: 10px;

      &--bar {
        width: 1px;
        height: 16px;
        background-color: ${palette('grayscale', 3)};
      }
    }

    &__link {
      width: 54px;
      height: 24px;
      margin: auto 0 auto 9px;
    }
  }
`;

export default CommentedBoardRow;
