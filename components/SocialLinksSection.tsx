
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { colors } from '../styles/commonStyles';
import Icon from './Icon';

interface SocialLink {
  name: string;
  url: string;
  icon: keyof typeof import('@expo/vector-icons').Ionicons.glyphMap;
  color: string;
  username?: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'logo-github',
    color: '#333333',
    username: '@yourusername',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'logo-linkedin',
    color: '#0077B5',
    username: 'Your Name',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'logo-twitter',
    color: '#1DA1F2',
    username: '@yourusername',
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'mail',
    color: '#EA4335',
    username: 'your.email@example.com',
  },
  {
    name: 'Portfolio',
    url: 'https://yourportfolio.com',
    icon: 'globe',
    color: colors.primary,
    username: 'yourportfolio.com',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@yourusername',
    icon: 'logo-medium',
    color: '#00AB6C',
    username: '@yourusername',
  },
];

const SocialLinksSection: React.FC = () => {
  const handleSocialPress = async (url: string, name: string) => {
    console.log(`Opening ${name}:`, url);
    
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log('Cannot open URL:', url);
      }
    } catch (error) {
      console.error(`Error opening ${name}:`, error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <View style={styles.sectionIndicator} />
          <View>
            <Text style={styles.sectionTitle}>Connect With Me</Text>
            <Text style={styles.sectionSubtitle}>Find me on social media and professional networks</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.socialGrid}>
          {socialLinks.map((social, index) => (
            <TouchableOpacity
              key={index}
              style={styles.socialCard}
              onPress={() => handleSocialPress(social.url, social.name)}
              activeOpacity={0.8}
            >
              <View style={styles.socialHeader}>
                <View style={[styles.socialIconContainer, { backgroundColor: social.color + '20' }]}>
                  <Icon name={social.icon} size={24} color={social.color} />
                </View>
                <View style={styles.socialInfo}>
                  <Text style={styles.socialName}>{social.name}</Text>
                  {social.username && (
                    <Text style={styles.socialUsername}>{social.username}</Text>
                  )}
                </View>
                <Icon name="chevron-forward" size={20} color={colors.textSecondary} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.connectCard}>
          <View style={styles.connectHeader}>
            <Icon name="people" size={24} color={colors.primary} />
            <Text style={styles.connectTitle}>Let's Connect!</Text>
          </View>
          <Text style={styles.connectDescription}>
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
            Feel free to reach out through any of the platforms above!
          </Text>
          
          <View style={styles.responseTime}>
            <Icon name="time" size={16} color={colors.success} />
            <Text style={styles.responseTimeText}>Usually responds within 24 hours</Text>
          </View>
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
  socialGrid: {
    gap: 12,
    marginBottom: 24,
  },
  socialCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    boxShadow: '0px 4px 6px rgba(255, 255, 255, 0.05)',
    elevation: 2,
  },
  socialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  socialInfo: {
    flex: 1,
  },
  socialName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  socialUsername: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  connectCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    boxShadow: '0px 8px 25px rgba(255, 255, 255, 0.08)',
    elevation: 4,
  },
  connectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  connectTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginLeft: 8,
  },
  connectDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  responseTime: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.success + '20',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  responseTimeText: {
    fontSize: 12,
    color: colors.success,
    fontWeight: '500',
    marginLeft: 4,
  },
});

export default SocialLinksSection;
