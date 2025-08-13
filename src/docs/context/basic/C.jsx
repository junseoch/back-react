import React from 'react';
import CharContext from './CharContext';

const C = ({name}) => {
  return (
    <div>
      {name}
     
      <CharContext.Consumer>
         {/* 콜백함수 */}
        {(context) => context.name}
      </CharContext.Consumer>
    </div>
  );
};

export default C;