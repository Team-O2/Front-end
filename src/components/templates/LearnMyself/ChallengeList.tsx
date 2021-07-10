import React,{useState,useEffect} from 'react';
import DetailCard from '../../organisms/ViewCardList/index';
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
            <ChallengeHeader/>
            <DetailCard/>
        </div>
    );
};

export default ChallengeView;