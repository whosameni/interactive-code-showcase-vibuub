
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const colors = {
  primary: '#3b82f6',      // Modern blue
  secondary: '#1e40af',    // Darker blue
  accent: '#60a5fa',       // Light blue accent
  background: '#000000',   // Black background
  backgroundAlt: '#111111', // Dark gray background
  text: '#ffffff',         // White text
  textSecondary: '#a1a1aa', // Light gray text
  grey: '#374151',         // Dark gray
  card: '#1a1a1a',         // Dark cards
  border: '#374151',       // Dark border
  success: '#10b981',      // Green
  warning: '#f59e0b',      // Orange
  error: '#ef4444',        // Red
};

export const buttonStyles = StyleSheet.create({
  instructionsButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  backButton: {
    backgroundColor: colors.backgroundAlt,
    alignSelf: 'center',
    width: '100%',
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'center',
  },
  textSecondary: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    lineHeight: 20,
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    width: '100%',
    boxShadow: '0px 4px 6px rgba(255, 255, 255, 0.05)',
    elevation: 2,
  },
  projectCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    marginVertical: 12,
    width: '100%',
    boxShadow: '0px 8px 25px rgba(255, 255, 255, 0.08)',
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
