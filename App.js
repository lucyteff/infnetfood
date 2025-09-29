import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet } from 'react-native';

// context
import { CartProvider } from './src/context/CartContext';
import { OrdersProvider } from './src/context/OrdersContext';
import { ThemeProvider } from './src/context/ThemeContext';

// screens
import LoginScreen from './src/screens/auth/LoginScreen';
import AppNavigator from './src/navigation/AppNavigator';

function SplashScreen() {
  return (
    <View style={styles.splashContainer}>
      <Image 
        source={require('./assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider>
      <OrdersProvider>
        <CartProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            {user ? (
              <AppNavigator onLogout={handleLogout} />
            ) : (
              <LoginScreen onLogin={handleLogin} />
            )}
          </NavigationContainer>
        </CartProvider>
      </OrdersProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#FF6B35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});