import { ChallengeEdit, getChallengeContent } from 'apis';
import { ChallengeEditForm, ChallengeProgressBar, ChallengeWriteInterest } from 'components/molecules';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { BlackButton, ButtonWrapper, ColorButton, Header } from './style';

export interface IProps {
  description?: string;
  className?: string;
  value?: string;
}

interface IEditCard {
  id: string;
}

function EditCard({ id }: IEditCard): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const history = useRouter();
  const maxByte = 1000; //최대 1000바이트
  const [countProgressBar, setCountProgressBar] = useState(0); //프로그래스바

  const [byte, setByte] = useState({
    byte1: 0,
    byte2: 0,
    byte3: 0,
  });

  const [textForm, setTextForm] = useState({
    description1: '',
    description2: '',
    description3: '',
  });

  const { description1, description2, description3 } = textForm;
  const textOnChange = (target: { name: string; value: string }) => {
    const { name, value } = target;
    setTextForm({
      ...textForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTextForm({
      description1: '',
      description2: '',
      description3: '',
    });
    const editData = {
      good: description1,
      bad: description2,
      learn: description3,
      interest: selectedInterest,
    };
    if (userStatusData) {
      const data = await ChallengeEdit(editData, userStatusData.token, id);
      data && history.back();
    }
  };

  const progressBarState = () => {
    let count = 0;
    if (byte.byte1 > 0) {
      count++;
    }
    if (byte.byte2 > 0) {
      count++;
    }
    if (byte.byte3 > 0) {
      count++;
    }
    setCountProgressBar(count);
  };

  const handleTotalOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text_val = e.target.value; //입력한 문자
    const target_byte_name = 'byte' + e.target.name.split('description')[1];
    let str = '';
    let totalByte = stringtoByte(text_val);

    if (totalByte >= maxByte) {
      str = text_val.substring(0, maxByte);
      e.target.value = str;
      totalByte = maxByte;
    }
    textOnChange(e.target);
    setByte({
      ...byte,
      [target_byte_name]: totalByte,
    });
  };
  const stringtoByte = (value: string) => {
    return value.length;
  };

  useEffect(() => {
    progressBarState();
  }, [byte]);
  useEffect(() => {
    getDefaultData();
  }, []);

  const getDefaultData = async () => {
    if (userStatusData) {
      const data = await getChallengeContent(id, userStatusData.token);
      if (data) {
        setTextForm({ description1: data.good, description2: data.bad, description3: data.learn });
        setSelectedInterest(data.interest);
        setByte({
          byte1: stringtoByte(data.good),
          byte2: stringtoByte(data.bad),
          byte3: stringtoByte(data.learn),
        });
      }
    } else {
    }
  };

  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);

  const indextoName = (index: undefined | number) => {
    switch (index) {
      case 1:
        return '1st';
      case 2:
        return `2nd`;
      case 3:
        return `3rd`;
      default:
        return `${index}th`;
    }
  };

  return (
    <>
      <Header>Learn Myself {indextoName(userStatusData?.progressGeneration)}</Header>
      <ChallengeProgressBar countProgressBar={countProgressBar} />
      <ChallengeEditForm handleTotalOnChange={handleTotalOnChange} byte={byte} ITextForm={textForm} />
      <ChallengeWriteInterest selectedInterest={selectedInterest} setSelectedInterest={setSelectedInterest} />
      {countProgressBar === 3 && selectedInterest.length > 0 ? (
        <ButtonWrapper>
          <ColorButton onClick={handleSubmit}>수정완료</ColorButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <BlackButton>수정완료</BlackButton>
        </ButtonWrapper>
      )}
    </>
  );
}

export default EditCard;
