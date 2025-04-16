import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import EventCard from '../components/EventCard';
import { HomeStyle } from '../styles/HomeStyle';

export default function FavoritesScreen({ route }) {
  const favoriteEvents = route.params?.favorites || [];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 15 }}>
        <Text style={HomeStyle.title}>Your Favorite Events</Text>
      </View>

      <FlatList
        data={favoriteEvents}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EventCard
            event={item}
            isFavorited={true}
            showFavoriteIcon={true}
            onToggleFavorite={() => {}}
          />
        )}
        ListEmptyComponent={<Text style={{ padding: 20 }}>No favorites yet.</Text>}
      />
    </SafeAreaView>
  );
}
