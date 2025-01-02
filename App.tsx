import React, {useRef} from 'react';
import {Animated, Text, View, StyleSheet} from 'react-native';
import HeroImage from './HeroImage5';

const HeroBlurEffect = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <HeroImage animated={scrollY} />
        <View style={styles.element}>
          <Text style={styles.text}>Loreena Ipsu</Text>
          <Text style={styles.text2}>@lowrealipsu_</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.heading}>Lorem Ipsum Fashionis</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis
            <Text style={styles.highlight}> blazer </Text> natus error sit
            voluptatem accusantium
            <Text style={styles.highlight}> fit-loverque </Text> laudantium.
            Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            <Text style={styles.highlight}> skinny-jeans </Text> architecto
            beatae vitae dicta sunt explicabo.
          </Text>

          <Text style={styles.paragraph}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            <Text style={styles.highlight}> runway fugit</Text>, sed quia
            <Text style={styles.highlight}> fashion goals </Text> consequuntur
            magni dolores eos qui
            <Text style={styles.highlight}> RFP (request for pants)</Text>{' '}
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia
            <Text style={styles.highlight}> makeup-is-life </Text> dolor sit
            amet, consectetur, adipisci velit.
          </Text>

          <Text style={styles.paragraph}>
            At vero eos et
            <Text style={styles.highlight}> accessories </Text> et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque
            <Text style={styles.highlight}> haute-couture </Text> corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            <Text style={styles.highlight}> sneakerwave </Text> provident,
            similique sunt in culpa qui
            <Text style={styles.highlight}> catwalk </Text> officia deserunt
            mollit anim id est laborum.
          </Text>

          <Text style={styles.paragraph}>
            Quis autem vel eum iure reprehenderit qui in ea voluptates
            <Text style={styles.highlight}> denim duty </Text> suscipit
            laboriosam, nisi ut aliquid ex ea commodi
            <Text style={styles.highlight}> earring wishlist </Text>{' '}
            consequatur? Quis autem vel fringilla runway-worthy voluptates
            repudiandae?
          </Text>

          <Text style={styles.paragraph}>
            Ut enim ad minima veniam, quis nostrum exercitationem
            <Text style={styles.highlight}> lululemonationem </Text> ullam
            body-positive laboris nisi ut aliquid ex
            <Text style={styles.highlight}> Zara perspiciatis </Text> omnis
            iste. Fashion influencer repellat eveniet, architecto cupiditate
            quibusdam <Text style={styles.highlight}> #OOTD </Text> debitis, aut
            officiis haute-erroribus, vel illum qui dolorem eum fugiat quo
            <Text style={styles.highlight}> vogue-approved </Text> voluptas
            nulla pariatur?
          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  spacer: {height: 733, backgroundColor: '#fff'},
  image: {
    width: '100%',
    height: 400,
  },
  element: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30, // Negative margin to overlap the previous element (image) by 30px
    padding: 20,
    paddingBottom: 40,
    // transform: [{translateY: -30}],
  },
  text: {color: '#282828', fontSize: 22, fontWeight: 'bold'},
  text2: {color: '#555', fontSize: 13, marginVertical: 3},
  body: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 30,
    marginTop: -30, // Negative margin to overlap the previous element (element) by 30px
  },
  status: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    fontSize: 18,
    color: 'green',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 16,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#d17a22', // Fashionable orange for highlights
  },
});

export default HeroBlurEffect;
