import { Label } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const WriteLabel = Styled(Label)`
  ${theme('font.subhead4')};
  width : 100%;
  color: ${palette('grayscale', 9)};
  margin-bottom : 8px;
`;

export const PeriodContainer = Styled.div`
  width : 100%;
  display : flex;
  justify-content : space-between;
  align-items : flex-start;
`;

export const PeopleContainer = Styled.div`
  width : 100%;
  display : flex;
  align-items : center;
  align-items : flex-start;
`;

export const Text = Styled.div<{ font: string }>`
  ${(props) => theme(`font.${props.font}`)};
  line-height : 60px;
  color : ${palette('grayscale', 4)};
`;

export const Wrapper = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  width : 844px;
`;
