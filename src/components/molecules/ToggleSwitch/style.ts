import { CheckBox, Label } from 'components/atoms';
import Styled from 'styled-components';
import { ifProp, palette } from 'styled-tools';

export const ToggleSwitchContainer = Styled.div<{ checked: boolean }>`
  width: 48px;
  height: 26px;
  background-color: ${ifProp('checked', palette('grayscale', 7), palette('grayscale', 1))};
  transition: background-color 0.1s linear;
  position: relative;
  border-radius: 50px;
`;

export const SwitchCheckbox = Styled(CheckBox)`
  display: none;

  &:checked + label div {
    transform: translateX(22px);
  }
`;

export const SwitchLabel = Styled(Label)`
  cursor: pointer;
  background-color: ${palette('grayscale', 1)};
`;

export const Ball = Styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  top: 3px;
  left: 3px;
  transition: transform 0.1s linear;
  background-color: ${palette('grayscale', 0)};
`;
