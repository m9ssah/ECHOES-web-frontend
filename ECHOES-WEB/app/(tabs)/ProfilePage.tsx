import React, { useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { USER } from '../data/userData.js' ; 

export default function ProfilePage() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.backgroundCard}>
                {/* Profile Header */}
                <View style={styles.profileHeader}> 
                    <TouchableOpacity style={styles.profilePicture}>
                        <Image source={require('@/assets/images/profilepic.png')}/>
                    </TouchableOpacity>
                    <ThemedText style={styles.profileText}>
                        @{USER.username}
                    </ThemedText>
                </View> 

                {/* Top Artists */}

                {/* Top Songs */}

                {/* Top Albums */}

                {/* Listening History */}

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    }, 
    backgroundCard: {
        backgroundColor: '#322F35',
        borderRadius: 10, 
        position: 'absolute', 
        marginLeft: 20, 
    },
    profileHeader: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly',
        padding: 10, 
    },
    profilePicture: {
        width: 150, 
        height: 150,
        borderRadius: 50, 
    },
    profileText: {
        fontFamily: 'InterMedium',
        fontSize: 36,
        color: 'white', 
    }
}); 