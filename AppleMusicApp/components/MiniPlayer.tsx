import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MiniPlayer() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/excavator.jpg')}
                style={styles.image}
            />

            <View style={styles.songInfo}>
                <Text style={styles.song}>
                    Excavator
                </Text>

                <Text style={styles.artist}>
                    Don Toliver
                </Text>
            </View>

            <Ionicons name="play" size={26} color="#ffffff" />
            
            <Ionicons
                name="play-skip-forward"
                size={26}
                color="#ffffff"
                style={styles.nextButton}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 64,
        backgroundColor: '#1c1c1e',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    image: {
        width: 48,
        height: 48,
        borderRadius: 5,
    },

    songInfo: {
        flex: 1,
        marginLeft: 10,
    },

    song: {
        color: '#ffffff',
        fontSize: 15,
    },

    artist: {
        color: '#8e8e93',
        fontSize: 14,
        marginTop: 2,
    },

    nextButton: {
        marginLeft: 20,
        marginRight: 6,
    },
});