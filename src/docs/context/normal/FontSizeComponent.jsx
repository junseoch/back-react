import React, { useContext, useState } from 'react';
import { FontContext } from './FontContext';

const FontSizeComponent = () => {
  const { state, actions } = useContext(FontContext)
  const { value, setValue } = useState("")
  const { setFontSize } = actions
  const { fontSize } = state;


  const inputOnChange = (e) => {
    setValue(e.target.value)
  }

  const inputOnKeyDown = (e) => {
    if(e.key === 'Enter'){
      setFontSize(value)
    }
  }

  return (
    <div>
      <p style={{fontSize}}>최하위 컴포넌트!😎</p>
      {/*
       사용자가 글자의 크기를 입력 후 엔터를 치면 
       입력한 크기로 글자 크기 변경 

       단순하게 상태바꾸는 것
       */}

      <input type="text" value={value} onChange={inputOnChange} onKeyDown={inputOnKeyDown} />
      <button onClick={() => setFontSize("100px")}>커지는 버튼!</button>
    </div>
  );
};

export default FontSizeComponent;


