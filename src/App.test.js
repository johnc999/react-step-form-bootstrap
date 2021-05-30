import React from 'react';
import { cleanup, render, fireEvent, getByTestId, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

afterEach(cleanup);

test('First Name input exists', () => {
  const { getByText } = render(<App />);
  const inputElement = screen.getByTestId('firstname-input');
  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert
  expect(inputElement).toBeInTheDocument();
});

test('App matches snapshot', () => {
  const { asFragment } = render(<App />)
  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert
  expect(asFragment(<App />)).toMatchSnapshot()
});

test("page 1 bad email",async()=>{
  const nextStep = jest.fn();
  const { getByLabelText, getByText } = render(<App nextStep={nextStep} />);

  fireEvent.change(screen.getByTestId('firstname-input'), { target: { value: 'Jerry' } });
  fireEvent.change(screen.getByTestId('lastname-input'), { target: { value: 'Jones' } });
  fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'jerry.jones.com' } });

  const btnIncrement = screen.getByTestId("page-1-continue-btn");
  fireEvent.click(btnIncrement);

  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert

  const streetno = screen.queryByTestId('streetnumber-input');
  expect(streetno).not.toBeInTheDocument();
});

test("page 1 success",async()=>{
  const nextStep = jest.fn();
  const { getByLabelText, getByText } = render(<App nextStep={nextStep} />);

  fireEvent.change(screen.getByTestId('firstname-input'), { target: { value: 'Jerry' } });
  fireEvent.change(screen.getByTestId('lastname-input'), { target: { value: 'Jones' } });
  fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'jerry.jones@aabb.com' } });

  const btnIncrement = screen.getByTestId("page-1-continue-btn");
  fireEvent.click(btnIncrement);

  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert

  const streetno = screen.queryByTestId('streetnumber-input');
  expect(streetno).toBeInTheDocument();
});

test("page 2 bad street number",async()=>{
  const nextStep = jest.fn();
  const { getByLabelText, getByText } = render(<App nextStep={nextStep} />);

  fireEvent.change(screen.getByTestId('firstname-input'), { target: { value: 'Jerry' } });
  fireEvent.change(screen.getByTestId('lastname-input'), { target: { value: 'Jones' } });
  fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'jerry.jones@aabb.com' } });

  const btnIncrement = screen.getByTestId("page-1-continue-btn");
  fireEvent.click(btnIncrement);

  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert

  const streetno = screen.queryByTestId('streetnumber-input')
  expect(streetno).toBeInTheDocument()

  fireEvent.change(screen.getByTestId('streetnumber-input'), { target: { value: 'abc' } });
  fireEvent.change(screen.getByTestId('streetname-input'), { target: { value: 'Queen' } });
  fireEvent.change(screen.getByTestId('streettype-input'), { target: { value: 'St' } });
  fireEvent.change(screen.getByTestId('suburb-input'), { target: { value: 'Brisbane' } });
  fireEvent.change(screen.getByTestId('postcode-input'), { target: { value: '4000' } });

  const btnIncrement2 = screen.getByTestId("page-2-continue-btn");
  fireEvent.click(btnIncrement2);

  const page3backbutton = screen.queryByTestId('p3-back-btn');
  expect(page3backbutton).not.toBeInTheDocument();

});

test("page 2 success",async()=>{
  const nextStep = jest.fn();
  const { getByLabelText, getByText } = render(<App nextStep={nextStep} />);

  fireEvent.change(screen.getByTestId('firstname-input'), { target: { value: 'Jerry' } });
  fireEvent.change(screen.getByTestId('lastname-input'), { target: { value: 'Jones' } });
  fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'jerry.jones@aabb.com' } });

  const btnIncrement = screen.getByTestId("page-1-continue-btn");
  fireEvent.click(btnIncrement);

  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert

  const streetno = screen.queryByTestId('streetnumber-input')
  expect(streetno).toBeInTheDocument()

  fireEvent.change(screen.getByTestId('streetnumber-input'), { target: { value: '33' } });
  fireEvent.change(screen.getByTestId('streetname-input'), { target: { value: 'Queen' } });
  fireEvent.change(screen.getByTestId('streettype-input'), { target: { value: 'St' } });
  fireEvent.change(screen.getByTestId('suburb-input'), { target: { value: 'Brisbane' } });
  fireEvent.change(screen.getByTestId('postcode-input'), { target: { value: '4000' } });

  const btnIncrement2 = screen.getByTestId("page-2-continue-btn");
  fireEvent.click(btnIncrement2);

  const page3backbutton = screen.queryByTestId('p3-back-btn');
  expect(page3backbutton).toBeInTheDocument();

});

