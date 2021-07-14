import ViewCardList from 'components/organisms/ViewCardList';
import React from 'react';
import ChallengeHeader from '../../molecules/ChallengeHeader.tsx';
// import {getChallengeData} from '../../../libs/ChallengeApi';

// const [challengeData,setChallengeData] =useState("");
// const getChallenge = async()=>{
//     const data = await getChallengeData();
//     setChallengeData();
// }

// useEffect(() => {
//     (async ()=>{

//     })
//     getChallengeData();
// },[]);

const ChallengeView = () => {
  return (
    <div>
      <ChallengeHeader />
      <ViewCardList />
    </div>
  );
};

export default ChallengeView;
