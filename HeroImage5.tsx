import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, Animated} from 'react-native';
import {Canvas, Blur, Image, useImage} from '@shopify/react-native-skia';

type Props = {
  animated: any; // Animated value for dynamic updates
};

const {width} = Dimensions.get('window');
// Set the height retaining the aspect ratio of 4/3
const IMAGE_HEIGHT = (width * 4) / 3;

const HeroImage = ({animated}: Props) => {
  // Load the image using useImage from react-native-skia
  const image = useImage(require('./assets/hero2.jpg'));

  // State to store the blur radius
  const [blurRadius, setBlurRadius] = useState(0);

  // Add a listener to the Animated.Value to update the blur radius
  useEffect(() => {
    const listenerId = animated.addListener(({value}: {value: number}) => {
      // Update the blur radius dynamically based on scroll position
      setBlurRadius(Math.min(value / (IMAGE_HEIGHT / 10), 10));
    });

    return () => {
      animated.removeListener(listenerId); // Cleanup listener on unmount
    };
  }, [animated]);

  // Early return if the image is not yet loaded
  if (!image) {
    return null;
  }

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
    <Animated.View style={[styles.container, imageStyle]}>
      <Canvas style={styles.canvas}>
        {/* Render the Image and apply the Blur effect */}
        <Image image={image} x={0} y={0} width={width} height={IMAGE_HEIGHT}>
          <Blur blur={blurRadius} />
        </Image>
      </Canvas>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: IMAGE_HEIGHT,
  },
  canvas: {
    width: '100%',
    height: IMAGE_HEIGHT,
  },
});

export default HeroImage;
