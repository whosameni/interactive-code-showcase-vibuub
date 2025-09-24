
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { colors, commonStyles } from '../styles/commonStyles';
import { Project } from '../types/Project';
import Icon from './Icon';

interface ProjectCardProps {
  project: Project;
  onPress: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPress }) => {
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
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      {project.imageUrl && (
        <Image source={{ uri: project.imageUrl }} style={styles.image} />
      )}
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{project.title}</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(project.status) + '20' }]}>
            <Text style={[styles.statusText, { color: getStatusColor(project.status) }]}>
              {getStatusText(project.status)}
            </Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={3}>
          {project.description}
        </Text>

        <View style={styles.techContainer}>
          {project.technologies.slice(0, 3).map((tech, index) => (
            <View key={index} style={styles.techBadge}>
              <Text style={styles.techText}>{tech}</Text>
            </View>
          ))}
          {project.technologies.length > 3 && (
            <Text style={styles.moreText}>+{project.technologies.length - 3} more</Text>
          )}
        </View>

        <View style={styles.footer}>
          <View style={styles.linksContainer}>
            {project.githubUrl && (
              <View style={styles.linkItem}>
                <Icon name="logo-github" size={16} color={colors.textSecondary} />
                <Text style={styles.linkText}>GitHub</Text>
              </View>
            )}
            {project.liveUrl && (
              <View style={styles.linkItem}>
                <Icon name="globe" size={16} color={colors.textSecondary} />
                <Text style={styles.linkText}>Live Demo</Text>
              </View>
            )}
          </View>
          <Icon name="chevron-forward" size={20} color={colors.textSecondary} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.projectCard,
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
    marginRight: 12,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 16,
  },
  techBadge: {
    backgroundColor: colors.backgroundAlt,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 4,
  },
  techText: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '500',
  },
  moreText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  linkText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 4,
  },
});

export default ProjectCard;
