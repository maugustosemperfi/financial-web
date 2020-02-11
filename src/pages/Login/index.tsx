import { FormControlLabel, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import api from '../../services/api';
import { DontHaveAccountContainer, FlexRowCenteredContainer, LoginCard, SignInContainer, SignUpButton, Spacer } from './style';
import { financialContext } from '../../core/context/financial-context';
import { Auth } from '../../core/auth/auth.model';
import { AuthActions } from '../../core/auth/auth.actions';

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
  const { register, handleSubmit, control, errors } = useForm<Auth>({
    validationSchema: signInFormSchema,
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    }
  });
  const context = useContext(financialContext);
  const { dispatch } = context;
  const history = useHistory();

  const signIn = async (data: any) => {
    const token = await api.post('/auth/login', data).then(res => res.data.access_token);

    dispatch({ type: AuthActions.LOGIN, payload: { email: data.email, token: token } });
    history.push('/dashboard');
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

        <form data-testid="form" onSubmit={handleSubmit(signIn)}>
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
                    inputProps={{ 'data-testid': 'loginInput' }}
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
                    inputRef={register({ required: true })}
                    variant="outlined"
                    helperText={errors.password && errors?.password?.message}
                    fullWidth={true}
                    inputProps={{ 'data-testid': 'passwordInput' }}
                  />
                }
                name="password"
                control={control}
              />
            </div>
          </FlexRowCenteredContainer>

          <Spacer paddingTop={'15px'}></Spacer>

          <FlexRowCenteredContainer>
            <FlexRowCenteredContainer justifySpaceBetween={true} style={{ width: '50%' }}>
              <div>
                <FormControlLabel name="rememberMe" control={<Checkbox name="rememberMe" ref={register} />} label="Remember me" />
                {/* <Controller as={} control={control} defaultValue={false}></Controller> */}
                {/* <Checkbox name="rememberMe" ref={register} label="Remember me" onChange={() => } /> */}
              </div>
              <Button>Forgot password?</Button>
            </FlexRowCenteredContainer>
          </FlexRowCenteredContainer>

          <Spacer paddingTop={'30px'}></Spacer>

          <FlexRowCenteredContainer justifyCenter={true}>
            <div style={{ width: '20%' }}>
              <Button variant="contained" color="primary" type="submit" data-testid="signIn" fullWidth={true}>
                Sign in
              </Button>
            </div>
          </FlexRowCenteredContainer>
        </form>
        <div style={{ flex: 1 }}></div>
        <FlexRowCenteredContainer justifyCenter={true}>
          <h3 style={{ color: '#b8b8b8' }}>Privacy Policy * Terms & Conditions</h3>
        </FlexRowCenteredContainer>
      </SignInContainer>
      <DontHaveAccountContainer>
        <h1 style={{ textAlign: 'center', fontSize: '36px' }}>Hello, Friend!</h1>

        <Spacer paddingTop={'15px'}></Spacer>

        <FlexRowCenteredContainer justifyCenter={true}>
          <hr style={{ backgroundColor: '#ffffff', height: '3px', width: '50px', border: 0, borderRadius: '10px' }}></hr>
        </FlexRowCenteredContainer>

        <Spacer paddingTop={'15px'}></Spacer>

        <FlexRowCenteredContainer justifyCenter={true}>
          <div style={{ width: '70%' }}>
            <h3 style={{ textAlign: 'center' }}>Fill up personal information and start journey with us</h3>
          </div>
        </FlexRowCenteredContainer>

        <Spacer paddingTop={'30px'}></Spacer>

        <FlexRowCenteredContainer justifyCenter={true}>
          <div style={{ width: '30%' }}>
            <SignUpButton variant="outlined" color="primary" fullWidth={true} component={Link} data-testid="signUpButton" to="register">
              Sign up
            </SignUpButton>
          </div>
        </FlexRowCenteredContainer>
      </DontHaveAccountContainer>
    </LoginCard>
  );
}
