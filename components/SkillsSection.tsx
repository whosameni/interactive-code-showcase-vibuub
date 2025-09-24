
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, commonStyles } from '../styles/commonStyles';
import Icon from './Icon';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: keyof typeof import('@expo/vector-icons').Ionicons.glyphMap;
}

const skills: Skill[] = [
  { name: 'React Native', level: 'Advanced', icon: 'phone-portrait' },
  { name: 'JavaScript', level: 'Advanced', icon: 'logo-javascript' },
  { name: 'TypeScript', level: 'Intermediate', icon: 'code-slash' },
  { name: 'React', level: 'Advanced', icon: 'logo-react' },
  { name: 'Node.js', level: 'Intermediate', icon: 'logo-nodejs' },
  { name: 'Python', level: 'Intermediate', icon: 'logo-python' },
  { name: 'Git', level: 'Advanced', icon: 'git-branch' },
  { name: 'UI/UX Design', level: 'Intermediate', icon: 'color-palette' },
];

const SkillsSection: React.FC = () => {
  const getLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'Expert':
        return colors.success;
      case 'Advanced':
        return colors.primary;
      case 'Intermediate':
        return colors.warning;
      case 'Beginner':
        return colors.textSecondary;
      default:
        return colors.textSecondary;
    }
  };

  const getLevelWidth = (level: Skill['level']) => {
    switch (level) {
      case 'Expert':
        return '100%';
      case 'Advanced':
        return '80%';
      case 'Intermediate':
        return '60%';
      case 'Beginner':
        return '40%';
      default:
        return '40%';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <View style={styles.sectionIndicator} />
          <View>
            <Text style={styles.sectionTitle}>Skills & Technologies</Text>
            <Text style={styles.sectionSubtitle}>My technical expertise and proficiency levels</Text>
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
              <View style={styles.skillInfo}>
                <Text style={styles.skillName}>{skill.name}</Text>
                <Text style={[styles.skillLevel, { color: getLevelColor(skill.level) }]}>
                  {skill.level}
                </Text>
              </View>
            </View>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBackground}>
                <View 
                  style={[
                    styles.progressFill, 
                    { 
                      width: getLevelWidth(skill.level),
                      backgroundColor: getLevelColor(skill.level)
                    }
                  ]} 
                />
              </View>
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
    marginBottom: 12,
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
  skillInfo: {
    flex: 1,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  skillLevel: {
    fontSize: 12,
    fontWeight: '500',
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBackground: {
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
});

export default SkillsSection;
