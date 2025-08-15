import React from 'react';
import PropsComponent from './PropsComponent';
import PropsComponent02 from './PropsComponent02';
import PropsComponent03 from './PropsComponent03';
import PropsComponentSimple from './PropsComponentSimple';

const PropsContainer = () => {

  const name = "홍길동"
  const age = 20

  const style = {
    color : "blue"
  }

  const printName = (name) => {
    console.log(name)
  }


  // 프로퍼티니까 
  // HTML에서 키, value 형태로
  // 변수로 호출했기 때문에 {}로 값을 넘겨줘야함


  // 2가지 방법 다 props라는 객체로 받음
  return (
    <div>
      {/* 값만 전달 */}
      <PropsComponent name = {name} age = {age}/>
    

      {/* 요소 전체를 전달 
      children : react DOM을 통째로 가져옴*/}
      <PropsComponent02>
        <span style = {style}>내 이름은 {name}😀</span>
      </PropsComponent02>


        {/* 실습
        이름을 콘솔에 출력해주는 함수를 만들어서 Props로 넘기고,
      PropsComponent03에서 사용하기
         */}
    
    {/* 여기는 넘길 때 */}
      <PropsComponent03 printName={printName}/>

      <h2>Props 간단 예시</h2>
      <PropsComponentSimple message="안녕하세요 😀" printMessage={printMessage} />
    
    </div>
  );
};

export default PropsContainer;