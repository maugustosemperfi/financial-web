import Checkbox from '@kiwicom/orbit-components/lib/Checkbox';
import InputField from '@kiwicom/orbit-components/lib/InputField';
import React, { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import FlexContainer from 'react-styled-flexbox';
import {
  DontHaveAccountContainer,
  FabButton,
  FlexRowCenteredContainer,
  LoginCard,
  LoginContainer,
  SignInContainer,
  Spacer,
  SignUpButton,
} from './style';
import Button from '@kiwicom/orbit-components/lib/Button';

export default function Login(props) {
  const [credentials, setCredentials] = useState({ email: 'asdsadsa', password: '' });

  return (
    <LoginContainer>
      <LoginCard>
        <SignInContainer>
          <h3>
            <span style={{ color: '#46bb88' }}>Financial</span>Web
          </h3>
          <Spacer paddingTop={'30px'}></Spacer>
          <h1 style={{ textAlign: 'center', color: '#0dca78', fontSize: '36px' }}>Sign in to Account</h1>
          <Spacer paddingTop={'15px'}></Spacer>
          <FlexRowCenteredContainer>
            <hr style={{ backgroundColor: '#0dca78', height: '3px', width: '50px', border: 0, borderRadius: '10px' }}></hr>
          </FlexRowCenteredContainer>
          <Spacer paddingTop={'15px'}></Spacer>
          <FlexRowCenteredContainer>
            <FabButton>
              <FaFacebookF />
            </FabButton>
            <FabButton>
              <FaLinkedinIn />
            </FabButton>
            <FabButton>
              <FaGooglePlusG />
            </FabButton>
          </FlexRowCenteredContainer>
          <Spacer paddingTop={'30px'}></Spacer>
          <FlexRowCenteredContainer>
            <h3 style={{ color: '#b8b8b8' }}>or use your email account</h3>
          </FlexRowCenteredContainer>
          <Spacer paddingTop={'30px'}></Spacer>
          <FlexRowCenteredContainer>
            <div style={{ width: '50%' }}>
              <InputField placeholder="Email"></InputField>
            </div>
          </FlexRowCenteredContainer>

          <Spacer paddingTop={'15px'}></Spacer>

          <FlexRowCenteredContainer>
            <div style={{ width: '50%' }}>
              <InputField placeholder="Password" type="password"></InputField>
            </div>
          </FlexRowCenteredContainer>

          <Spacer paddingTop={'15px'}></Spacer>

          <FlexRowCenteredContainer>
            <FlexContainer justifySpaceBetween={true} style={{ width: '50%' }}>
              <div>
                <Checkbox label="Remember me" />
              </div>
              <h3>Forgot password?</h3>
            </FlexContainer>
          </FlexRowCenteredContainer>

          <Spacer paddingTop={'30px'}></Spacer>

          <FlexContainer justifyCenter={true}>
            <div style={{ width: '20%' }}>
              <Button type="primary" circled={true} fullWidth={true}>
                Sign in
              </Button>
            </div>
          </FlexContainer>
          <div style={{ flex: 1 }}></div>
          <FlexContainer justifyCenter={true}>
            <h3 style={{ color: '#b8b8b8' }}>Privacy Policy * Terms & Conditions</h3>
          </FlexContainer>
        </SignInContainer>
        <DontHaveAccountContainer>
          <h1 style={{ textAlign: 'center', fontSize: '36px' }}>Hello, Friend!</h1>

          <Spacer paddingTop={'15px'}></Spacer>

          <FlexContainer justifyCenter={true}>
            <hr style={{ backgroundColor: '#ffffff', height: '3px', width: '50px', border: 0, borderRadius: '10px' }}></hr>
          </FlexContainer>

          <Spacer paddingTop={'15px'}></Spacer>

          <FlexContainer justifyCenter={true}>
            <div style={{ width: '70%' }}>
              <h3 style={{ textAlign: 'center' }}>Fill up personal information and start journey with us</h3>
            </div>
          </FlexContainer>

          <Spacer paddingTop={'30px'}></Spacer>

          <FlexContainer justifyCenter={true}>
            <div style={{ width: '30%' }}>
              <SignUpButton type="secondary" bordered={true} circled={true} fullWidth={true}>
                Sign Up
              </SignUpButton>
            </div>
          </FlexContainer>
        </DontHaveAccountContainer>
      </LoginCard>
    </LoginContainer>
  );
}
