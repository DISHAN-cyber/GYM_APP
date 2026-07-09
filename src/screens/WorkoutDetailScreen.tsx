import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../components/AppButton';
import ScreenHeader from '../components/ScreenHeader';
import { workouts } from '../data/workouts';
import { colors } from '../theme/colors';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'WorkoutDetail'>;

export default function WorkoutDetailScreen({ route, navigation }: Props) {
  const workout = workouts.find((item) => item.id === route.params.workoutId);

  if (!workout) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScreenHeader title={workout.title} subtitle={workout.description} accent={`${workout.duration} • ${workout.calories}`} />
        <View style={styles.card}>
          <Text style={styles.label}>Focus</Text>
          <Text style={styles.value}>{workout.focus}</Text>
          <Text style={styles.label}>Intensity</Text>
          <Text style={styles.value}>{workout.intensity}</Text>
          <Text style={styles.label}>Equipment</Text>
          <Text style={styles.value}>{workout.equipment}</Text>
        </View>
        <AppButton title="Start Workout" onPress={() => navigation.goBack()} fullWidth />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 8,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '700',
    marginTop: 2,
  },
});
