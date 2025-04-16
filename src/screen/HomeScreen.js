import React, { useEffect, useState } from 'react';
import {
  View, Text, FlatList, ActivityIndicator,
  SafeAreaView, RefreshControl,
} from 'react-native';
import { HomeStyle } from '../styles/HomeStyle';
import EventCard from '../components/EventCard';
import { fetchEvents } from '../api/eventApi';

export default function HomeScreen({ route }) {
  const user = route.params?.user;
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getData = async () => {
    setLoading(true);
    const result = await fetchEvents();
    if (result.success) {
      setEvents(result.data);
      setErrorMessage('');
    } else {
      setErrorMessage(result.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading events...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

      <View style={{ padding: 15, }}>

        <Text style={HomeStyle.title}>Hello {user?.firstName || 'Renzo'}!</Text>
        <Text style={HomeStyle.subtitle}>Are you ready to dance?</Text>
      </View>

      <View style={{ backgroundColor: '#F2F2F2', flex: 1 }}>
        {errorMessage ? (
          <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text>
        ) : (
          <FlatList
            data={events}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <EventCard
                event={item}
                isFavorited={favoriteEvents.some((e) => e.id === item.id)}
                onToggleFavorite={() => toggleFavorite(item)}
              />
            )}
            ListEmptyComponent={<Text>No events found.</Text>}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </View>

    </SafeAreaView>
  );
}