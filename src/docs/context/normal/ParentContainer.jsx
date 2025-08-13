import React from 'react';
import ChildContainer from './ChildContainer';
import {FontContext} from './FontContext';


const ParentContainer = () => {

  return (
    <div>
      <FontContext.Provider>
      <ChildContainer/>
      </FontContext.Provider>
    </div>
  );
};

export default ParentContainer;