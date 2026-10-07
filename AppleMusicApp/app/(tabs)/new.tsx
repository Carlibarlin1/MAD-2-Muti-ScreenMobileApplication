import { 
    StyleSheet,
    Text,
    View, 
    Image, 
    ScrollView,
    } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SongRow from '@/components/SongRow';
import MiniPlayer from "@/components/MiniPlayer";

export default function NewScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top']} >
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>New</Text>

            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.featuredScroll}
            >
                <View style={styles.featuredCard}>
                    <Text style={styles.featuredLabel}>NEW DELUXE EDITION</Text>

                    <Text style={styles.featuredTitle}>HABIBTI (FOMO)</Text>

                    <Text style={styles.featuredArtist}>Drake</Text>

                    <Image
                        source={require('../../assets/images/habibti.jpg')}
                        style={styles.featuredImage}
                    />

                </View>
                <View style={styles.featuredCard}>
                    <Text style={styles.featuredLabel}>HOT</Text>

                    <Text style={styles.featuredTitle}>DOPAMINE</Text>

                    <Text style={styles.featuredArtist}>Lil Tecca</Text>

                    <Image
                        source={require('../../assets/images/half-the-plot.jpg')}
                        style={styles.featuredImage}
                    />
                </View>
            </ScrollView>

            <View style={styles.songsSection}>
                <Text style={styles.sectionTitle}>Best New Songs ›</Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                <View style={styles.songColumn}>
                <SongRow
                    title="Rusty Intro"
                    artist="Drake"
                    image={require('../../assets/images/rusty-intro.jpg')}
                    explicit
                />

                <SongRow
                    title="Cold Shoulder"
                    artist="Drake, Don Toliver & Yebba"
                    image={require('../../assets/images/cold-shoulder.jpg')}
                    explicit
                />

                <SongRow
                    title="BA"
                    artist="Quavo & Future"
                    image={require('../../assets/images/ba.jpg')}
                    explicit
                />

                <SongRow
                    title="Solar Eclipse"
                    artist="Drake & Don Toliver"
                    image={require('../../assets/images/solar-eclipse.jpg')}
                    explicit
                />
            </View>

            {/* Second column */}
            <View style={styles.songColumn}>
                <SongRow
                    title="120"
                    artist="Lil Tecca"
                    image={require('../../assets/images/120.jpg')}
                    explicit
                />

                <SongRow
                    title="Quebec"
                    artist="Drake"
                    image={require('../../assets/images/cold-shoulder.jpg')}
                    explicit
                />

                <SongRow
                    title="Hit-A-Lik"
                    artist="Quavo"
                    image={require('../../assets/images/ba.jpg')}
                    explicit
                />

                <SongRow
                    title="Half The Plot"
                    artist="Lil Tecca"
                    image={require('../../assets/images/half-the-plot.jpg')}
                    explicit
                />
            </View>
            </ScrollView>
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

    featuredScroll: {

        marginTop: 20,
    },

    featuredCard: {
        width: 330,
        marginLeft: 16,
        marginRight: 8,
    },

    featuredLabel: {
        color: '#8e8e93',
        fontSize: 12,
        fontWeight: '600',
    },

    featuredTitle: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: '600',
        marginTop: 4,
    },

    featuredArtist: {
        color: '#8e8e93',
        fontSize: 16,
        marginTop: 2,
        marginBottom: 10,
    },

    featuredImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },

    songsSection: {
        marginHorizontal: 16,
        marginTop: 22,
    },

    sectionTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },

    songColumn: {
        width: 350,
        marginRight: 16,
    }
});