import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface WorkoutDetailScreenProps {
  navigation: any;
}

const exercises = [
  { id: 1, name: 'Warm-up Stretch', duration: '5 min', image: require('../../assets/workout1.jpeg') },
  { id: 2, name: 'Squats', duration: '3 sets × 12', image: require('../../assets/workout2.jpeg') },
  { id: 3, name: 'Push Ups', duration: '3 sets × 10', image: require('../../assets/workout3.jpeg') },
  { id: 4, name: 'Lunges', duration: '3 sets × 12', image: require('../../assets/workout4.jpeg') },
  { id: 5, name: 'Plank', duration: '3 rounds', image: require('../../assets/workout5.jpeg') },
];

export const WorkoutDetailScreen: React.FC<WorkoutDetailScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Image Section */}
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/welcome.jpeg')} 
            style={styles.headerImage}
            resizeMode="cover"
          />
          <View style={styles.imageOverlay} />
          
          {/* Top Icons */}
          <View style={styles.topIcons}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
              <Ionicons name="arrow-back" size={24} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="heart-outline" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>

          {/* Play Button */}
          <TouchableOpacity style={styles.playButton}>
            <Ionicons name="play" size={28} color={colors.white} />
          </TouchableOpacity>

          {/* Title & Stats */}
          <View style={styles.headerContent}>
            <Text style={styles.workoutTitle}>Full Body Strength</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Ionicons name="time-outline" size={14} color={colors.primaryGreen} />
                <Text style={styles.statText}>35 min</Text>
              </View>
              <Text style={styles.statDot}>•</Text>
              <Text style={styles.statText}>Intermediate</Text>
              <Text style={styles.statDot}>•</Text>
              <View style={styles.statItem}>
                <Ionicons name="flame-outline" size={14} color={colors.primaryGreen} />
                <Text style={styles.statText}>320 kcal</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Exercises Card */}
        <View style={styles.exercisesCard}>
          <Text style={styles.exercisesTitle}>Exercises</Text>
          
          {exercises.map((exercise) => (
            <View key={exercise.id} style={styles.exerciseRow}>
              <View style={styles.exerciseNumber}>
                <Text style={styles.exerciseNumberText}>{exercise.id}</Text>
              </View>
              <View style={styles.exerciseInfo}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseDuration}>{exercise.duration}</Text>
              </View>
              <Image source={exercise.image} style={styles.exerciseImage} />
              <TouchableOpacity style={styles.menuBtn}>
                <Ionicons name="ellipsis-vertical" size={20} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Mark as Completed Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.completeButton}>
          <Text style={styles.completeButtonText}>Mark as Completed</Text>
          <View style={styles.checkIcon}>
            <Ionicons name="checkmark" size={20} color={colors.primaryGreen} />
          </View>
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
  imageContainer: {
    height: 320,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  topIcons: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primaryGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  workoutTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '500',
  },
  statDot: {
    color: colors.white,
    fontSize: 14,
  },
  exercisesCard: {
    backgroundColor: colors.white,
    borderRadius: 24,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
    minHeight: 400,
  },
  exercisesTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primaryDark,
    marginBottom: 20,
  },
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  exerciseNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primaryGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  exerciseNumberText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primaryDark,
    marginBottom: 2,
  },
  exerciseDuration: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  exerciseImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 8,
  },
  menuBtn: {
    padding: 4,
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 30,
  },
  completeButton: {
    backgroundColor: colors.primaryGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 14,
    gap: 10,
  },
  completeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  checkIcon: {
    backgroundColor: colors.white,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});