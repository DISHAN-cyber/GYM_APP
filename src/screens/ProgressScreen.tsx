import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface ProgressScreenProps {
  navigation: any;
}

const chartData = [
  { day: 'M', value: 40 },
  { day: 'T', value: 70 },
  { day: 'W', value: 50 },
  { day: 'T', value: 90 },
  { day: 'F', value: 80 },
  { day: 'S', value: 60, isWeekend: true },
  { day: 'S', value: 100, isWeekend: true },
];

export const ProgressScreen: React.FC<ProgressScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Progress</Text>
          <TouchableOpacity>
            <Ionicons name="calendar-outline" size={24} color={colors.primaryDark} />
          </TouchableOpacity>
        </View>

        {/* Weekly Goal Card */}
        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <View>
              <Text style={styles.goalTitle}>Weekly Goal</Text>
              <Text style={styles.goalSubtitle}>4 of 5 workouts completed</Text>
            </View>
            <View style={styles.shieldIcon}>
              <Ionicons name="shield-checkmark" size={28} color={colors.primaryGreen} />
              <Ionicons name="star" size={12} color="#F97316" style={styles.starIcon} />
            </View>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressBarBg}>
              <View style={styles.progressBarFill} />
            </View>
            <Text style={styles.progressText}>80%</Text>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stats</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={[styles.statValue, { color: colors.primaryGreen }]}>80%</Text>
              <View style={styles.statRow}>
                <Ionicons name="refresh-circle-outline" size={18} color={colors.primaryGreen} />
                <Text style={styles.statLabel}>Goal</Text>
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={[styles.statValue, { color: '#F97316' }]}>7</Text>
              <View style={styles.statRow}>
                <Ionicons name="flame-outline" size={18} color="#F97316" />
                <Text style={styles.statLabel}>Day Streak</Text>
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={[styles.statValue, { color: colors.primaryGreen }]}>145</Text>
              <View style={styles.statRow}>
                <Ionicons name="time-outline" size={18} color={colors.primaryGreen} />
                <Text style={styles.statLabel}>Minutes</Text>
              </View>
            </View>
            <View style={styles.statCard}>
              <Text style={[styles.statValue, { color: '#F97316' }]}>980</Text>
              <View style={styles.statRow}>
                <Ionicons name="flame-outline" size={18} color="#F97316" />
                <Text style={styles.statLabel}>Calories</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Activity Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activity</Text>
          <View style={styles.chartCard}>
            <View style={styles.chartContainer}>
              <View style={styles.yAxis}>
                <Text style={styles.yAxisText}>100%</Text>
                <Text style={styles.yAxisText}>50%</Text>
                <Text style={styles.yAxisText}>0%</Text>
              </View>
              <View style={styles.barsContainer}>
                {chartData.map((item, index) => (
                  <View key={index} style={styles.barWrapper}>
                    <View 
                      style={[
                        styles.bar, 
                        { height: item.value * 1.2 },
                        item.isWeekend ? { backgroundColor: '#F97316' } : { backgroundColor: colors.primaryGreen }
                      ]} 
                    />
                    <Text style={styles.dayText}>{item.day}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Workouts')}>
          <Ionicons name="barbell-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Workouts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="stats-chart" size={24} color={colors.primaryGreen} />
          <Text style={[styles.navText, { color: colors.primaryGreen }]}>Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  goalCard: {
    backgroundColor: colors.primaryDark,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 4,
  },
  goalSubtitle: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  shieldIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starIcon: {
    position: 'absolute',
    top: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBarBg: {
    flex: 1,
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '80%',
    height: '100%',
    backgroundColor: colors.primaryGreen,
    borderRadius: 5,
  },
  progressText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primaryDark,
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '47%',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statLabel: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  chartCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
  },
  chartContainer: {
    flexDirection: 'row',
    height: 150,
  },
  yAxis: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 12,
    paddingBottom: 20,
  },
  yAxisText: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  barsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
  barWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  bar: {
    width: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  dayText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  navText: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '500',
  },
});