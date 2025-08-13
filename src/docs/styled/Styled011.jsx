import React from 'react';
import styled from 'styled-components'

// styled는 객체

// 객체로 태그에 접근
// styled.div
// 통째로가 컴포넌트


// `` : 문자열
const StyledH1 = styled.h1`
  font-size: 10px;
  color: red;
  text-decoration: line-through;
`;


const Styled011 = () => {

  return (
    <div>
      <StyledH1>안녕하세요!</StyledH1>
    </div>
  );
};

export default Styled011;