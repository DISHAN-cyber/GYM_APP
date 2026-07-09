import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  accent?: string;
};

export default function ScreenHeader({ title, subtitle, accent }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {accent ? <Text style={styles.accent}>{accent}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.muted,
  },
  accent: {
    marginTop: 6,
    fontSize: 14,
    color: colors.primary,
    fontWeight: '700',
  },
});
