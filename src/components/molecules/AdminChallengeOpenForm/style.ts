import { Label } from 'components/atoms';
import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const WriteLabel = Styled(Label)`
  ${theme('font.subhead4')};
  width : 100%;
  color: #0d0d0d;
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

export const Text = Styled.div<{ style: string }>`
  ${theme(`font.style`)};
  line-height : 60px;
  color : #8b8b8b;
`;

export const Wrapper = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  width : 844px;
`;
