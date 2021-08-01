import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 100px 0 400px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface IProfileImg {
  url: string;
}
export const ProfileImg = styled.div<IProfileImg>`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background: url(${(props) => props.url}) center center / cover;
`;

export const EditBtn = styled.img`
  cursor: pointer;

  position: relative;
  top: -54px;
  left: 105px;

  width: 45px;
  height: 45px;
`;

export const Txt = styled.div`
  width: 844px;
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 700;
  color: #0d0d0d;
`;

export const TxtSmall = styled.div`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #6f6f6f;
`;

export const Email = styled.div`
  width: 844px;
  height: 60px;
  margin-bottom: 50px;
  padding: 18px 20px 18px 20px;
  border-radius: 4px;
  background-color: #dfdfdf;

  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  color: #8b8b8b;
`;

export const PolicyCntnr = styled.div`
  width: 844px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PwBtn = styled.div`
  cursor: pointer;

  width: 844px;
  height: 60px;
  margin-bottom: 50px;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color: #0d0d0d;
`;

interface IBtn {
  isActive: boolean;
}
export const Btn = styled.div<IBtn>`
  cursor: pointer;

  width: 844px;
  height: 60px;
  border-radius: 4px;
  background-color: #dfdfdf;
  ${(props) =>
    props.isActive &&
    css`
      background-image: linear-gradient(to right, #36c8f5, #13e2dd);
    `}

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  color: #ffffff;
`;

export const InterestTagCntnr = styled.div`
  margin-right: 10px;
  padding: 12px 30px;
  border-radius: 60px;
  border: solid 1px #03b6ce;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 16px;
  font-weight: bold;
  line-height: 1.38;
  color: #03b6ce;
  letter-spacing: -0.5px;
`;
