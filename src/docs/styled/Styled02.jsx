import React from 'react';
import S from './style';
import P from './P';

const Styled02 = () => {
  return (
    <div>
      <S.Box />
        <S.P></S.P>
        <P />
    </div>
  );
};

export default Styled02;


 // Box를 갔다가 쓰고 싶을 때
  // Box를 먼저 내보내야함 (export Box)