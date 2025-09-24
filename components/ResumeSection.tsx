
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { colors } from '../styles/commonStyles';
import Icon from './Icon';

const ResumeSection: React.FC = () => {
  const handleDownloadResume = async () => {
    console.log('Download resume pressed');
    // You can replace this URL with your actual resume URL
    const resumeUrl = 'https://example.com/your-resume.pdf';
    
    try {
      const supported = await Linking.canOpenURL(resumeUrl);
      if (supported) {
        await Linking.openURL(resumeUrl);
      } else {
        console.log('Cannot open URL:', resumeUrl);
      }
    } catch (error) {
      console.error('Error opening resume:', error);
    }
  };

  const handleViewOnline = () => {
    console.log('View resume online pressed');
    // You can add navigation to a resume viewer screen here
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <View style={styles.sectionIndicator} />
          <View>
            <Text style={styles.sectionTitle}>Resume</Text>
            <Text style={styles.sectionSubtitle}>Download or view my professional experience</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.resumeCard}>
          <View style={styles.resumeHeader}>
            <View style={styles.documentIconContainer}>
              <Icon name="document-text" size={32} color={colors.primary} />
            </View>
            <View style={styles.resumeInfo}>
              <Text style={styles.resumeTitle}>Professional Resume</Text>
              <Text style={styles.resumeSubtitle}>Updated December 2024</Text>
            </View>
          </View>

          <View style={styles.resumePreview}>
            <Text style={styles.previewTitle}>Quick Overview:</Text>
            <View style={styles.previewContent}>
              <View style={styles.previewItem}>
                <Icon name="briefcase" size={16} color={colors.primary} />
                <Text style={styles.previewText}>2+ Years Experience</Text>
              </View>
              <View style={styles.previewItem}>
                <Icon name="school" size={16} color={colors.primary} />
                <Text style={styles.previewText}>Computer Science Background</Text>
              </View>
              <View style={styles.previewItem}>
                <Icon name="code-slash" size={16} color={colors.primary} />
                <Text style={styles.previewText}>Full Stack Development</Text>
              </View>
              <View style={styles.previewItem}>
                <Icon name="phone-portrait" size={16} color={colors.primary} />
                <Text style={styles.previewText}>Mobile App Development</Text>
              </View>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.primaryButton} 
              onPress={handleDownloadResume}
              activeOpacity={0.8}
            >
              <Icon name="download" size={20} color={colors.background} />
              <Text style={styles.primaryButtonText}>Download PDF</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.secondaryButton} 
              onPress={handleViewOnline}
              activeOpacity={0.8}
            >
              <Icon name="eye" size={20} color={colors.primary} />
              <Text style={styles.secondaryButtonText}>View Online</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.note}>
            <Icon name="information-circle" size={16} color={colors.textSecondary} />
            <Text style={styles.noteText}>
              Feel free to reach out if you'd like to discuss my experience in more detail.
            </Text>
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
  resumeCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: colors.border,
    boxShadow: '0px 8px 25px rgba(255, 255, 255, 0.08)',
    elevation: 4,
  },
  resumeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  documentIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: colors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  resumeInfo: {
    flex: 1,
  },
  resumeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  resumeSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  resumePreview: {
    marginBottom: 24,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  previewContent: {
    gap: 8,
  },
  previewItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  primaryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 25,
    boxShadow: '0px 4px 12px rgba(37, 99, 235, 0.3)',
    elevation: 4,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.background,
    marginLeft: 8,
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 25,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginLeft: 8,
  },
  note: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.backgroundAlt,
    padding: 12,
    borderRadius: 8,
  },
  noteText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 8,
    flex: 1,
    lineHeight: 16,
  },
});

export default ResumeSection;
