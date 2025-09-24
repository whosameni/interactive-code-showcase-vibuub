
import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '../styles/commonStyles';
import { projects, categories } from '../data/projects';
import { Project } from '../types/Project';
import ProjectCard from '../components/ProjectCard';
import CategoryFilter from '../components/CategoryFilter';
import SimpleBottomSheet from '../components/BottomSheet';
import ProjectDetails from '../components/ProjectDetails';

export default function ProjectsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const handleProjectPress = (project: Project) => {
    console.log('Project selected:', project.title);
    setSelectedProject(project);
    setIsBottomSheetVisible(true);
  };

  const handleCloseBottomSheet = () => {
    setIsBottomSheetVisible(false);
    setSelectedProject(null);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={commonStyles.title}>My Projects</Text>
          <Text style={commonStyles.textSecondary}>
            Explore my coding projects and technical achievements
          </Text>
        </View>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        <View style={styles.projectsContainer}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPress={() => handleProjectPress(project)}
            />
          ))}
        </View>

        {filteredProjects.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No projects found in this category</Text>
          </View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>

      <SimpleBottomSheet
        isVisible={isBottomSheetVisible}
        onClose={handleCloseBottomSheet}
      >
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={handleCloseBottomSheet}
          />
        )}
      </SimpleBottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
    alignItems: 'center',
  },
  projectsContainer: {
    paddingVertical: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  bottomPadding: {
    height: 40,
  },
});
