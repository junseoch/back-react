import React, { useState } from 'react';

const Sound = () => {

  const [sound, setSound] = useState("")

  const onClickToSound = (e) => {
    
    const target = e.target.innerText
    // js 문법이기 때문에 if문 사용가능함
    if(target === "고양이 버튼"){
      setSound("야옹")
    }
    else if(target === "강아지 버튼"){
      setSound("멍멍")
    }
    else {
      setSound("진구야")
    }
  }

  return (
    <div>
      {sound}
      <div>
        <button onClick={onClickToSound}>고양이 버튼</button>
        <button onClick={onClickToSound}>강아지 버튼</button>
        <button onClick={onClickToSound}>이태희 버튼</button>
      </div>
    </div>
  );
};

export default Sound;