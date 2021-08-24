import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const ButtonWrapper = Styled.div`
    align-items: center;
    margin: 0 auto;
    width:844px;
`;

export const ColorButton = Styled(Button)`

    margin: 0 auto;
    margin-top:60px;
    border:none;
    border-radius: 4px;
    width:844px;
    height: 60px;
    text-align: center;
    color: ${palette('grayscale', 0)};
    background: linear-gradient(91.91deg, ${palette('primary', 3)} 7.34%, ${palette('primary', 0)} 90.35%);
    ${theme('font.subhead3')};
`;

export const BlackButton = Styled(Button)`
    margin: 0 auto;
    margin-top:60px;
    border:none;
    border-radius: 4px;
    width:844px;
    height: 60px;
    text-align: center;
    color: ${palette('grayscale', 0)};
    background: ${palette('grayscale', 1)};
    ${theme('font.subhead3')};
`;
