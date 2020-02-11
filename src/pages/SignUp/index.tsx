import { Button, Fab, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { financialContext } from '../../core/context/financial-context';
import api from '../../services/api';
import { BackToLoginButton, FlexRowCenteredContainer, HasAccountContainer, SignUpCard, SignUpContainer, Spacer } from './style';
import { UserSignUp } from '../../models/user-signup.model';

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
    .oneOf([yup.ref('password'), null], 'Confirm Password must be equal to password')
    .required(),
});

export default function SignUp() {
  const { register, handleSubmit, control, errors } = useForm<UserSignUp>({
    validationSchema: signUpFormSchema,
  });
  const context = useContext(financialContext);

  const signUp = async (data: any) => {
    console.log(context);
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
                    inputRef={register({ required: true })}
                    variant="outlined"
                    helperText={errors.email && errors.email.message}
                    fullWidth={true}
                  />
                }
                name="email"
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
                    name="password"
                    label="Password"
                    type="password"
                    inputRef={register({ required: true })}
                    variant="outlined"
                    helperText={errors.password && errors.password?.message}
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
                    inputRef={register({ required: true })}
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

          <FlexRowCenteredContainer justifyCenter={true}>
            <div style={{ width: '20%' }}>
              <Button variant="contained" color="primary" type="submit" fullWidth={true}>
                Sign up
              </Button>
            </div>
          </FlexRowCenteredContainer>
        </form>
        <div style={{ flex: 1 }}></div>
        <FlexRowCenteredContainer justifyCenter={true}>
          <h3 style={{ color: '#b8b8b8' }}>Privacy Policy * Terms & Conditions</h3>
        </FlexRowCenteredContainer>
      </SignUpContainer>
      <HasAccountContainer>
        <h1 style={{ textAlign: 'center', fontSize: '36px' }}>Already registered?</h1>
        <Spacer paddingTop={'15px'}></Spacer>

        <FlexRowCenteredContainer justifyCenter={true}>
          <hr style={{ backgroundColor: '#ffffff', height: '3px', width: '50px', border: 0, borderRadius: '10px' }}></hr>
        </FlexRowCenteredContainer>

        <Spacer paddingTop={'15px'}></Spacer>

        <FlexRowCenteredContainer justifyCenter={true}>
          <div style={{ width: '70%' }}>
            <h3 style={{ textAlign: 'center' }}>If you already have an account, please login and enjoy the app</h3>
          </div>
        </FlexRowCenteredContainer>

        <Spacer paddingTop={'30px'}></Spacer>

        <FlexRowCenteredContainer>
          <div style={{ width: '50%' }}>
            <BackToLoginButton variant="outlined" color="primary" fullWidth={true} component={Link} to="/">
              Back to login
            </BackToLoginButton>
          </div>
        </FlexRowCenteredContainer>
      </HasAccountContainer>
    </SignUpCard>
  );
}
