import { Img } from 'components/atoms';
import Styled from 'styled-components';
import { ifNotProp, ifProp, palette, theme } from 'styled-tools';

export const UserThumbnail = Styled(Img)<{ isChild?: boolean }>`
  width: ${ifProp('isChild', '26px', '28px')};
  height: ${ifProp('isChild', '26px', '28px')};
  border-radius: 50%;
`

export const CommentWrapper = Styled.div<{ isChild?: boolean }>`
  display: flex;
  position: relative;
  width: ${ifProp('isChild', 'calc(100% - 130px)', '100%')};
  margin-top: ${ifNotProp('isChild', '20px')};
  margin-left: ${ifProp('isChild', '130px')};
  margin-bottom: ${ifProp('isChild', '16px', '20px')};

  h4 {
    ${theme('font.subhead3')};
    width: 81px;
    margin: 3px 8px 0 13px;
    color: ${palette('grayscale', -1)};
  }

  p {
    ${theme('font.body3')};
    word-wrap: break-word;
    width: ${ifProp('isChild', '372px', '500px')};
    margin-top: 1px;
    color: ${palette('grayscale', 5)};
  }

  button {
    ${theme('font.subhead2')};
    position: absolute;
    top: 0;
    right: 0;
    color: ${palette('primary', 3)};
  }
`;
