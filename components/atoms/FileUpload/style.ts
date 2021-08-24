import { Button } from 'components/atoms';
import Styled from 'styled-components';

export const ImgPreview = Styled.img<{
  width: string;
  height: string;
}>`
    width : ${(props) => props.width};
    height : ${(props) => props.height};
    object-fit: cover;
  `;

export const VideoPreview = Styled.video<{
  width: string;
  height: string;
}>`        
    width : ${(props) => props.width};
    height : ${(props) => props.height};
    object-fit: cover;
  `;

export const UploadBtn = Styled(Button)<{
  width: string;
  height: string;
}>`        
    width : ${(props) => props.width};
    height : ${(props) => props.height};
  `;

export const SPhotoUpload = Styled.div`
      cursor : pointer;
  `;
