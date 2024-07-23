import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Card from './Card';
import { useContacts } from '../../contexts/ContactsContext';
import { FavoritesButton, TrashButton, RemoveButton, XButton } from '../../components/Buttons/Buttons';

// Mock useContacts context
vi.mock('../../contexts/ContactsContext', () => ({
  useContacts: vi.fn(),
}));

// Mock Buttons
vi.mock('../../components/Buttons/Buttons', () => ({
  FavoritesButton: vi.fn(({ id }) => <button data-testid={`favorites-button-${id}`}>Favorites</button>),
  TrashButton: vi.fn(({ id }) => <button data-testid={`trash-button-${id}`}>Trash</button>),
  RemoveButton: vi.fn(({ id }) => <button data-testid={`remove-button-${id}`}>Remove</button>),
  XButton: vi.fn(({ id }) => <button data-testid={`x-button-${id}`}>X</button>),
}));

describe('Card Component', () => {
  let switchFavoritesMock;
  let removeContactMock;

  beforeEach(() => {
    switchFavoritesMock = vi.fn();
    removeContactMock = vi.fn();
    useContacts.mockReturnValue({ switchFavorites: switchFavoritesMock, removeContact: removeContactMock });
  });

  const defaultProps = {
    id: '1',
    img: 'https://via.placeholder.com/150',
    first_name: 'Luis',
    last_name: 'Fernando',
    email: 'Luis.Fernando@gmail.com',
    isfavorite: false,
    page: 'overview',
  };

  it('renders the card with initial values', () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByText('Luis Fernando')).toBeInTheDocument();
    expect(screen.getByText('Luis.Fernando@gmail.com')).toBeInTheDocument();
    expect(screen.getByAltText('Luis Fernando')).toBeInTheDocument();
    expect(screen.getByTestId('favorites-button-1')).toBeInTheDocument();
  });

  it('calls switchFavorites when the favorite button is clicked', () => {
    render(<Card {...defaultProps} />);

    fireEvent.click(screen.getByTestId('favorites-button-1'));
    expect(switchFavoritesMock).toHaveBeenCalledWith('1');
  });

  it('renders the correct buttons based on the page prop', () => {
    const { rerender } = render(<Card {...defaultProps} page="favorites" />);
    
    expect(screen.getByTestId('remove-button-1')).toBeInTheDocument();

    rerender(<Card {...defaultProps} page="contacts" />);
    
    expect(screen.getByTestId('favorites-button-1')).toBeInTheDocument();
    expect(screen.getByTestId('trash-button-1')).toBeInTheDocument();
  });

  it('calls removeContact when the trash button is clicked', () => {
    render(<Card {...defaultProps} page="contacts" />);

    fireEvent.click(screen.getByTestId('trash-button-1'));
    expect(removeContactMock).toHaveBeenCalledWith('1');
  });
});