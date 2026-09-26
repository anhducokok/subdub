import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * React Native can report 'unspecified'; treat it like no preference so callers can fall back with `??`.
 */
export function useColorScheme() {
  const colorScheme = useRNColorScheme();
  return colorScheme === 'unspecified' ? null : colorScheme;
}
