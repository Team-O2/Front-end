import { Button, Input } from 'components/atoms';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export const SearchInput = Styled(Input)`
  border: 1px solid #dfdfdf;
  border-radius: 72px;
  background-color: rgba(223, 223, 223, 0.2);
  padding: 9px 18px 9px 20px;
  width: 298px;
  height: 46px;
  color: ${palette('grayscale', 2)};
  font-size: 18px;
  :focus {
    outline:none;
  }
`;

export const SearchButton = Styled(Button)`
  opacity: 50%;
  margin-bottom:4px;
  margin-left:-50px;
  border: #ffffff;
  background-color: rgba(223, 223, 223, 0.2);
  width: 24px;
  height: 24px;;
`;

export const SearchBarWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 33px;
`;
