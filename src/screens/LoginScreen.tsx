import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Validation Error', 'Please enter a valid email');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.replace('Home');
    }, 1000);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color={colors.white} />
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Login to continue your fitness journey.</Text>
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image 
          source={require('../../assets/login.png')} 
          style={styles.illustration} 
          resizeMode="contain"
        />
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email address</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="alex@email.com"
              placeholderTextColor="#6B7280"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Ionicons name="mail-outline" size={20} color="#6B7280" />
          </View>
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#6B7280"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Ionicons name="eye-off-outline" size={20} color="#6B7280" />
          </View>
        </View>

        {/* Options */}
        <View style={styles.optionsRow}>
          <TouchableOpacity 
            style={styles.rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
              {rememberMe && (
                <Ionicons name="checkmark" size={14} color={colors.white} />
              )}
            </View>
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleLogin}
          disabled={loading}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>
            {loading ? 'Logging in...' : 'Login'}
          </Text>
          <Ionicons name="chevron-forward" size={24} color={colors.white} />
        </TouchableOpacity>

        {/* Task Note */}
        <View style={styles.noteContainer}>
          <View style={styles.noteHeader}>
            <Ionicons name="information-circle" size={18} color={colors.primaryGreen} />
            <Text style={styles.noteTitle}>Task note</Text>
          </View>
          <Text style={styles.noteText}>
            This login can be mock only. Validate empty email/password fields before navigating.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
  content: {
    padding: 24,
    paddingTop: 50,
    paddingBottom: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#9CA3AF',
    lineHeight: 22,
  },
  illustrationContainer: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  form: {
    gap: 18,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '600',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 14,
    paddingHorizontal: 16,
    height: 54,
    borderWidth: 1,
    borderColor: '#374151',
  },
  input: {
    flex: 1,
    color: colors.white,
    fontSize: 16,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4B5563',
  },
  checkboxChecked: {
    backgroundColor: colors.primaryGreen,
    borderColor: colors.primaryGreen,
  },
  rememberText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
  forgotPassword: {
    color: colors.primaryGreen,
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: colors.primaryGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 14,
    marginTop: 8,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
  },
  noteContainer: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    padding: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#374151',
  },
  noteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  noteTitle: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
  noteText: {
    color: '#9CA3AF',
    fontSize: 12,
    lineHeight: 18,
  },
});