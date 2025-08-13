import React from 'react';

// 비구조 분해
// const Food = (props) =? {
//   const name = props.food.name
// }

const Food = ({food}) => {

  
  // console.log(props.food.name)

  const {name} = food

  return (
    <li>
      {name}
    </li>
  );
};

export default Food;