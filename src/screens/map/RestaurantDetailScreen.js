import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from '../../utils/mockData';
import { CartContext } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';

export default function RestaurantDetailScreen({ route, navigation }) {
  const { restaurant } = route.params;
  const { cartItems, addToCart, getTotalItems } = useContext(CartContext);
  const { colors } = useTheme();
  
  const styles = createStyles(colors);

  const getRestaurantProducts = () => {
    const restaurantProductsMap = {
      1: ['1', '2', '12'],
      2: ['25', '26', '13'],
      3: ['3', '4', '14'],
      4: ['5', '6', '19'],
      5: ['20', '7', '21'],
      6: ['27', '28', '15'],
      7: ['8', '9', '16'],
      8: ['22', '23', '17'],
      9: ['29', '30', '18'],
      10: ['10', '11', '24'],
    };

    const productIds = restaurantProductsMap[restaurant.id] || [];
    return products.filter(product => productIds.includes(product.id));
  };

  const menuProducts = getRestaurantProducts();

  const handleAddToCart = (product) => {
    addToCart(product);
    Alert.alert('✅ Adicionado!', `${product.name} foi adicionado ao carrinho`);
  };

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image source={item.image} style={styles.menuItemImage} />
      <View style={styles.menuItemInfo}>
        <Text style={styles.menuItemName}>{item.name}</Text>
        <Text style={styles.menuItemDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.menuItemPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => handleAddToCart(item)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title} numberOfLines={1}>{restaurant.nome}</Text>
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.cartIcon}>🛒</Text>
          {getTotalItems() > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>
                {getTotalItems()}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.restaurantInfo}>
          <View style={styles.infoCard}>
            <Text style={styles.sectionTitle}>Informações do Restaurante</Text>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>📍</Text>
              <Text style={styles.infoValue}>{restaurant.endereco}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>📞</Text>
              <Text style={styles.infoValue}>{restaurant.telefone}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>🍽️</Text>
              <Text style={styles.infoValue}>{restaurant.categoria}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>📝</Text>
              <Text style={styles.infoValue}>{restaurant.descricao}</Text>
            </View>
          </View>

          {menuProducts.length > 0 && (
            <View style={styles.exampleCard}>
              <Text style={styles.sectionTitle}>Produto em Destaque</Text>
              <View style={styles.exampleProduct}>
                <Image source={menuProducts[0].image} style={styles.exampleImage} />
                <View style={styles.exampleInfo}>
                  <Text style={styles.exampleName}>{menuProducts[0].name}</Text>
                  <Text style={styles.exampleDescription}>
                    {menuProducts[0].description}
                  </Text>
                  <Text style={styles.examplePrice}>R$ {menuProducts[0].price.toFixed(2)}</Text>
                </View>
              </View>
            </View>
          )}

          <View style={styles.menuCard}>
            <Text style={styles.sectionTitle}>Cardápio Completo</Text>
            <Text style={styles.menuDescription}>
              {menuProducts.length} itens disponíveis
            </Text>
            
            <FlatList
              data={menuProducts}
              renderItem={renderMenuItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              contentContainerStyle={styles.menuList}
            />
          </View>
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  cartIcon: {
    fontSize: 20,
    color: colors.white,
  },
  cartBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: colors.error,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  restaurantInfo: {
    padding: 15,
  },
  infoCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  exampleCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: colors.secondary,
  },
  exampleProduct: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exampleImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  exampleInfo: {
    flex: 1,
  },
  exampleName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  exampleDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
    lineHeight: 18,
  },
  examplePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  infoLabel: {
    fontSize: 14,
    marginRight: 10,
    marginTop: 2,
    color: colors.text,
  },
  infoValue: {
    fontSize: 14,
    color: colors.textSecondary,
    flex: 1,
    lineHeight: 18,
  },
  menuCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: colors.success,
  },
  menuDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 15,
  },
  menuList: {
    padding: 0,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  menuItemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  menuItemInfo: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  menuItemDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 6,
    lineHeight: 14,
  },
  menuItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
  },
  addButton: {
    backgroundColor: colors.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  addButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});