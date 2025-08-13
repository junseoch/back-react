import React from 'react';
import { useParams } from 'react-router-dom';

const HobbyContainer = () => {

  // url parameter : url에 parameter를 심어서 전송하는 방법

  // useParams() : url 훅 함수를 가져오는 것
  // useParams() -> 콘솔에 찍어볼것 

  const {hobbies} =  useParams()

  return (
    <div>
      <p>취미: {hobbies}</p>
    </div>
  );
};

export default HobbyContainer;