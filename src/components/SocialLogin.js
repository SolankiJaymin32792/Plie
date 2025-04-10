import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { LoginStyles } from '../styles/LoginStyle';


export default function SocialLogin() {
  return (
    <View style={LoginStyles.socialContainer}>
      {['google', 'apple', 'facebook'].map((provider, idx) => (
        <TouchableOpacity key={idx} style={LoginStyles.socialIcon}>
          <Image
            source={{
              uri: `https://img.icons8.com/color/48/${provider}.png`,
            }}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
