import { SafeAreaView } from 'react-native-safe-area-context';
import MiniPlayer from '@/components/MiniPlayer';
import SongRow from '@/components/SongRow';
import type { ReactNode } from "react";
import { router } from "expo-router";
import { Pressable } from "react-native";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
 
interface CustomTextProps {
  fontSize?: number;
  fontWeight?: TextStyle["fontWeight"];
  color?: string;
  opacity?: number;
  children: ReactNode;
}
 
const CustomText = ({
  fontSize = 16,
  fontWeight = "bold",
  color = "#000",
  opacity = 1,
  children,
}: CustomTextProps) => {
  return (
    <Text
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
        opacity: opacity,
      }}
    >
      {children}
    </Text>
  );
};
interface ButtonProps {
  backgroundColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  image: ImageSourcePropType;
  imageWidth?: number;
  imageHeight?: number;
  alignItems?: ViewStyle["alignItems"];
  justifyContent?: ViewStyle["justifyContent"];
  onPress?: () => void;
}
const CustomButton = ({
  backgroundColor = "#232323",
  width = 35,
  height = 35,
  borderRadius = 16,
  image,
  imageWidth = 13,
  imageHeight = 13,
  alignItems = "center",
  justifyContent = "center",
  onPress,
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole="button"
      accessibilityLabel={onPress ? "Go to Home" : undefined}
      style={({ pressed }) => ({
        backgroundColor,
        width,
        height,
        borderRadius,
        alignItems,
        justifyContent,
        opacity: pressed ? 0.6 : 1,
      })}
    >
      <Image
        source={image}
        style={{
          width: imageWidth,
          height: imageHeight,
          resizeMode: "contain",
        }}
      />
    </Pressable>
  );
};
 
export default function LibraryScreen() {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.screen}>
        <View style={styles.topButtonContainer}>
          <CustomButton
            image={require("../../assets/images/back.png")}
            onPress={() => router.navigate("/(tabs)")}
          />
 
          <View style={styles.rightButtons}>
            <Image
              source={require("../../assets/images/upload.png")}
              style={styles.upload}
            />
 
            <Image
              source={require("../../assets/images/more.png")}
              style={styles.more}
            />
          </View>
        </View>
 
        <View style={styles.albumArtContainer}>
          <Image
            source={require("../../assets/images/album.jpg")}
            style={styles.albumCover}
          />
          <View style={styles.albumText}>
            <CustomText fontSize={17} fontWeight="bold" color="#fff" opacity={1}>
              Halloween After Dark
            </CustomText>
 
            <CustomText
              fontSize={15.5}
              fontWeight="light"
              color="#fff"
              opacity={1}
            >
              Apple Music
            </CustomText>
 
            <CustomText
              fontSize={8}
              fontWeight="normal"
              color="#808080"
              opacity={1}
            >
              Updated 2d ago
            </CustomText>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            image={require("../../assets/images/shuffle.png")}
            width={40}
            height={40}
            borderRadius={20}
            imageHeight={18}
            imageWidth={18}
          />
 
          <View style={styles.playButton}>
            <Image
              source={require("../../assets/images/play.png")}
              style={styles.play}
            />
            <CustomText fontSize={15} fontWeight="semibold" color="#000">
              Play
            </CustomText>
          </View>
 
          <CustomButton image={require("../../assets/images/plus.png")} />
        </View>
        <View style={styles.trackRowContainer}>
          <CustomText fontSize={13} fontWeight={"normal"} color="#808080">
            {"Creepy classic rock and alternative hits for\nspooky shindigs"}
          </CustomText>
 
          <View style={styles.line}></View>
 
          <View style={styles.pixiesContainer}>
            <SongRow
              title="Wave of Mutilation"
              artist="Pixies"
              image={require('../../assets/images/WaveOfMutilationCover.jpg')}
              explicit
                />
          </View>
 
 
          <View style={styles.crampsContainer}>
            <SongRow
              title="Goo Goo Muck"
              artist="The Cramps"
              image={require('../../assets/images/GooGooMuck.jpg')}
              explicit
            />
          </View>
        </View>
      </View>
 
      <MiniPlayer/>
 
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
    screen: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#000",
      paddingTop: 12,
    },
    albumArtContainer: {
      alignItems: "center",
      width: "100%",
    },
    albumCover: {
      width: 200,
      height: 200,
    },
    albumText: {
      paddingTop: 15,
      alignItems: "center",
    },
    trackRowContainer: {
      width: "90%",
      marginTop: 20,
      // flexDirection: "row",
    },
    trackRow: {
      width: "100%",
      paddingVertical: 8,
      borderBottomWidth: 0.5,
      borderBottomColor: "#2a2a2a",
    },
    waveOfMutilationCover: {
      width: 35,
      height: 35,
      marginRight: 10,
    },
    gooGooMuckCover: {
      width: 35,
      height: 35,
      marginRight: 10,
    },
    pixiesContainer: {
      width:"100%",
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: "#2a2a2a",
    },
    crampsContainer: {
      width:"100%",
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: "#2a2a2a",
    },
    line: {
      backgroundColor: "#2a2a2a",
      height: 1,
      width: "100%",
      marginTop: 12,
      marginBottom: 2,
    },
    buttonContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: 250,
      maxWidth: "90%",
      marginTop: 16,
    },
    playButton: {
      flex:1,
      height:40,
      backgroundColor: "#fff",
      borderRadius: 20,
      flexDirection: "row",
      alignItems:"center",
      justifyContent:"center",
      marginHorizontal: 12,
    },
    play: {
      height: 14,
      width: 14,
      resizeMode: "contain",
      marginRight: 8,
    },
    topButtonContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "90%",
      marginBottom: 20,
    },
    rightButtons: {
      backgroundColor: "#232323",
      width: 76,
      height: 35,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      borderRadius: 20,
    },
    upload: {
      height: 18,
      width: 18,
      resizeMode: "contain",
    },
    more: {
      height: 18,
      width: 18,
      resizeMode: "contain",
    },
});
