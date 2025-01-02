import React from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';

type Props = {
  animated: Animated.Value;
};

const {width} = Dimensions.get('window');
// Set the height retaining the aspect ratio of 4/3
const IMAGE_HEIGHT = (width * 4) / 3;

const HeroImage = ({animated}: Props) => {
  const opacity = animated.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [1, 0.4],
  });

  const scale = animated.interpolate({
    inputRange: [0, IMAGE_HEIGHT],
    outputRange: [1, 1.3],
    extrapolate: 'clamp',
  });

  const imageStyle = {
    opacity,
    transform: [{scale}],
  };

  return (
    <Animated.Image
      source={require('./assets/hero2.jpg')}
      style={[styles.image, imageStyle]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: IMAGE_HEIGHT,
  },
});

export default HeroImage;
