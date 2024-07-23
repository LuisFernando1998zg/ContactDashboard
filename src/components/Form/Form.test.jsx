import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Form } from './Form';
import { useContacts } from '../../contexts/ContactsContext';

// Mock useContacts context
vi.mock('../../contexts/ContactsContext', () => ({
  useContacts: vi.fn(),
}));

describe('Form Component', () => {
  let addNewContactMock;

  beforeEach(() => {
    addNewContactMock = vi.fn(); // Mock de la función addNewContact
    useContacts.mockReturnValue({ addNewContact: addNewContactMock }); // Retorna el mock cuando se llama useContacts
  });

  it('renders the form with initial values', () => {
    render(<Form />);

    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Enable like Favorites')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save/i })).toBeDisabled();
  });

  it('validates and submits the form', async () => {
    render(<Form />);

    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const saveButton = screen.getByRole('button', { name: /save/i });

    fireEvent.change(firstNameInput, { target: { value: 'Luis' } });
    fireEvent.change(lastNameInput, { target: { value: 'Fernando' } });
    fireEvent.change(emailInput, { target: { value: 'Luis.zapata@gmail.com' } });

    fireEvent.blur(firstNameInput);
    fireEvent.blur(lastNameInput);
    fireEvent.blur(emailInput);

    expect(saveButton).not.toBeDisabled();

    fireEvent.click(saveButton);

    expect(addNewContactMock).toHaveBeenCalledWith({
      first_name: 'Luis',
      last_name: 'Fernando',
      email: 'Luis.zapata@gmail.com',
      isFavorite: false,
      avatar: expect.any(String), // defaultAvatar
    });
  });

  it('shows error messages for invalid inputs', async () => {
    render(<Form />);

    const firstNameInput = screen.getByPlaceholderText('First Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const emailInput = screen.getByPlaceholderText('Email');

    fireEvent.blur(firstNameInput);
    fireEvent.blur(lastNameInput);
    fireEvent.blur(emailInput);

    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Last name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });
});