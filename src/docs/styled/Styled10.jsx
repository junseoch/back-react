import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// from 뒤에는 객체
// react : 컴포넌트를 쓸 수 있는 객체들을 가지고 있음
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

const Styled10 = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faMugHot} style={{fontSize : "50px"}}/>
    </div>
  );
};

export default Styled10;