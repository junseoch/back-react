import React from 'react';

const Ad = ({student}) => {
 
  const {isPresent, name} = student

  return (
    <div>
      (<li style={isPresent ? {color:'blue'} : {fontSize : '10px'}  }>이름 : {name} </li>)
    </div>
  );
};

export default Ad;