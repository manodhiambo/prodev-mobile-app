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
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants/index';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Navigate to home tabs after successful sign in
    router.replace('/(home)');
  };

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
          <Text style={styles.titleText}>Sign in</Text>
          <Text style={styles.subText}>
            Welcome back! Please enter your details.
          </Text>
        </View>

        <View style={styles.formGroup}>
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
                placeholder="Enter your password"
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
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign in</Text>
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
          <Text style={styles.signupTitleText}>Don't have an account? </Text>
          <Link href="/join">
            <Text style={styles.signupSubTitleText}>Join now</Text>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
