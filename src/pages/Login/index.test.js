import { fireEvent, render, screen, act } from '@testing-library/react';
import React from 'react';
import Login from '.';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

it('Check if form displays correctly', () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <Login />
    </Router>
  );

  const form = screen.getByTestId('passwordInput');
  const login = screen.getByTestId('loginInput');
  const password = screen.getByTestId('passwordInput');
  const submit = screen.getByTestId('signIn');

  expect(form).toBeInTheDocument();
  expect(login).toHaveValue('');
  expect(password).toBeEmpty();
  expect(submit).toBeInTheDocument();
});

it('Should check if message appears on invalid email and password', () => {
  let w;
  const history = createMemoryHistory();
  const fakeUserResponse = { token: 'fake_user_token' };
  jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse),
    });
  });

  render(
    <Router history={history}>
      <Login />
    </Router>
  );

  const form = screen.getByTestId('passwordInput');
  const login = screen.getByTestId('loginInput');
  const password = screen.getByTestId('passwordInput');
  const submit = screen.getByTestId('signIn');

  expect(form).toBeInTheDocument();
  expect(login).toHaveValue('');
  expect(password).toBeEmpty();
  expect(submit).toBeInTheDocument();

  fireEvent.change(login, { target: { value: 'invalidEmail' } });
  fireEvent.click(submit);

  expect(login).toHaveValue('invalidEmail');
});
