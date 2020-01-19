import styled, { css } from 'styled-components';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

export const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #f2f2f2;
  font-weight: 600;
`;

export const LoginCard = styled.div`
  min-width: 1100px;
  min-height: 600px;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 16px;
`;

export const SignInContainer = styled.div`
  min-width: 700px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const DontHaveAccountContainer = styled.div`
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

export const SignUpButton = styled(Button)`
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

//#18c498
//#46bb88
//#1aab69 // LIGHT
//#0dca78 STRONG
