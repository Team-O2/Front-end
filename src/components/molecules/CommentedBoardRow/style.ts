import { EmptyCheckBoxIcon, FilledCheckBoxIcon } from 'assets/images';
import { Button, CheckBox, Label, Link } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const RowWrapper = Styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const RowCheckBox = Styled(CheckBox)`
  display: none;
  width: 20px;
  height: 20px;
  margin-right: 11px;

  + label {
    padding-left: 31px; 
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: left center;
    background-image: url('${EmptyCheckBoxIcon}');
  }

  :checked + label {
    background-image: url('${FilledCheckBoxIcon}');
  }
`;

export const RowLabel = Styled(Label)`
  ${theme('font.body4')};
  width: 783px;
  height: 28px;
  color: ${palette('grayscale', -3)};
  margin-right: 78px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const InfoWrapper = Styled.div`
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  color: ${palette('grayscale', -5)};
`;

export const InfoDate = Styled.span`
  ${theme('font.body3_eng')};
  width: 95px;
  height: 20px;
  text-align: right;
  margin-right: 10px;
`;

export const VerticalBar = Styled.span`
  width: 1px;
  height: 16px;
  background-color: ${palette('grayscale', 3)};
`;

export const OriginBoardLink = Styled(Link)`
  width: 54px;
  height: 24px;
  margin: auto 0 auto 9px;
`;

export const OriginBoardButton = Styled(Button)`
  width: 54px;
  height: 24px;
  margin: auto 0 auto 9px;
`;

export const LinkText = Styled.span`
  ${theme('font.body3')};
`;

export const Wrapper = Styled.div`
  width: 1061px;
  height: 57px;
  border-bottom: 1px solid ${palette('grayscale', 1)};
  margin-bottom: 40px;
`;
