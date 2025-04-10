import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function HomeScreen({ route }) {
  const user = route.params.user;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome {user?.firstName || 'Hello Renzo!'}!</Text>
      <Text style={styles.subtitle}>Are you ready to dance?</Text>


      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
