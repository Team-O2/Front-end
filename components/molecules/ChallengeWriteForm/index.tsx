import React from 'react';
import { IByte, ITextForm } from 'types/challenge.type';
import { QuestionWrapper } from './style';

interface IProps {
  totalOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  byte: IByte;
  ITextForm: ITextForm;
}

function ChallengeWriteForm({ totalOnChange, byte, ITextForm }: IProps): React.ReactElement {
  const maxByte = 1000; //최대 1000바이트
  return (
    <>
      <QuestionWrapper>
        <h1>오늘의 잘한 점을 적어보세요.</h1>
        <p>
          {byte.byte1}/{maxByte}
        </p>
        <textarea
          name="description1"
          value={ITextForm.description1}
          placeholder="오늘의 잘한 점을 적어보세요."
          onChange={totalOnChange}
        ></textarea>
      </QuestionWrapper>

      <QuestionWrapper>
        <h1>오늘의 못한 점을 적어보세요.</h1>
        <p>
          {byte.byte2}/{maxByte}
        </p>
        <textarea
          name="description2"
          value={ITextForm.description2}
          placeholder="오늘의 못한 점을 적어보세요."
          onChange={totalOnChange}
        ></textarea>
      </QuestionWrapper>

      <QuestionWrapper>
        <h1>잘한 점/못한 점을 통해 배운 것과 다음에 실천할 것을 적어보세요.</h1>
        <p>
          {byte.byte3}/{maxByte}
        </p>
        <textarea
          name="description3"
          value={ITextForm.description3}
          placeholder="배운 것과 실천할 것을 적어보세요."
          onChange={totalOnChange}
        ></textarea>
      </QuestionWrapper>
    </>
  );
}

export default ChallengeWriteForm;
