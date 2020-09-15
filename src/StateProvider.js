import React, { createContext, useContext, useReducer } from "react";

//Prepares Data Layer
export const StateContext = createContext();

//Wrap our App and provide Data layer to each component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information from Data layer
export const useStateValue = () => useContext(StateContext);
