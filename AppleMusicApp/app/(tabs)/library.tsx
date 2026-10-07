import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MiniPlayer from '@/components/MiniPlayer';

export default function LibraryScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>

      <View style={styles.content}>
        <Text style={styles.title}>Library</Text>
      </View>

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

  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 8,
  },
});