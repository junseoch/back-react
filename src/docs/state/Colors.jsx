import React, { useState } from 'react';

// result는 사용자가 입력한 결과
// 빨간색 버튼 누르면 글자색 빨갛게
// 파란색 버튼 누르면 글자색 파랗게

// 핑크색 입력시 글자색 없앰



// 알고리즘
// key 이벤트 -> 특정키를 찾고 싶을 때
// 추가하거나 변경하면 상태가 바뀜 -> useState(초기값)

// 상태를 하나 더 만들어서 p에 넣어줌

// setColor라는 상태를 만들어서 사용할 수 있게 넘겨줌


const Colors = () => {

  // 리턴값 : 배열
  const [result, setResult] = useState("")
  const [color, setColor] = useState("black")

  const style = {
    color : color
  }

    // console.log(useState())

    // result, color는 값이다

  // 클릭 시 색깔을 바꾸는 함수
  const onClickToColor = (e) => {
    const target = e.target.innerText

    // e.target.value
    if(target === "빨간색 버튼"){
      setColor("red")
    }
    else if(target === "파란색 버튼"){
      setColor("blue")
    }
  }

  // 핑크색 버튼 입력시 글자색 삭제
  const onWritePink = (e) => {
    if(e.target.value === "핑크색"){
      setResult("pink")
    }
  }

  // 스타일 자체를 객체로 div의 style에 넣어놓음

  // result 상태를 바꿀 수 있는 건 setter
   return (
    <div>
      <p style={style}>{result}</p>
      <input type="text" onChange={onWritePink} />
      <button onClick={onClickToColor}>빨간색 버튼</button>
      <button onClick={onClickToColor}>파란색 버튼</button>
    </div>
  );


  // return (
  //   <div>
  //     {/* <p>{result}</p> */}
  //     <input type="text" onChange={onWritePink} />
  //     <button onClick={onClickToColor}>빨간색 버튼</button>
  //     <button onClick={onClickToColor}>파란색 버튼</button>
  //   </div>
  // );
};

export default Colors;