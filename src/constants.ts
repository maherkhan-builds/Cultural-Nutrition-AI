// src/constants.ts

import { CuisinePreference, DietaryConsideration, HealthGoalType, Meal, DailyPlan, WeeklyPlan, ProgressData } from './types';

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// --- Mock Data for UI Development ---

export const MOCK_USER_PROFILE = {
  countryRegion: 'India',
  cuisinePreferences: [CuisinePreference.INDIAN, CuisinePreference.OTHER],
  religiousDietaryConsiderations: [DietaryConsideration.HALAL],
  dietaryOptions: [DietaryConsideration.VEGETARIAN],
  foodAllergies: ['Peanuts', 'Dairy'],
  healthGoals: [HealthGoalType.BALANCED_HEALTH],
};

export const MOCK_MEALS: Meal[] = [
  {
    id: 'meal1',
    name: 'Dal Makhani with Brown Rice',
    imageUrl: 'https://picsum.photos/seed/dalmakhani/400/300?blur=1',
    calories: 450,
    protein: 20,
    carbs: 60,
    fats: 15,
    portionSize: '1 bowl dal, 1 cup rice',
    ingredients: ['Black lentils', 'Kidney beans', 'Tomatoes', 'Cream', 'Spices', 'Brown rice'],
    instructions: ['Cook lentils and beans.', 'Sauté tomatoes and spices.', 'Combine and simmer.', 'Serve with brown rice.'],
    culturalNotes: 'A popular North Indian dish, often served with roti or rice. Healthier with brown rice and reduced cream.',
  },
  {
    id: 'meal2',
    name: 'Chicken Biryani (Healthier Version)',
    imageUrl: 'https://picsum.photos/seed/chickenbiryani/400/300?blur=1',
    calories: 550,
    protein: 35,
    carbs: 70,
    fats: 20,
    portionSize: '1 plate',
    ingredients: ['Chicken breast', 'Basmati rice', 'Yogurt', 'Onions', 'Tomatoes', 'Biryani spices'],
    instructions: ['Marinate chicken.', 'Layer with par-boiled rice and cook.', 'Serve hot.'],
    culturalNotes: 'A festive South Asian rice dish. Made healthier with lean chicken breast and less oil.',
  },
  {
    id: 'meal3',
    name: 'Vegetable Pulao',
    imageUrl: 'https://picsum.photos/seed/vegetablepulao/400/300?blur=1',
    calories: 380,
    protein: 12,
    carbs: 55,
    fats: 10,
    portionSize: '1 plate',
    ingredients: ['Basmati rice', 'Mixed vegetables', 'Paneer', 'Spices'],
    instructions: ['Sauté vegetables and paneer.', 'Add rice and water, cook until done.'],
    culturalNotes: 'A simple and nutritious rice dish, popular across India. Can be customized with seasonal vegetables.',
  },
  {
    id: 'meal4',
    name: 'Quinoa Salad with Chickpeas and Feta',
    imageUrl: 'https://picsum.photos/seed/quinoasalad/400/300?blur=1',
    calories: 320,
    protein: 15,
    carbs: 40,
    fats: 12,
    portionSize: '1 bowl',
    ingredients: ['Quinoa', 'Chickpeas', 'Cucumber', 'Tomatoes', 'Red onion', 'Feta cheese', 'Lemon-tahini dressing'],
    instructions: ['Cook quinoa.', 'Chop vegetables.', 'Combine all ingredients with dressing.'],
    culturalNotes: 'A Mediterranean-inspired salad, great for a light and healthy meal.',
  },
  {
    id: 'meal5',
    name: 'Lentil Soup (Adas Shorba)',
    imageUrl: 'https://picsum.photos/seed/lentilsoup/400/300?blur=1',
    calories: 280,
    protein: 18,
    carbs: 45,
    fats: 5,
    portionSize: '1 bowl',
    ingredients: ['Red lentils', 'Carrots', 'Celery', 'Onions', 'Garlic', 'Spices', 'Lemon juice'],
    instructions: ['Sauté vegetables.', 'Add lentils, broth, and spices; simmer.', 'Blend partially and serve with lemon.'],
    culturalNotes: 'A staple in Middle Eastern and Mediterranean cuisines, known for its comforting and nutritious qualities.',
  },
];

export const MOCK_DAILY_PLAN: DailyPlan = {
  date: '2026-03-01',
  meals: {
    breakfast: MOCK_MEALS[0],
    lunch: MOCK_MEALS[1],
    dinner: MOCK_MEALS[2],
    snacks: [MOCK_MEALS[3]],
  },
  totalCalories: 1700,
  totalProtein: 82,
  totalCarbs: 225,
  totalFats: 57,
};

export const MOCK_WEEKLY_PLAN: WeeklyPlan = {
  weekStart: '2026-02-24',
  dailyPlans: Array(7).fill(MOCK_DAILY_PLAN).map((plan, index) => ({
    ...plan,
    date: `2026-02-${24 + index < 10 ? '0' : ''}${24 + index}`,
  })),
};

export const MOCK_PROGRESS_DATA: ProgressData[] = [
  { date: '2026-02-01', weight: 70, hydration: 2.5, culturalDiversityScore: 75 },
  { date: '2026-02-08', weight: 69.5, hydration: 2.7, culturalDiversityScore: 80 },
  { date: '2026-02-15', weight: 69, hydration: 2.6, culturalDiversityScore: 85 },
  { date: '2026-02-22', weight: 68.8, hydration: 2.8, culturalDiversityScore: 90 },
  { date: '2026-03-01', weight: 68.5, hydration: 2.9, culturalDiversityScore: 92 },
];
