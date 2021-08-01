import Styled from 'styled-components';
import { ifNotProp, ifProp, palette } from 'styled-tools';

export const CommentWrapper = Styled.div<{ isChild?: boolean }>`
  display: flex;
  position: relative;
  width: ${ifProp('isChild', 'calc(100% - 130px)', '100%')};
  margin-top: ${ifNotProp('isChild', '20px')};
  margin-left: ${ifProp('isChild', '130px')};
  margin-bottom: ${ifProp('isChild', '16px', '20px')};

  .img {
    width: ${ifProp('isChild', '26px', '28px')};
    height: ${ifProp('isChild', '26px', '28px')};
    border-radius: 50%;
  }

  h4 {
    width: 81px;
    margin: 3px 8px 0 13px;
    color: ${palette('grayscale', -1)};
  }

  p {
    word-wrap: break-word;
    width: ${ifProp('isChild', '372px', '500px')};
    margin-top: 1px;
    color: ${palette('grayscale', 5)};
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    color: ${palette('primary', 3)};
  }
`;
