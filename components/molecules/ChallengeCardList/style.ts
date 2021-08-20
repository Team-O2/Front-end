import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const FormDetailWrapper = Styled.div`
    padding: 30px 30px 0 60px;

    h1{
        text-align: left;
        ${theme('font.subhead3')};
    }
    h5{
        width:724px;
        max-height: 100%;
        text-align: left;
        ${theme('font.body3')};
    }
    h2{
        width:724px;
        overflow:hidden;
        text-align: left;
        text-overflow:ellipsis;
        white-space:nowrap;
        ${theme('font.body3')};
    }

`;
