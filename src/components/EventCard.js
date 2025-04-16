import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { HomeStyle } from '../styles/HomeStyle';

const EventCard = ({ event, isFavorited, onToggleFavorite }) => {
  const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <View style={HomeStyle.card}>
      <View style={HomeStyle.cardHeader}>
        <Image source={{ uri: event.image }} style={HomeStyle.image} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={HomeStyle.title}>{event.title}</Text>
          <Text style={HomeStyle.date}>{formatDate(event.date)}</Text>
          <Text style={HomeStyle.price}>{event.price}</Text>
        </View>
      </View>

      <Text style={HomeStyle.location}>{event.location}</Text>

      <View style={HomeStyle.tagsContainer}>
        {event.tags?.map((tag, idx) => (
          <Text key={idx} style={HomeStyle.tag}>{tag}</Text>
        ))}
      </View>

      <View style={HomeStyle.cardFooter}>
        <TouchableOpacity onPress={onToggleFavorite}>
          <Text style={{ fontSize: 18 }}>{isFavorited ? '💚' : '🤍'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventCard;