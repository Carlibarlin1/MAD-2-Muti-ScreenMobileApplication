import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MiniPlayer from '@/components/MiniPlayer';

const stations = [
  {
    name: 'Apple Music 1',
    image: require('../../assets/images/Music-radio.jpg'),
  },
  {
    name: 'Hits',
    image: require('../../assets/images/Music-radio-hits.jpg'),
  },
  {
    name: 'Country',
    image: require('../../assets/images/Music-radio-country.jpg'),
  },
  {
    name: 'Musica Uno',
    image: require('../../assets/images/Music-radio-musica.jpg'),
  },
  {
    name: 'Club',
    image: require('../../assets/images/Music-radio-club.jpg'),
  },
  {
    name: 'Chill',
    image: require('../../assets/images/Music-radio-chill.jpg'),
  },
];

export default function RadioScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Heading */}
        {/* <Text style={styles.title}>Radio</Text> */}

        {/* Radio station grid */}
        <View style={styles.stationGrid}>
          {stations.map((station) => (
            <View key={station.name} style={styles.stationTile}>
              <Image
                source={station.image}
                style={styles.stationImage}
                accessibilityLabel={station.name}
              />
            </View>
          ))}
        </View>

        {/* On Air Now heading */}
        <Text style={styles.sectionTitle}>On Air Now</Text>

        {/* Swipe horizontally between shows */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.showScroll}
        >
          {/* Rap Life Radio */}
          <View style={styles.showCard}>
            <Image
              source={require('../../assets/images/rap-life-radio.jpg')}
              style={styles.showImage}
              accessibilityLabel="Rap Life Radio"
            />

            <View style={styles.showInfo}>
              <Text style={styles.showLabel}>
                Apple Music 1 · 11–11:30 AM
              </Text>

              <Text style={styles.showTitle}>
                Rap Life Radio with Ebro Darden
              </Text>

              <Text style={styles.showDescription}>
                If it happened this week in rap, it’s on Rap Life Radio.
              </Text>
            </View>
          </View>

          {/* Apple Music Hits */}
          <View style={[styles.showCard, styles.hitsCard]}>
            <Image
              source={require('../../assets/images/Hits-Radio.jpg')}
              style={styles.showImage}
              accessibilityLabel="Apple Music Hits"
            />

            <View style={styles.showInfo}>
              <Text style={styles.showLabel}>
                Apple Music Hits · 1–3 PM
              </Text>

              <Text style={styles.showTitle}>
                Apple Music Hits
              </Text>

              <Text style={styles.showDescription}>
                Songs you know and love.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>

      {/* Shared mini player */}
      <MiniPlayer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  content: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 24,
  },

  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 8,
  },

  stationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 20,
    rowGap: 12,
  },

  stationTile: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  
  stationImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 22,
    marginBottom: 12,
  },

  showScroll: {
    paddingRight: 16,
    alignItems: 'stretch',
  },

  showCard: {
    width: 330,
    marginLeft: 16,
    marginRight: 8,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#202008',
  },


  hitsCard: {
    backgroundColor: '#6d8999',
  },

  showImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },

  showInfo: {
    padding: 16,
    minHeight: 105,
  },

  showLabel: {
    color: '#dddddd',
    fontSize: 12,
    fontWeight: '600',
  },

  showTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 6,
  },

  showDescription: {
    color: '#eeeeee',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 4,
  },
});
