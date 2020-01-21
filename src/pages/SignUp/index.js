import { Button, Fab, TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FlexContainer from 'react-styled-flexbox';
import * as yup from 'yup';
import api from '../../services/api';
import { BackToLoginButton, FlexRowCenteredContainer, HasAccountContainer, SignUpCard, SignUpContainer, Spacer } from './style';

const signUpFormSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .required(),
  confirmPassword: yup
    .string()
    .min(8)
    .required(),
});

export default function SignUp() {
  const { register, handleSubmit, control, errors } = useForm({
    validationSchema: signUpFormSchema,
  });

  const signUp = async data => {
    console.log(1);
    const user = await api.post('users', data).then(res => res.data);
  };

  return (
    <SignUpCard>
      <SignUpContainer>
        <h3>
          <span style={{ color: '#46bb88' }}>Financial</span>Web
        </h3>
        <Spacer paddingTop={'30px'}></Spacer>
        <h1 style={{ textAlign: 'center', color: '#0dca78', fontSize: '36px' }}>Sign Up</h1>
        <Spacer paddingTop={'15px'}></Spacer>
        <FlexRowCenteredContainer>
          <hr style={{ backgroundColor: '#0dca78', height: '3px', width: '50px', border: 0, borderRadius: '10px' }}></hr>
        </FlexRowCenteredContainer>
        <Spacer paddingTop={'15px'}></Spacer>
        <FlexRowCenteredContainer>
          <Fab size="small" style={{ marginRight: '16px', backgroundColor: '#fff' }}>
            <FaFacebookF />
          </Fab>
          <Fab size="small" style={{ marginRight: '16px', backgroundColor: '#fff' }}>
            <FaLinkedinIn />
          </Fab>
          <Fab size="small" style={{ marginRight: '16px', backgroundColor: '#fff' }}>
            <FaGooglePlusG />
          </Fab>
        </FlexRowCenteredContainer>
        <Spacer paddingTop={'30px'}></Spacer>
        <form onSubmit={handleSubmit(signUp)}>
          <FlexRowCenteredContainer>
            <div style={{ width: '50%' }}>
              <Controller
                as={
                  <TextField
                    error={!!errors.email}
                    name="email"
                    label="Email"
                    ref={register({ required: true })}
                    variant="outlined"
                    helperText={errors.email && errors.email.message}
                    fullWidth={true}
                  />
                }
                name="email"
                control={control}
              />
              {/* <InputField name="email" placeholder="Email" ref={register({ required: true })} /> */}
            </div>
          </FlexRowCenteredContainer>

          <Spacer paddingTop={'15px'}></Spacer>

          <FlexRowCenteredContainer>
            <div style={{ width: '50%' }}>
              <Controller
                as={
                  <TextField
                    error={!!errors.password}
                    name="password"
                    label="Password"
                    type="password"
                    ref={register({ required: true })}
                    variant="outlined"
                    helperText={errors.password && errors.password.message}
                    fullWidth={true}
                  />
                }
                name="password"
                control={control}
              />
            </div>
          </FlexRowCenteredContainer>

          <Spacer paddingTop={'15px'}></Spacer>

          <FlexRowCenteredContainer>
            <div style={{ width: '50%' }}>
              <Controller
                as={
                  <TextField
                    error={!!errors.password}
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    ref={register({ required: true })}
                    variant="outlined"
                    helperText={errors.confirmPassword && errors.confirmPassword.message}
                    fullWidth={true}
                  />
                }
                name="confirmPassword"
                control={control}
              />
            </div>
          </FlexRowCenteredContainer>

          <Spacer paddingTop={'30px'}></Spacer>

          <FlexContainer justifyCenter={true}>
            <div style={{ width: '20%' }}>
              <Button variant="contained" color="primary" type="submit" fullWidth={true}>
                Sign up
              </Button>
            </div>
          </FlexContainer>
        </form>
        <div style={{ flex: 1 }}></div>
        <FlexContainer justifyCenter={true}>
          <h3 style={{ color: '#b8b8b8' }}>Privacy Policy * Terms & Conditions</h3>
        </FlexContainer>
      </SignUpContainer>
      <HasAccountContainer>
        <h1 style={{ textAlign: 'center', fontSize: '36px' }}>Already registered?</h1>
        <Spacer paddingTop={'15px'}></Spacer>

        <FlexContainer justifyCenter={true}>
          <hr style={{ backgroundColor: '#ffffff', height: '3px', width: '50px', border: 0, borderRadius: '10px' }}></hr>
        </FlexContainer>

        <Spacer paddingTop={'15px'}></Spacer>

        <FlexContainer justifyCenter={true}>
          <div style={{ width: '70%' }}>
            <h3 style={{ textAlign: 'center' }}>If you already have an account, please login and enjoy the app</h3>
          </div>
        </FlexContainer>

        <Spacer paddingTop={'30px'}></Spacer>

        <FlexContainer justifyCenter={true}>
          <div style={{ width: '50%' }}>
            <BackToLoginButton variant="outlined" color="primary" fullWidth={true} component={Link} to="/">
              Back to login
            </BackToLoginButton>
          </div>
        </FlexContainer>
      </HasAccountContainer>
    </SignUpCard>
  );
}
