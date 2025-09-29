import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import { CartContext } from '../../../context/CartContext';
import { ThemeProvider } from '../../../context/ThemeContext';

// Mock de dados do CartContext
const mockCart = {
  cartItems: [],
  addToCart: jest.fn(),
  updateCart: jest.fn(),
  clearCart: jest.fn(),
  getTotalItems: () => 0,
  getTotalPrice: () => 0,
};

// função auxiliar para renderizar o componente com todos os providers
const renderWithProviders = (ui) => {
  return render(
    <ThemeProvider>
      <CartContext.Provider value={mockCart}>
        {ui}
      </CartContext.Provider>
    </ThemeProvider>
  );
};

describe('HomeScreen', () => {
  test('exibe categorias corretamente', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = renderWithProviders(<HomeScreen navigation={navigation} />);
    
    expect(getByText('Lanches')).toBeTruthy();
    expect(getByText('Bebidas')).toBeTruthy();
  });

  test('navega para produtos ao clicar categoria', () => {
    const navigation = { navigate: jest.fn() };
    const { getByText } = renderWithProviders(<HomeScreen navigation={navigation} />);
    
    fireEvent.press(getByText('Lanches'));
    expect(navigation.navigate).toHaveBeenCalledWith('Products', { category: 'Lanches' });
  });
});