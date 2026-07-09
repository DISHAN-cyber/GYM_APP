import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

interface WorkoutListScreenProps {
  navigation: any;
}

const workouts = [
  { id: '1', title: 'Full Body Strength', duration: '35 min', level: 'Intermediate', calories: '320 kcal', image: require('../../assets/workout1.jpeg') },
  { id: '2', title: 'Morning Cardio Burn', duration: '25 min', level: 'Beginner', calories: '250 kcal', image: require('../../assets/workout2.jpeg') },
  { id: '3', title: 'HIIT Power Session', duration: '20 min', level: 'Advanced', calories: '290 kcal', image: require('../../assets/workout3.jpeg') },
  { id: '4', title: 'Yoga Mobility Flow', duration: '30 min', level: 'Beginner', calories: '120 kcal', image: require('../../assets/workout4.jpeg') },
  { id: '5', title: 'Core Builder', duration: '18 min', level: 'Beginner', calories: '180 kcal', image: require('../../assets/workout5.jpeg') },
];

export const WorkoutListScreen: React.FC<WorkoutListScreenProps> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'Strength', 'Cardio', 'Yoga'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Workouts</Text>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#9CA3AF" />
        <TextInput style={styles.searchInput} placeholder="Search workouts" placeholderTextColor="#9CA3AF" value={searchQuery} onChangeText={setSearchQuery} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity key={category} style={[styles.categoryTab, selectedCategory === category && styles.categoryTabActive]} onPress={() => setSelectedCategory(category)}>
            <Text style={[styles.categoryText, selectedCategory === category && styles.categoryTextActive]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.workoutsList}>
        {workouts.map((workout) => (
          <TouchableOpacity key={workout.id} style={styles.workoutCard} onPress={() => navigation.navigate('WorkoutDetail')}>
            <Image source={workout.image} style={styles.workoutImage} />
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutTitle}>{workout.title}</Text>
              <Text style={styles.workoutDetails}>{workout.duration} • {workout.level}</Text>
            </View>
            <View style={styles.caloriesContainer}>
              <Text style={styles.calories}>{workout.calories}</Text>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navItemActive}><Ionicons name="barbell" size={24} color={colors.primaryGreen} /></View>
          <Text style={[styles.navText, { color: colors.primaryGreen }]}>Workouts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Progress')}>
          <Ionicons name="stats-chart-outline" size={24} color="#9CA3AF" />
          <Text style={styles.navText}>Progress</Text>
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
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: { paddingHorizontal: 20, paddingTop: 60, paddingBottom: 20 },
  headerTitle: { fontSize: 28, fontWeight: '700', color: colors.primaryDark },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, marginHorizontal: 20, paddingHorizontal: 16, height: 48, borderRadius: 12, gap: 10, marginBottom: 16 },
  searchInput: { flex: 1, fontSize: 16, color: colors.primaryDark },
  categoriesContainer: { paddingHorizontal: 20, marginBottom: 16 },
  categoryTab: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, backgroundColor: colors.white, marginRight: 10 },
  categoryTabActive: { backgroundColor: colors.primaryGreen },
  categoryText: { fontSize: 14, fontWeight: '600', color: '#6B7280' },
  categoryTextActive: { color: colors.white },
  workoutsList: { flex: 1, paddingHorizontal: 20 },
  workoutCard: { flexDirection: 'row', backgroundColor: colors.white, borderRadius: 16, padding: 12, marginBottom: 12, alignItems: 'center' },
  workoutImage: { width: 70, height: 70, borderRadius: 12 },
  workoutInfo: { flex: 1, marginLeft: 12 },
  workoutTitle: { fontSize: 16, fontWeight: '600', color: colors.primaryDark, marginBottom: 4 },
  workoutDetails: { fontSize: 13, color: '#9CA3AF' },
  caloriesContainer: { alignItems: 'center', gap: 4 },
  calories: { fontSize: 14, fontWeight: '600', color: '#F97316' },
  bottomNav: { flexDirection: 'row', backgroundColor: colors.white, paddingVertical: 8, paddingBottom: 16, borderTopWidth: 1, borderTopColor: '#E5E7EB' },
  navItem: { flex: 1, alignItems: 'center', gap: 4 },
  navItemActive: { backgroundColor: '#D1FAE5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  navText: { fontSize: 11, color: '#9CA3AF', fontWeight: '500' },
});