
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../styles/commonStyles';
import { ProjectCategory } from '../types/Project';
import Icon from './Icon';

interface CategoryFilterProps {
  categories: ProjectCategory[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryButton,
            selectedCategory === category.id && styles.selectedCategory,
          ]}
          onPress={() => onCategorySelect(category.id)}
          activeOpacity={0.7}
        >
          <Icon
            name={category.icon as any}
            size={20}
            color={selectedCategory === category.id ? colors.background : colors.textSecondary}
          />
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category.id && styles.selectedCategoryText,
            ]}
          >
            {category.name}
          </Text>
          <View
            style={[
              styles.countBadge,
              selectedCategory === category.id && styles.selectedCountBadge,
            ]}
          >
            <Text
              style={[
                styles.countText,
                selectedCategory === category.id && styles.selectedCountText,
              ]}
            >
              {category.count}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundAlt,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    marginRight: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedCategory: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    marginLeft: 8,
    marginRight: 8,
  },
  selectedCategoryText: {
    color: colors.background,
  },
  countBadge: {
    backgroundColor: colors.background,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    minWidth: 20,
    alignItems: 'center',
  },
  selectedCountBadge: {
    backgroundColor: colors.backgroundAlt,
  },
  countText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.text,
  },
  selectedCountText: {
    color: colors.primary,
  },
});

export default CategoryFilter;
