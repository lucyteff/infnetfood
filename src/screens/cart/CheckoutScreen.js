import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Animated
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartContext } from '../../context/CartContext';
import { useOrders } from '../../context/OrdersContext';
import { useTheme } from '../../context/ThemeContext';
import { useNotifications } from '../../hooks/useNotifications';

export default function CheckoutScreen({ route, navigation }) {
  const { cartItems, clearCart } = useContext(CartContext);
  const { addOrder } = useOrders();
  const { colors } = useTheme();
  const { scheduleOrderNotification } = useNotifications(); 
  
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const buttonScale = new Animated.Value(1);

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const getPaymentMethodText = (method) => {
    switch (method) {
      case 'credit': return 'Cartão de Crédito';
      case 'debit': return 'Cartão de Débito';
      case 'pix': return 'PIX';
      case 'cash': return 'Dinheiro';
      default: return 'Cartão de Crédito';
    }
  };

  const validateForm = () => {
    if (!address.trim()) {
      Alert.alert('Erro', 'Por favor, informe o endereço de entrega');
      return false;
    }
    if (cartItems.length === 0) {
      Alert.alert('Erro', 'Seu carrinho está vazio');
      return false;
    }
    return true;
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleConfirmOrder = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    animateButton();

    setTimeout(async () => {
      const newOrder = addOrder({
        items: [...cartItems],
        total: total,
        address: address,
        paymentMethod: paymentMethod
      });

     
      await scheduleOrderNotification(newOrder.id, 'Preparando', 3);

      clearCart();

      Alert.alert(
        '✅ Pedido Confirmado!',
        `Seu pedido #${newOrder.id.slice(-6)} foi recebido e está sendo preparado!\n\n` +
        `Endereço: ${address}\n` +
        `Método de pagamento: ${getPaymentMethodText(paymentMethod)}\n` +
        `Total: R$ ${total.toFixed(2)}\n\n` +
        `Status: 🍳 Preparando`,
        [
          {
            text: 'Acompanhar Pedido',
            onPress: () => navigation.navigate('Perfil', { screen: 'Orders' })
          },
          {
            text: 'Continuar Comprando',
            onPress: () => navigation.navigate('HomeMain')
          }
        ]
      );
      
      setIsSubmitting(false);
    }, 2000);
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString('pt-BR');
  };

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Checkout</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumo do Pedido</Text>
          <View style={styles.orderSummary}>
            <Text style={styles.itemsCount}>
              {cartItems.reduce((total, item) => total + item.quantity, 0)} itens
            </Text>
            <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
          </View>
          
          <View style={styles.itemsPreview}>
            {cartItems.slice(0, 3).map((item, index) => (
              <Text key={index} style={styles.itemPreview}>
                {item.quantity}x {item.name}
              </Text>
            ))}
            {cartItems.length > 3 && (
              <Text style={styles.moreItems}>
                +{cartItems.length - 3} mais itens
              </Text>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Endereço de Entrega</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu endereço completo"
            placeholderTextColor={colors.textSecondary}
            value={address}
            onChangeText={setAddress}
            multiline
            numberOfLines={3}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Método de Pagamento</Text>
          <View style={styles.paymentMethods}>
            <TouchableOpacity 
              style={[styles.paymentOption, paymentMethod === 'credit' && styles.selectedPayment]}
              onPress={() => setPaymentMethod('credit')}
            >
              <Text style={styles.paymentText}>💳 Cartão de Crédito</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.paymentOption, paymentMethod === 'debit' && styles.selectedPayment]}
              onPress={() => setPaymentMethod('debit')}
            >
              <Text style={styles.paymentText}>💳 Cartão de Débito</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.paymentOption, paymentMethod === 'pix' && styles.selectedPayment]}
              onPress={() => setPaymentMethod('pix')}
            >
              <Text style={styles.paymentText}>📱 PIX</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.paymentOption, paymentMethod === 'cash' && styles.selectedPayment]}
              onPress={() => setPaymentMethod('cash')}
            >
              <Text style={styles.paymentText}>💵 Dinheiro</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações do Pedido</Text>
          <View style={styles.orderInfo}>
            <Text style={styles.infoItem}>
              <Text style={styles.infoLabel}>Data: </Text>
              {getCurrentDate()}
            </Text>
            <Text style={styles.infoItem}>
              <Text style={styles.infoLabel}>Status: </Text>
              🍳 Preparando
            </Text>
            <Text style={styles.infoItem}>
              <Text style={styles.infoLabel}>Tempo estimado: </Text>
              30-45 minutos
            </Text>
          </View>
        </View>

        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <TouchableOpacity 
            style={[styles.confirmButton, isSubmitting && styles.loadingButton]}
            onPress={handleConfirmOrder}
            disabled={isSubmitting || cartItems.length === 0}
          >
            <Text style={styles.confirmButtonText}>
              {isSubmitting ? 'Processando...' : `Confirmar Pedido - R$ ${total.toFixed(2)}`}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 15,
  },
  orderSummary: {
    backgroundColor: colors.card,
    padding: 15,
    borderRadius: 10,
  },
  itemsCount: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  itemsPreview: {
    marginTop: 10,
    padding: 10,
    backgroundColor: colors.card,
    borderRadius: 8,
  },
  itemPreview: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  moreItems: {
    fontSize: 12,
    color: colors.primary,
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: colors.card,
    minHeight: 100,
    textAlignVertical: 'top',
    color: colors.text,
  },
  paymentMethods: {
    gap: 10,
  },
  paymentOption: {
    backgroundColor: colors.card,
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedPayment: {
    borderColor: colors.primary,
    backgroundColor: colors.card,
  },
  paymentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  orderInfo: {
    backgroundColor: colors.card,
    padding: 15,
    borderRadius: 10,
  },
  infoItem: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: colors.text,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  loadingButton: {
    opacity: 0.7,
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});