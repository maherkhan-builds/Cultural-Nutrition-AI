// src/types.ts

export enum HealthGoalType {
  WEIGHT_LOSS = 'Weight Loss',
  MUSCLE_GAIN = 'Muscle Gain',
  BALANCED_HEALTH = 'Balanced Health',
  MEDICAL_DIET = 'Medical Diet',
}

export enum CuisinePreference {
  INDIAN = 'Indian',
  MEXICAN = 'Mexican',
  ITALIAN = 'Italian',
  CHINESE = 'Chinese',
  MEDITERRANEAN = 'Mediterranean',
  AMERICAN = 'American',
  OTHER = 'Other',
}

export enum DietaryConsideration {
  VEGETARIAN = 'Vegetarian',
  NON_VEGETARIAN = 'Non-Vegetarian',
  VEGAN = 'Vegan',
  HALAL = 'Halal',
  KOSHER = 'Kosher',
  GLUTEN_FREE = 'Gluten-Free',
  DAIRY_FREE = 'Dairy-Free',
}

export interface UserProfile {
  countryRegion: string;
  cuisinePreferences: CuisinePreference[];
  religiousDietaryConsiderations: DietaryConsideration[];
  dietaryOptions: DietaryConsideration[];
  foodAllergies: string[];
  healthGoals: HealthGoalType[];
}

export interface Meal {
  id: string;
  name: string;
  imageUrl: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  portionSize: string;
  ingredients: string[];
  instructions: string[];
  culturalNotes?: string;
}

export interface DailyPlan {
  date: string;
  meals: {
    breakfast?: Meal;
    lunch?: Meal;
    dinner?: Meal;
    snacks?: Meal[];
  };
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
}

export interface WeeklyPlan {
  weekStart: string;
  dailyPlans: DailyPlan[];
}

export interface ProgressData {
  date: string;
  weight: number;
  hydration: number; // in liters
  culturalDiversityScore: number; // 0-100
}
