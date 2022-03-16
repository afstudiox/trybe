import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEMail = screen.getByLabelText('Email');
  expect(inputEMail).toBeInTheDocument();
  expect(inputEMail).toHaveProperty('type','email');
});

test('Verificando se existe um botão', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de Enviar', () => {
  render(<App />)
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type','button');
  expect(btnSend).toHaveValue('Enviar');
})

test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = "email@email.com"

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEMail = screen.getByLabelText('Email');
  userEvent.type(inputEMail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEMail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});