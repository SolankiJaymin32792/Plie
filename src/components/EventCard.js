import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { HomeStyle } from '../styles/HomeStyle';
import { events } from '../data/eventData';


const EventCard = ({ event }) => {
  return (
    <View style={HomeStyle.card}>
      <View style={HomeStyle.cardHeader}>
        <Image source={{ uri: event.image }} style={HomeStyle.image} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={HomeStyle.title}>{events.title}</Text>
          <Text style={HomeStyle.date}>{event.date}</Text>
          <Text style={HomeStyle.price}>{event.price}</Text>
        </View>
        <Text style={HomeStyle.location}>{event.location}</Text>
      </View>

      <View style={HomeStyle.tagsContainer}>
        {event.tags.map((tag, idx) => (
          <Text key={idx} style={HomeStyle.tag}>{tag}</Text>
        ))}
      </View>

      <View style={HomeStyle.cardFooter}>
        <TouchableOpacity>
          <Text>🔁</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>{event.favorited ? '💚' : '🤍'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventCard;
