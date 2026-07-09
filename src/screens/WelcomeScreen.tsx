import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';

interface WelcomeScreenProps {
  navigation: any;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/welcome.jpeg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.overlay} />
      
      <View style={styles.content}>
        {/* App Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoRow}>
            <Text style={styles.dumbbell}>🏋️</Text>
            <Text style={styles.gymText}>GYM</Text>
            <Text style={styles.dumbbell}>🏋️</Text>
          </View>
          <Text style={styles.flowText}>FLOW</Text>
        </View>

        {/* Tagline */}
        <Text style={styles.tagline}>
          Train smarter,{'\n'}feel <Text style={styles.stronger}>stronger.</Text>
        </Text>
        
        <Text style={styles.description}>
          A modern fitness app for workouts, progress tracking, and daily gym motivation.
        </Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          {/* Get Started Button */}
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
          
          {/* Secondary Button */}
          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>I already have an account</Text>
          </TouchableOpacity>
        </View>

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dumbbell: {
    fontSize: 35,
    marginHorizontal: 8,
  },
  gymText: {
    fontSize: 44,
    fontWeight: '900',
    color: colors.white,
    letterSpacing: 2,
  },
  flowText: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.primaryGreen,
    letterSpacing: 4,
    marginTop: -5,
  },
  tagline: {
    fontSize: 34,
    color: colors.white,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 42,
  },
  stronger: {
    color: colors.primaryGreen,
  },
  description: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    marginBottom: 60,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: colors.primaryGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 12,
    width: '100%',
    maxWidth: 350,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  arrow: {
    color: colors.white,
    fontSize: 28,
    marginLeft: 10,
    fontWeight: '300',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.4)',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 12,
    width: '100%',
    maxWidth: 350,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  activeDot: {
    backgroundColor: colors.primaryGreen,
    width: 24,
  },
});