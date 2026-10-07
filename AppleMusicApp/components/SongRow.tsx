import { StyleSheet, Text, View, Image } from 'react-native';

type SongRowProps = {
    title: string;
    artist: string;
    image: any;
    explicit?: boolean;
};

export default function SongRow({
    title, 
    artist, 
    image,
    explicit,
}: SongRowProps) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />

            <View style={styles.info}>
                <View style={styles.titleRow}>
                <Text style={styles.title}>{title}</Text>

                    {explicit && (
                        <View style={styles.explicitBadge}>
                            <Text style={styles.explicitText}>E</Text>
                        </View>
                    )}
                    </View>

                    <Text style={styles.artist}>{artist}</Text>
                </View>

            <Text style={styles.more}>•••</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },

    image: {
        width: 55,
        height: 55,
        borderRadius: 5,
    },

    info: {
        flex: 1,
        marginLeft: 12,
    },

    title: {
        color: '#ffffff',
        fontSize: 16,
    },

    artist: {
        color: '#8e8e93',
        fontSize: 14,
        marginTop: 3,
    },

    more: {
        color: '#8e8e93',
        fontSize: 16,
        marginLeft: 10,
    },

    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    explicitBadge: {
        backgroundColor: '#8e8e93',
        width: 14,
        height: 14,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },

    explicitText: {
        color:'#000000',
        fontSize: 9,
        fontWeight: 'bold',
    }
});