import React from 'react';

// 여기서 props는 객체
const PropsComponent = (props) => {
  console.log(props)

  const {name, age} = props
  // 비구조 할당
  // 원래는 props.name

  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};

export default PropsComponent;