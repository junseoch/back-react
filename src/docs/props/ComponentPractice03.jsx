import React from 'react';

const ComponentPractice03 = ({printName}) => {

  // 원래는 props.printName("홍길동")

  printName("홍길동")
 
  return (
    <div>
      {printName}
    </div>
  );
};

export default ComponentPractice03;