
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles/commonStyles';
import Icon from './Icon';

const AboutMeSection: React.FC = () => {
  const handleContactPress = () => {
    console.log('Contact button pressed');
    // You can add navigation to contact form or email functionality here
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <View style={styles.sectionIndicator} />
          <View>
            <Text style={styles.sectionTitle}>Who I Am</Text>
            <Text style={styles.sectionSubtitle}>Get to know me better</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.aboutCard}>
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <Icon name="person" size={40} color={colors.primary} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Myles Annan</Text>
              <Text style={styles.role}>Full Stack Developer</Text>
            </View>
          </View>

          <Text style={styles.description}>
            I'm a passionate developer with a love for creating innovative solutions that make a difference. 
            My journey in tech started with curiosity and has evolved into a deep commitment to building 
            exceptional user experiences.
          </Text>

          <Text style={styles.description}>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
            projects, or sharing knowledge with the developer community. I believe in continuous learning 
            and staying up-to-date with the latest industry trends.
          </Text>

          <View style={styles.highlightsContainer}>
            <Text style={styles.highlightsTitle}>What drives me:</Text>
            <View style={styles.highlightsList}>
              <View style={styles.highlightItem}>
                <Icon name="checkmark-circle" size={16} color={colors.success} />
                <Text style={styles.highlightText}>Problem-solving and innovation</Text>
              </View>
              <View style={styles.highlightItem}>
                <Icon name="checkmark-circle" size={16} color={colors.success} />
                <Text style={styles.highlightText}>Clean, maintainable code</Text>
              </View>
              <View style={styles.highlightItem}>
                <Icon name="checkmark-circle" size={16} color={colors.success} />
                <Text style={styles.highlightText}>User-centered design</Text>
              </View>
              <View style={styles.highlightItem}>
                <Icon name="checkmark-circle" size={16} color={colors.success} />
                <Text style={styles.highlightText}>Continuous learning</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.contactButton} onPress={handleContactPress} activeOpacity={0.8}>
            <Icon name="mail" size={20} color={colors.background} />
            <Text style={styles.contactButtonText}>Get In Touch</Text>
          </TouchableOpacity>
        </View>
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
  content: {
    paddingHorizontal: 20,
  },
  aboutCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.border,
    boxShadow: '0px 8px 25px rgba(255, 255, 255, 0.08)',
    elevation: 4,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 16,
  },
  highlightsContainer: {
    marginTop: 8,
    marginBottom: 24,
  },
  highlightsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  highlightsList: {
    gap: 8,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 8,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    boxShadow: '0px 4px 12px rgba(37, 99, 235, 0.3)',
    elevation: 4,
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.background,
    marginLeft: 8,
  },
});

export default AboutMeSection;
