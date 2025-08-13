import React from 'react';

const Practice = () => {

  
  const nameAdd = (name, callback) => {
    callback(name + " 님,")
  }
  
  const nameHello = (name) => {
    console.log(name + " 안녕하세요!")
  }
  
  nameAdd("조예성", nameHello)

  return (
    <div>
      
    </div>
  );
};

export default Practice;