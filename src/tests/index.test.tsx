import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('Check requesting data when redirect to game', () => {
  it('should works correctly', async () => {
    const fetchMock = jest.fn(() =>
      Promise.resolve({
        json: () => ({
          message: 'https://images.dog.ceo/breeds/shihtzu/n02086240_6116.jpg',
          status: 'success',
        }),
      })
    );

    global.fetch = fetchMock as never;

    render(<App />);
    const label = await screen.findByRole('note');

    expect(label).toBeInTheDocument();
    expect(fetchMock).toBeCalledTimes(27);
  });

  it('should check fields validity and that submit button is disabled', async () => {
    render(<App />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const label = await screen.findByRole('status');

    expect(label).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('submit button should be enabled when input value is passed', async () => {
    render(<App />);
    const button = screen.getByRole('button');
    const inputField = screen.getByRole('textbox');
    fireEvent.change(inputField, { target: { value: 'test' } });
    await waitFor(() => expect(button).toBeEnabled());

    fireEvent.click(button);
  });
});
