import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
// Set the height retaining the aspect ratio of 4/3
const IMAGE_HEIGHT = (width * 4) / 3;

const HeroImage = () => {
  return (
    <Image source={require('./assets/hero2.jpg')} style={[styles.image]} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: IMAGE_HEIGHT,
  },
});

export default HeroImage;
