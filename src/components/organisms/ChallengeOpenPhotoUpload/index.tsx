import { GreyPlusIcon } from 'assets/images';
import { FileUpload as PhotoUpload } from 'components/atoms';
import React from 'react';
import { PhotoUploadBottomDesc, PhotoUploadContainer, PhotoUploadImage, PhotoUploadMiddleDesc } from './style';
interface IProps {
  setImage: (image: File | null) => void;
}
function ChallengeOpenPhotoUpload({ setImage }: IProps): React.ReactElement {
  return (
    <PhotoUpload width="262px" height="216px" setFile={setImage} fileType={0}>
      <PhotoUploadContainer>
        <PhotoUploadImage src={GreyPlusIcon}></PhotoUploadImage>
        <PhotoUploadMiddleDesc>
          대표이미지
          <br />
          (필수)
        </PhotoUploadMiddleDesc>
        <PhotoUploadBottomDesc>(1920px X 253px)</PhotoUploadBottomDesc>
      </PhotoUploadContainer>
    </PhotoUpload>
  );
}

export default ChallengeOpenPhotoUpload;
