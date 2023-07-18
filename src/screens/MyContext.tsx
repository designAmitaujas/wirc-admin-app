import React, { createContext, useReducer, useState } from "react";

//@ts-ignore
export const AppContext = createContext();
//@ts-ignore
export const AppDispatch = createContext();

const initialValue = {
  currCity: "Vadodara",
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return { ...state, currCity: action.city };
  }
};

export const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialValue);

  return (
    <AppContext.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>{children}</AppDispatch.Provider>
    </AppContext.Provider>
  );
};

export default MyProvider;
