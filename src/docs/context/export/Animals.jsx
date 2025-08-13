import React from 'react';
import { AnimalsProvider } from './AnimalsContext';
import Animal from './Animal';

// 문제
// 1. context에 저장된 동물 세 마리를 버튼으로 화면에 출력한다
// 2. input태그를 하나 만들어 동물을 입력 후 엔터를 치면 동물 버튼이 추가된다.
// 3. 각 동물 버튼을 클릭하면 해당 버튼이 삭제된다.
// 단, context에 insert(), remove()의 메서드를 이용하여 추가 및 삭제가 되어야 한다.
// 4. 각 버튼은 Styled 컴포넌트의 Button으로 제작되어야 한다.



const Aniamls = () => {
  return (
    <div>
      <AnimalsProvider>
        <Animal/>
      </AnimalsProvider>
    </div>
  );
};

export default Aniamls;