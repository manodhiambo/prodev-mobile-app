import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  Pressable 
} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants/index';

export default function Join() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iconsection}>
          <Link href="/" asChild>
            <Pressable>
              <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
          </Link>
          <Image source={HEROLOGOGREEN} />
          <View />
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Join now</Text>
          <Text style={styles.subText}>
            Create an account to get started with us.
          </Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Full Name</Text>
            <TextInput 
              style={styles.formControl}
              placeholder="Enter your full name"
              placeholderTextColor="#C2C2C2"
            />
          </View>

          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput 
              style={styles.formControl}
              placeholder="Enter your email"
              placeholderTextColor="#C2C2C2"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput 
                style={styles.passwordControl}
                placeholder="Create a password"
                placeholderTextColor="#C2C2C2"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons 
                  name={showPassword ? "eye-off" : "eye"} 
                  size={24} 
                  color="#7B7B7B" 
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.formLabel}>Confirm Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput 
                style={styles.passwordControl}
                placeholder="Confirm your password"
                placeholderTextColor="#C2C2C2"
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Ionicons 
                  name={showConfirmPassword ? "eye-off" : "eye"} 
                  size={24} 
                  color="#7B7B7B" 
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <View style={styles.dividerGroup}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.secondaryButtonGroup}>
            <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E5E5E5' }]}>
              <Image source={GOOGLELOGO} />
              <Text style={styles.secondaryButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E5E5E5' }]}>
              <Image source={FACEBOOKLOGO} />
              <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account? </Text>
          <Link href="/signin">
            <Text style={styles.signupSubTitleText}>Sign in</Text>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
