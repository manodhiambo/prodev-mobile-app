import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants/index';

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={BACKGROUNDIMAGE} 
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Find your perfect place to stay
          </Text>
          
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Discover amazing places at exclusive deals. 
              Eat, Shop, Visit interesting places around the world.
            </Text>
          </View>
        </View>
        
        <View style={{ position: 'absolute', bottom: 60, left: 0, right: 0 }}>
          <View style={styles.buttonGroup}>
            <Link href="/join" asChild>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Text style={styles.buttonPrimaryText}>Join now</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href="/signin" asChild>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Sign in</Text>
              </TouchableOpacity>
            </Link>
          </View>
          
          <View style={styles.buttonGroupSubText}>
            <Text style={styles.buttonSecondaryText}>Already have an account?</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
