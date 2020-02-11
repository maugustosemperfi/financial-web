import React, { createContext, useReducer } from 'react';
import { Auth } from '../auth/auth.model';
import { AuthActions } from '../auth/auth.actions';

interface FinancialContextType {
  user?: Auth;
  state?: any;
  dispatch?: React.Dispatch<any>;
}

const defaultFinancialContext = {
  user: null,
};

const financialContext = createContext<FinancialContextType>({ ...defaultFinancialContext });
const { Provider } = financialContext;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case AuthActions.LOGIN:
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
