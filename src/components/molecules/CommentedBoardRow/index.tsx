import { EmptyCheckBox, FilledCheckBox } from 'assets/images';
import { CheckBox, Label, Link } from 'components/atoms';
import React from 'react';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export interface IProps {
  isChecked?: boolean;
  id?: string;
  content?: string;
  date?: string;
  boardId?: string;
}

function CommentedBoardRow({ isChecked = false, content, date, boardId, id }: IProps): React.ReactElement {
  return (
    <Wrapper>
      {content && (
        <div className="row">
          <CheckBox className="row__checkbox" id={id} checked={isChecked} />
          <Label className="row__content body4" htmlFor={id}>
            {content}
          </Label>
          <div className="row__infoWrapper">
            <span className="row__date body3_eng">{date}</span>
            <span className="row__date--bar"></span>
            <Link className="row__link" to={`${boardId}`}>
              <span className="body3">원문보기</span>
            </Link>
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
    }

    &__date {
      width: 95px;
      height: 20px;
      text-align: right;
      color: ${palette('grayscale', -5)};
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
      margin-left: 9px;

      span {
        color: ${palette('grayscale', -5)};
      }
    }
  }
`;

export default CommentedBoardRow;
