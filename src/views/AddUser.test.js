import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddUser from './AddUser';
import { fireEvent, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Add user', () => {
  it('add new user', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Maciek' },
    });
    fireEvent.change(screen.getByTestId('Attendence'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '4.5' },
    });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Maciek');
  });
});
