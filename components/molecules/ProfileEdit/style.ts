import { Input } from 'components/atoms';
import Styled from 'styled-components';

export const ProfileContainer = Styled.div`
  margin-bottom: 90px;
`;

interface IProfileImg {
  url: string;
}
export const ProfileImg = Styled.div<IProfileImg>`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background: url(${(props) => props.url}) center center / cover;
`;

export const EditButton = Styled.img`
  cursor: pointer;

  position: relative;
  top: -54px;
  left: 105px;

  width: 45px;
  height: 45px;
`;

export const ProfileInput = Styled(Input)`
  width: 0;
  height: 0;
`;
