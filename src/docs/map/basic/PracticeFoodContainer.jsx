import React from 'react';

const PracticeFoodContainer = () => {

  const foods = [
    {
      id : 1,
      name : "마라탕"
    },

    {
      id : 2,
      name : "육개장"
    },

    {
      id : 3,
      name : "라면"
    },

    {
      id : 4,
      name : "뚝불"
    }

  ]

  foods.map((food) => <li>{food.name}</li>)


  return (
    <div>
      
    </div>
  );
};

export default PracticeFoodContainer;