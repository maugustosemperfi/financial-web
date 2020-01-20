import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';

export const SignUpCard = styled.div`
  min-width: 1100px;
  min-height: 600px;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
`;

export const SignUpContainer = styled.div`
  min-width: 700px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const HasAccountContainer = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  place-content: center;
  justify-content: center;
  background-image: linear-gradient(#18c498, #46bb88);
  color: #ffffff;
`;

export const FlexRowCenteredContainer = styled.div`
  display: flex;
  flex-direction: row;
  place-content: center;
`;

export const BackToLoginButton = styled(Button)`
  color: #fff !important;
  background-color: transparent !important;
  border: 1px solid #fff !important;
  box-shadow: none !important;
`;

export const Spacer = styled.div.attrs(props => ({ paddingTop: props.paddingTop || 15 }))`
  ${props =>
    css`
      padding-top: ${props.paddingTop};
    `}
`;
