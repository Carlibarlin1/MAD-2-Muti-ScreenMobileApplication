import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import MiniPlayer from '@/components/MiniPlayer';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Home</Text>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Recently Played</Text>
        </View>
      </ScrollView>

      <MiniPlayer />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 8,
  },

  content: {
    marginHorizontal: 16,
    marginTop: 22,
  },

  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});