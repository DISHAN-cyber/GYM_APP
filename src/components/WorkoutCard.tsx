import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';
import type { Workout } from '../data/workouts';

type WorkoutCardProps = {
  workout: Workout;
  onPress: () => void;
};

export default function WorkoutCard({ workout, onPress }: WorkoutCardProps) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onPress}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{workout.title}</Text>
        <Text style={styles.badge}>{workout.intensity}</Text>
      </View>
      <Text style={styles.description}>{workout.description}</Text>
      <View style={styles.metaRow}>
        <Text style={styles.meta}>{workout.duration}</Text>
        <Text style={styles.meta}>{workout.calories}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  badge: {
    backgroundColor: colors.primarySoft,
    color: colors.primary,
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: '700',
  },
  description: {
    color: colors.muted,
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meta: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 13,
  },
});
