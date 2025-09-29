import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { restaurants } from '../../utils/mockData';
import { useTheme } from '../../context/ThemeContext';

const { width } = Dimensions.get('window');

export default function MapScreen({ navigation }) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const { colors } = useTheme();

  const styles = createStyles(colors);

  const renderMapSimulation = () => (
    <View style={styles.mapContainer}>
      <View style={styles.mapGrid}>
        {Array.from({ length: 6 }).map((_, row) => (
          <View key={row} style={styles.gridRow}>
            {Array.from({ length: 6 }).map((_, col) => (
              <View key={col} style={styles.gridCell} />
            ))}
          </View>
        ))}
      </View>

      <View style={styles.markersContainer}>
        {restaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            style={[
              styles.marker,
              styles[`marker${restaurant.id}`],
              selectedRestaurant?.id === restaurant.id && styles.selectedMarker
            ]}
            onPress={() => setSelectedRestaurant(restaurant)}
          >
            <Text style={styles.markerText}>{restaurant.id}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('RestaurantDetail', { restaurant });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Restaurantes no Centro do Rio</Text>
      </View>

      {renderMapSimulation()}

      {selectedRestaurant && (
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{selectedRestaurant.nome}</Text>
          <Text style={styles.restaurantAddress}>{selectedRestaurant.endereco}</Text>
          <Text style={styles.restaurantDescription}>{selectedRestaurant.descricao}</Text>
          <Text style={styles.restaurantPhone}>{selectedRestaurant.telefone}</Text>
          
          <TouchableOpacity 
            style={styles.detailButton}
            onPress={() => handleRestaurantPress(selectedRestaurant)}
          >
            <Text style={styles.detailButtonText}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.restaurantsList}>
        <Text style={styles.listTitle}>Todos os Restaurantes</Text>
        <FlatList
          data={restaurants}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.restaurantCard}
              onPress={() => setSelectedRestaurant(item)}
            >
              <Text style={styles.cardName}>{item.nome}</Text>
              <Text style={styles.cardAddress}>{item.endereco}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.listContent}
        />
      </View>
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
  mapContainer: {
    flex: 1,
    margin: 15,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  mapGrid: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  gridRow: {
    flexDirection: 'row',
    flex: 1,
  },
  gridCell: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: colors.border,
  },
  markersContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  marker: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary,
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
  selectedMarker: {
    backgroundColor: colors.error,
    transform: [{ scale: 1.2 }],
  },
  markerText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  marker1: { top: '15%', left: '20%' },
  marker2: { top: '25%', left: '60%' },
  marker3: { top: '35%', left: '40%' },
  marker4: { top: '45%', left: '20%' },
  marker5: { top: '40%', left: '70%' },
  marker6: { top: '55%', left: '50%' },
  marker7: { top: '60%', left: '30%' },
  marker8: { top: '65%', left: '65%' },
  marker9: { top: '75%', left: '40%' },
  marker10: { top: '80%', left: '25%' },
  restaurantInfo: {
    padding: 15,
    backgroundColor: colors.card,
    margin: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 5,
  },
  restaurantAddress: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 5,
  },
  restaurantDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 5,
    fontStyle: 'italic',
  },
  restaurantPhone: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailButton: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  detailButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  restaurantsList: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 5,
  },
  restaurantCard: {
    backgroundColor: colors.card,
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    minWidth: 150,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  cardName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  cardAddress: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});