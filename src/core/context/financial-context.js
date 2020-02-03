import React, { createContext, useReducer } from 'react';

const defaultFinancialContext = {
  user: null,
};

const financialContext = createContext(defaultFinancialContext);
const { Provider } = financialContext;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case `[LOGIN] Update User Credentials`:
        return {
          ...state,
          user: action.payload,
        };

      default:
        break;
    }
  }, defaultFinancialContext);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { financialContext, StateProvider };
