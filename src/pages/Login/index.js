import { FormControlLabel, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FlexContainer from 'react-styled-flexbox';
import * as yup from 'yup';
import api from '../../services/api';
import { DontHaveAccountContainer, FlexRowCenteredContainer, LoginCard, SignInContainer, SignUpButton, Spacer } from './style';

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .required(),
  rememberMe: yup.boolean(),
});

export default function Login() {
  const { register, handleSubmit, control, errors } = useForm({
    validationSchema: signInFormSchema,
  });

  const signIn = async data => {
    const token = await api.post('/auth/login', data).then(res => res.data);
  };

  return (
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
        <FlexRowCenteredContainer>
          <h3 style={{ color: '#b8b8b8' }}>or use your email account</h3>
        </FlexRowCenteredContainer>

        <Spacer paddingTop={'30px'}></Spacer>

        <form onSubmit={handleSubmit(signIn)}>
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
            <FlexContainer justifySpaceBetween={true} style={{ width: '50%' }}>
              <div>
                <FormControlLabel
                  name="rememberMe"
                  control={<Checkbox checked={register.rememberMe} name="rememberMe" ref={register} label="Remember me" />}
                  label="Remember me"
                />
                {/* <Controller as={} control={control} defaultValue={false}></Controller> */}
                {/* <Checkbox name="rememberMe" ref={register} label="Remember me" onChange={() => } /> */}
              </div>
              <Button>Forgot password?</Button>
            </FlexContainer>
          </FlexRowCenteredContainer>

          <Spacer paddingTop={'30px'}></Spacer>

          <FlexContainer justifyCenter={true}>
            <div style={{ width: '20%' }}>
              <Button variant="contained" color="primary" type="submit" fullWidth={true}>
                Sign in
              </Button>
            </div>
          </FlexContainer>
        </form>
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
            <SignUpButton variant="outlined" color="primary" fullWidth={true} component={Link} to="register">
              Sign up
            </SignUpButton>
          </div>
        </FlexContainer>
      </DontHaveAccountContainer>
    </LoginCard>
  );
}
