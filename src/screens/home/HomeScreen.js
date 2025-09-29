import React, { useContext, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories } from '../../utils/mockData';
import { CartContext } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';
import { useNotifications } from '../../hooks/useNotifications';

export default function HomeScreen({ navigation }) {
  const { getTotalItems } = useContext(CartContext);
  const { colors } = useTheme();
  const { sendPromotionalNotification } = useNotifications(); 

  const styles = createStyles(colors);

  useEffect(() => {
    const timer = setTimeout(() => {
      sendPromotionalNotification();
    }, 3000); // 3 segundos após carregar a home

    return () => clearTimeout(timer);
  }, []);

  const renderCategory = ({ item }) => (
    <TouchableOpacity 
      style={[styles.categoryCard, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate('Products', { category: item.name })}
    >
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const menuItems = [
    { title: 'Restaurantes', icon: '🗺️', tab: 'Restaurantes' },
    { title: 'Meus Pedidos', icon: '📦', tab: 'Perfil', screen: 'Orders' },
    { title: 'Perfil', icon: '👤', tab: 'Perfil' },
    { title: 'Configurações', icon: '⚙️', tab: 'Perfil', screen: 'Settings' },
  ];

  const handleMenuPress = (item) => {
    if (item.screen) {
      navigation.navigate(item.tab, { screen: item.screen });
    } else {
      navigation.navigate(item.tab);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>InfnetFood</Text>
          <TouchableOpacity 
            style={styles.cartButton}
            onPress={() => navigation.navigate('Cart')}
          >
            <Text style={styles.cartIcon}>🛒</Text>
            {getTotalItems() > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{getTotalItems()}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Bem-vindo ao seu app de delivery</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Banner promocional */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>🎉 Promoção do Dia!</Text>
          <Text style={styles.bannerText}>Frete grátis em pedidos acima de R$ 30</Text>
        </View>

        {/* Menu Principal */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Menu Rápido</Text>
          <View style={styles.menuGrid}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => handleMenuPress(item)}
              >
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <Text style={styles.menuText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Categorias */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Destaques */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>🔥 Mais Pedidos</Text>
          <View style={styles.featuredItems}>
            <View style={styles.featuredItem}>
              <Text style={styles.featuredIcon}>🍔</Text>
              <Text style={styles.featuredText}>Xis Tudo</Text>
            </View>
            <View style={styles.featuredItem}>
              <Text style={styles.featuredIcon}>🥤</Text>
              <Text style={styles.featuredText}>Guaraná 2L</Text>
            </View>
            <View style={styles.featuredItem}>
              <Text style={styles.featuredIcon}>🍰</Text>
              <Text style={styles.featuredText}>Brigadeiro</Text>
            </View>
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
    padding: 20,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  cartIcon: {
    fontSize: 24,
    color: colors.white,
  },
  cartBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: colors.error,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  banner: {
    backgroundColor: colors.secondary,
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 5,
  },
  bannerText: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.9,
  },
  menuSection: {
    marginBottom: 25,
  },
  categoriesSection: {
    marginBottom: 25,
  },
  featuredSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 15,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '48%',
    backgroundColor: colors.card,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  menuIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  menuText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
  categoriesList: {
    padding: 0,
  },
  categoryCard: {
    flex: 1,
    margin: 8,
    height: 120,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  featuredItems: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  featuredItem: {
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 15,
    borderRadius: 12,
    minWidth: 80,
  },
  featuredIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  featuredText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
});