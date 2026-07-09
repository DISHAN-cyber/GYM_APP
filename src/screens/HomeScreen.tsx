import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Alex 👋</Text>
            <Text style={styles.title}>Today's Plan</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={24} color={colors.primaryDark} />
            <View style={styles.badge} />
          </TouchableOpacity>
        </View>

        {/* Workout Card */}
        <View style={styles.workoutCard}>
          {/* Background Image */}
          <Image 
            source={require('../../assets/home-dashboard.png')} 
            style={styles.workoutImage}
            resizeMode="cover"
          />
          
          {/* Dark Overlay */}
          <View style={styles.overlay} />
          
          {/* Content Container */}
          <View style={styles.cardContent}>
            {/* Top Section */}
            <View>
              <Text style={styles.workoutTitle}>Full Body Strength</Text>
              <Text style={styles.workoutDetails}>35 min • Intermediate • 320 kcal</Text>
            </View>
            
            {/* Orange Bar Chart */}
            <View style={styles.chartContainer}>
              <View style={[styles.bar, styles.bar1]} />
              <View style={[styles.bar, styles.bar2]} />
              <View style={[styles.bar, styles.bar3]} />
              <View style={[styles.bar, styles.bar4]} />
            </View>
            
            {/* Start Button */}
            <TouchableOpacity 
              style={styles.startButton}
              onPress={() => navigation.navigate('WorkoutDetail')}
            >
              <Text style={styles.startButtonText}>Start Workout</Text>
              <View style={styles.playButton}>
                <Ionicons name="play" size={16} color={colors.primaryGreen} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Weekly Summary */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Weekly Summary</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Ionicons name="heart" size={24} color={colors.primaryGreen} />
              <Text style={styles.statValue}>4</Text>
              <Text style={styles.statLabel}>Workouts</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="time" size={24} color={colors.primaryGreen} />
              <Text style={styles.statValue}>145</Text>
              <Text style={styles.statLabel}>Minutes</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="flame" size={24} color="#F97316" />
              <Text style={styles.statValue}>980</Text>
              <Text style={styles.statLabel}>Kcal</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <TouchableOpacity 
            style={styles.actionCard}
            onPress={() => navigation.navigate('Workouts')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#D1FAE5' }]}>
              <Ionicons name="barbell" size={20} color={colors.primaryGreen} />
            </View>
            <View style={styles.actionInfo}>
              <Text style={styles.actionTitle}>Workouts</Text>
              <Text style={styles.actionSubtitle}>Browse plans</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionCard}
            onPress={() => navigation.navigate('Progress')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#FFEDD5' }]}>
              <Ionicons name="stats-chart" size={20} color="#F97316" />
            </View>
            <View style={styles.actionInfo}>
              <Text style={styles.actionTitle}>Progress</Text>
              <Text style={styles.actionSubtitle}>View stats</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionCard}
            onPress={() => navigation.navigate('Profile')}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#E0E7FF' }]}>
              <Ionicons name="person" size={20} color="#6366F1" />
            </View>
            <View style={styles.actionInfo}>
              <Text style={styles.actionTitle}>Profile</Text>
              <Text style={styles.actionSubtitle}>Manage account</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home" size={24} color={colors.primaryGreen} />
          <Text style={[styles.navText, { color: colors.primaryGreen }]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Workouts')}
        >
          <Ionicons name="barbell-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Workouts</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Progress')}
        >
          <Ionicons name="stats-chart-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Progress</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  notificationBtn: {
    position: 'relative',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primaryGreen,
  },
  workoutCard: {
    backgroundColor: colors.primaryDark,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 20,
    height: 260,
    position: 'relative',
  },
  workoutImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  cardContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    position: 'relative',
  },
  workoutTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 6,
  },
  workoutDetails: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 12,
  },
  chartContainer: {
    position: 'absolute',
    right: 20,
    top: '30%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
  },
  bar: {
    width: 6,
    backgroundColor: '#F97316',
    borderRadius: 3,
  },
  bar1: { height: 40 },
  bar2: { height: 60 },
  bar3: { height: 80 },
  bar4: { height: 100 },
  startButton: {
    backgroundColor: colors.primaryGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
  },
  startButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
  playButton: {
    backgroundColor: colors.white,
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  seeAll: {
    color: colors.primaryGreen,
    fontSize: 13,
    fontWeight: '600',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primaryDark,
    marginTop: 6,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 11,
    color: '#6B7280',
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  actionInfo: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primaryDark,
    marginBottom: 2,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    gap: 4,
  },
  navText: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '500',
  },
});