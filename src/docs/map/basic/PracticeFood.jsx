import React from 'react';

const PracticeFood = ({food}) => {

  // console.log(props.food)
  // props로 객체형태로 값 받아옴

  const {name} = food
  // food라는 객체에서 key값 name 들고옴
  

  return (
    <div>
      <li>
        {name}
      </li>
    </div>
  );
};

export default PracticeFood;