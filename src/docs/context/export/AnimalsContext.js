import { Children, createContext, useState } from "react";

export const AnimalsContext = createContext({

  state : {animals: []},
  actions: { insert: () => {}, remove: () => {}}

});


export const AnimalsProvider = ({children}) => {

  const [animals, setAnimals] = useState(['누렁이', '점박이', '야옹이'])
  const value = {
    state: { animals: animals},
    actions: { insert: () => {}, remove: () => {} }
  }

  return(
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )

}








// 아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ