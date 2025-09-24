
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { colors, commonStyles } from '../styles/commonStyles';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function MainScreen() {
  const handleExploreProjects = () => {
    console.log('Navigating to projects screen');
    router.push('/projects');
  };

  const handleProjectPress = (projectId: string) => {
    console.log('Project pressed:', projectId);
    router.push('/projects');
  };

  // Show only the first 2 projects as featured
  const featuredProjects = projects.slice(0, 2);

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <HeroSection onExploreProjects={handleExploreProjects} />
        
        <View style={styles.featuredSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleContainer}>
              <View style={styles.sectionIndicator} />
              <View>
                <View style={styles.sectionTitle}>
                  <View style={styles.titleText}>Featured Projects</View>
                </View>
                <View style={styles.sectionSubtitle}>
                  <View style={styles.subtitleText}>A showcase of my recent work</View>
                </View>
              </View>
            </View>
          </View>

          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPress={() => handleProjectPress(project.id)}
            />
          ))}
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  featuredSection: {
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
    marginBottom: 4,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  sectionSubtitle: {},
  subtitleText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  bottomPadding: {
    height: 40,
  },
});
