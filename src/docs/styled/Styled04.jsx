import React, { useState } from 'react';
import S from './style';

const Styled04 = () => {
  // const red = "red"
  const [value, setValue] = useState("")
  const [color, setColor] = useState("")
  const onChangeValue = (e) => setValue(e.target.value)
  const handelColor = (e) => {
    if(e.key === 'Enter'){
      setColor(value)
    }
  }

  return (
    <div>
      {/* <S.P fontColor={"red"}>스타일드 컴포넌트</S.P> */}
      {/* 키, value니까 props를 준 것 */}
      {/* 부모가 자식에게 주는 것 : props */}
      <input type="text" onChange={onChangeValue} onKeyDown={handelColor}/>
      <S.H1 color={color}>컬러라 적용될 폰트🥲</S.H1>
      {/* <S.P fontColor={red}>스타일드 컴포넌트!🥲</S.P> */}
    </div>
  );
};

export default Styled04;