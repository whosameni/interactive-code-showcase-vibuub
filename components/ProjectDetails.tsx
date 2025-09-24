
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import { colors, commonStyles } from '../styles/commonStyles';
import { Project } from '../types/Project';
import Icon from './Icon';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  const handleLinkPress = (url: string) => {
    console.log('Opening URL:', url);
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return colors.success;
      case 'in-progress':
        return colors.warning;
      case 'planned':
        return colors.textSecondary;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return 'Unknown';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Icon name="close" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Project Details</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {project.imageUrl && (
          <Image source={{ uri: project.imageUrl }} style={styles.image} />
        )}

        <View style={styles.titleSection}>
          <Text style={styles.title}>{project.title}</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(project.status) + '20' }]}>
            <Text style={[styles.statusText, { color: getStatusColor(project.status) }]}>
              {getStatusText(project.status)}
            </Text>
          </View>
        </View>

        <Text style={styles.description}>{project.description}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technologies Used</Text>
          <View style={styles.techContainer}>
            {project.technologies.map((tech, index) => (
              <View key={index} style={styles.techBadge}>
                <Text style={styles.techText}>{tech}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          {project.features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Icon name="checkmark-circle" size={20} color={colors.success} />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        {(project.githubUrl || project.liveUrl) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Links</Text>
            <View style={styles.linksContainer}>
              {project.githubUrl && (
                <TouchableOpacity
                  style={styles.linkButton}
                  onPress={() => handleLinkPress(project.githubUrl!)}
                >
                  <Icon name="logo-github" size={20} color={colors.background} />
                  <Text style={styles.linkButtonText}>View on GitHub</Text>
                </TouchableOpacity>
              )}
              {project.liveUrl && (
                <TouchableOpacity
                  style={[styles.linkButton, styles.liveLinkButton]}
                  onPress={() => handleLinkPress(project.liveUrl!)}
                >
                  <Icon name="globe" size={20} color={colors.primary} />
                  <Text style={[styles.linkButtonText, styles.liveLinkButtonText]}>Live Demo</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  closeButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginVertical: 20,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    flex: 1,
    marginRight: 16,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 32,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  techBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  techText: {
    fontSize: 14,
    color: colors.background,
    fontWeight: '600',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 12,
    flex: 1,
    lineHeight: 22,
  },
  linksContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.text,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
    flex: 1,
    justifyContent: 'center',
  },
  liveLinkButton: {
    backgroundColor: colors.backgroundAlt,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  linkButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.background,
    marginLeft: 8,
  },
  liveLinkButtonText: {
    color: colors.primary,
  },
  bottomPadding: {
    height: 40,
  },
});

export default ProjectDetails;
