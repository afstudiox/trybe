import React from 'react';
import { render, screen } from '@testing-library/react';
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