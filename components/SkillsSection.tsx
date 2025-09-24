
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, commonStyles } from '../styles/commonStyles';
import Icon from './Icon';

interface Skill {
  name: string;
  icon: keyof typeof import('@expo/vector-icons').Ionicons.glyphMap;
}

const skills: Skill[] = [
  { name: 'React Native', icon: 'phone-portrait' },
  { name: 'JavaScript', icon: 'logo-javascript' },
  { name: 'TypeScript', icon: 'code-slash' },
  { name: 'React', icon: 'logo-react' },
  { name: 'Node.js', icon: 'logo-nodejs' },
  { name: 'Python', icon: 'logo-python' },
  { name: 'Git', icon: 'git-branch' },
  { name: 'UI/UX Design', icon: 'color-palette' },
];

const SkillsSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <View style={styles.sectionIndicator} />
          <View>
            <Text style={styles.sectionTitle}>Skills & Technologies</Text>
            <Text style={styles.sectionSubtitle}>My technical expertise</Text>
          </View>
        </View>
      </View>

      <View style={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillCard}>
            <View style={styles.skillHeader}>
              <View style={styles.skillIconContainer}>
                <Icon name={skill.icon} size={24} color={colors.primary} />
              </View>
              <Text style={styles.skillName}>{skill.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIndicator: {
    width: 4,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 2,
    marginRight: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  skillsGrid: {
    paddingHorizontal: 20,
    gap: 16,
  },
  skillCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    boxShadow: '0px 4px 6px rgba(255, 255, 255, 0.05)',
    elevation: 2,
  },
  skillHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
  },
});

export default SkillsSection;
