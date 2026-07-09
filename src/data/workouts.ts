export interface Workout {
  id: string;
  title: string;
  duration: string;
  level: string;
  calories: number;
  image?: string;
  exercises?: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets?: string;
  duration?: string;
}

export const workouts: Workout[] = [
  {
    id: '1',
    title: 'Full Body Strength',
    duration: '35 min',
    level: 'Intermediate',
    calories: 320,
    exercises: [
      { id: '1', name: 'Warm-up Stretch', duration: '5 min' },
      { id: '2', name: 'Squats', sets: '3 sets x 12' },
      { id: '3', name: 'Push Ups', sets: '3 sets x 10' },
      { id: '4', name: 'Lunges', sets: '3 sets x 12' },
      { id: '5', name: 'Plank', sets: '3 rounds' },
    ]
  },
  {
    id: '2',
    title: 'Morning Cardio Burn',
    duration: '25 min',
    level: 'Beginner',
    calories: 250,
  },
  {
    id: '3',
    title: 'HIIT Power Session',
    duration: '20 min',
    level: 'Advanced',
    calories: 290,
  },
  {
    id: '4',
    title: 'Yoga Mobility Flow',
    duration: '30 min',
    level: 'Beginner',
    calories: 120,
  },
];