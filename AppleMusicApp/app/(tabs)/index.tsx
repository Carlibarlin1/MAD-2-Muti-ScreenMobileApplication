
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';

import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import MiniPlayer from '@/components/MiniPlayer';

// Album and playlist images
const halloween = require('../../assets/images/halloween-after-dark.png');
const habibti = require('../../assets/images/habibti.jpg');
const excavator = require('../../assets/images/excavator.jpg');
const coldShoulder = require('../../assets/images/cold-shoulder.jpg');
const halfThePlot = require('../../assets/images/half-the-plot.jpg');
const appleRadio = require('../../assets/images/apple-radio.png.png');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Home heading */}
        <Text style={styles.title}>Home</Text>

        {/* TOP PICKS FOR YOU */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Top Picks for You
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          >
            {/* Halloween After Dark */}
            <Link href="/library" asChild>
              <Pressable style={styles.topPickCard}>
                <Image
                  source={halloween}
                  style={styles.topPickImage}
                />

                <Text style={styles.albumSubtitle}>
                  We Recommend
                </Text>

                <Text style={styles.albumTitle}>
                  Halloween After Dark
                </Text>

                <Text style={styles.albumArtist}>
                  Get into the Halloween spirit with Apple Music.
                </Text>
              </Pressable>
            </Link>

            {/* HABIBTI */}
              <Pressable style={styles.topPickCard}>
                <Image
                  source={habibti}
                  style={styles.topPickImage}
                />

                <Text style={styles.albumSubtitle}>
                  Trending With Do...
                </Text>

                <Text style={styles.albumTitle}>
                  HABIBTI (FOM...)
                </Text>

                <Text style={styles.albumArtist}>
                  Drake
                </Text>
              </Pressable>

            {/* Cold Shoulder */}
              <Pressable style={styles.topPickCard}>
                <Image
                  source={coldShoulder}
                  style={styles.topPickImage}
                />

                <Text style={styles.albumSubtitle}>
                  Recommended for You
                </Text>

                <Text style={styles.albumTitle}>
                  Cold Shoulder
                </Text>

                <Text style={styles.albumArtist}>
                  Apple Music
                </Text>
              </Pressable>
          </ScrollView>
        </View>

        {/* RECENTLY PLAYED */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Recently Played ›
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          >
            {/* Excavator */}
              <Pressable style={styles.recentCard}>
                <Image
                  source={excavator}
                  style={styles.recentImage}
                />

                <Text
                  style={styles.recentTitle}
                  numberOfLines={1}
                >
                  Excavator
                </Text>

                <Text
                  style={styles.recentArtist}
                  numberOfLines={1}
                >
                  Don Toliver
                </Text>
              </Pressable>

            {/* Apple Radio */}
              <Pressable style={styles.recentCard}>
                <Image
                  source={appleRadio}
                  style={styles.recentImage}
                />

                <Text
                  style={styles.recentTitle}
                  numberOfLines={1}
                >
                  Recently Played
                </Text>

                <Text style={styles.recentArtist}>
                  Apple Music
                </Text>
              </Pressable>

            {/* HABIBTI */}
              <Pressable style={styles.recentCard}>
                <Image
                  source={habibti}
                  style={styles.recentImage}
                />

                <Text
                  style={styles.recentTitle}
                  numberOfLines={1}
                >
                  HABIBTI
                </Text>

                <Text style={styles.recentArtist}>
                  Drake
                </Text>
              </Pressable>

            {/* Half the Plot */}
              <Pressable style={styles.recentCard}>
                <Image
                  source={halfThePlot}
                  style={styles.recentImage}
                />

                <Text
                  style={styles.recentTitle}
                  numberOfLines={1}
                >
                  Half the Plot
                </Text>

                <Text style={styles.recentArtist}>
                  Recently Played
                </Text>
              </Pressable>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Existing MiniPlayer */}
      <MiniPlayer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  scrollContent: {
    paddingBottom: 35,
  },

  title: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 22,
  },

  section: {
    marginBottom: 30,
  },

  sectionTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 16,
  },

  horizontalList: {
    paddingHorizontal: 16,
    gap: 14,
  },

  topPickCard: {
    width: 250,
  },

  topPickImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 12,
  },

  albumSubtitle: {
    color: '#999999',
    fontSize: 13,
    marginBottom: 4,
  },

  albumTitle: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 3,
  },

  albumArtist: {
    color: '#999999',
    fontSize: 15,
  },

  recentCard: {
    width: 155,
  },

  recentImage: {
    width: 155,
    height: 155,
    borderRadius: 9,
    marginBottom: 8,
  },

  recentTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
  },

  recentArtist: {
    color: '#999999',
    fontSize: 13,
    marginTop: 3,
  },
});
