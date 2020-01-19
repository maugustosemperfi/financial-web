import styled, { css } from 'styled-components';
import Button from '@kiwicom/orbit-components/lib/Button';

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
  box-shadow: inset 0 0 0 1px #fff;
`;

export const FabButton = styled.button`
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
  user-select: none;
  cursor: pointer;
  outline: 0;
  border: none;
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  margin: 0;
  min-width: 64px;
  line-height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  overflow: visible;
  transform: translate3d(0, 0, 0);
  transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 0;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  padding: 0;
  flex-shrink: 0;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  margin-right: 8px;
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
