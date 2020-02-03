import React, { useContext } from 'react';
import FlexContainer from 'react-styled-flexbox';
import { financialContext } from '../../core/context/financial-context';

export default function Dashboard() {
  const { state } = useContext(financialContext);

  return (
    <FlexContainer>
      {state.user ? state.user.email : 'email'} {'user'}
    </FlexContainer>
  );
}
