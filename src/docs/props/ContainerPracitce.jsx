import React from 'react';
import ComponentPractice from './ComponentPractice';
import ComponentPractice03 from './ComponentPractice03';

const ContainerPracitce = () => {

  const name = "홍길동"
  const age = 20

  const printName = (name) => {
    console.log(name)
  }

  return (
    <div>
      <ComponentPractice name={name} age={age} />


      <ComponentPractice03 printName={printName} />


    </div>
  );
};

export default ContainerPracitce;