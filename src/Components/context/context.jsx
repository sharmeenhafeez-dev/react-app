import { createContext ,useReducer} from 'react';
import React from 'react';
import {reducer} from './reducer'


export const GlobleContext = createContext("Initial value");

export default function ContextProvider({ children }) 
{
    const data = {
        user:undefined
    }
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <GlobleContext.Provider value={{ state, dispatch} }>
      {children}
    </GlobleContext.Provider>
  );
};