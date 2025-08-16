import React from 'react';

const ComponentPractice = (props) => {

  console.log(props) // props는 키, value의 객체
  // props가 {name : "홍길동", age : 20}

  const {name, age} = props
  // props.name
  // props.age

  return (
    <div>
      {/* {pros.name}
          {pros.age} */}
      {name}
      {age}
      
    </div>
  );
};

export default ComponentPractice;