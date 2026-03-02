import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Soup, Church, Leaf, Wheat, Heart, ChevronRight } from 'lucide-react';
import { MOCK_USER_PROFILE } from '../constants';
import { CuisinePreference, DietaryConsideration, HealthGoalType, UserProfile } from '../types';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>(MOCK_USER_PROFILE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (name: keyof UserProfile, value: string) => {
    setProfile(prev => {
      const currentValues = (prev[name] as string[]) || [];
      if (currentValues.includes(value)) {
        return { ...prev, [name]: currentValues.filter(item => item !== value) };
      }
      return { ...prev, [name]: [...currentValues, value] };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User Profile Submitted:', profile);
    // In a real app, send this to a backend or context
    navigate('/health-goal');
  };

  return (
    <div className="container mx-auto p-4 pb-20 bg-cream min-h-screen">
      <h1 className="text-4xl font-serif text-terracotta text-center mb-6 pt-8">Welcome to Cultural Nutrition AI!</h1>
      <p className="mt-2 text-olive text-center mb-8">Set up your cultural profile to get personalized meal plans.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Country/Region */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-start space-x-4">
          <Globe size={24} className="text-saffron mt-1" />
          <div className="flex-1">
            <label htmlFor="countryRegion" className="block text-lg font-semibold text-olive mb-2">Country/Region</label>
            <input
              type="text"
              id="countryRegion"
              name="countryRegion"
              value={profile.countryRegion}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-saffron focus:border-saffron"
              placeholder="e.g., India, Mexico, Japan"
            />
          </div>
        </div>

        {/* Cultural Cuisine Preferences */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-start space-x-4">
          <Soup size={24} className="text-saffron mt-1" />
          <div className="flex-1">
            <label className="block text-lg font-semibold text-olive mb-2">Cultural Cuisine Preferences</label>
            <div className="grid grid-cols-2 gap-3">
              {Object.values(CuisinePreference).map(cuisine => (
                <button
                  key={cuisine}
                  type="button"
                  onClick={() => handleMultiSelectChange('cuisinePreferences', cuisine)}
                  className={`p-3 rounded-xl border transition-all duration-200
                    ${profile.cuisinePreferences.includes(cuisine)
                      ? 'bg-saffron text-white border-saffron shadow-sm'
                      : 'bg-gray-50 text-olive border-gray-200 hover:bg-saffron/10'}`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Religious Dietary Considerations */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-start space-x-4">
          <Church size={24} className="text-saffron mt-1" />
          <div className="flex-1">
            <label className="block text-lg font-semibold text-olive mb-2">Religious Dietary Considerations</label>
            <div className="grid grid-cols-2 gap-3">
              {[DietaryConsideration.HALAL, DietaryConsideration.KOSHER].map(consideration => (
                <button
                  key={consideration}
                  type="button"
                  onClick={() => handleMultiSelectChange('religiousDietaryConsiderations', consideration)}
                  className={`p-3 rounded-xl border transition-all duration-200
                    ${profile.religiousDietaryConsiderations.includes(consideration)
                      ? 'bg-saffron text-white border-saffron shadow-sm'
                      : 'bg-gray-50 text-olive border-gray-200 hover:bg-saffron/10'}`}
                >
                  {consideration}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dietary Options */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-start space-x-4">
          <Leaf size={24} className="text-saffron mt-1" />
          <div className="flex-1">
            <label className="block text-lg font-semibold text-olive mb-2">Dietary Options</label>
            <div className="grid grid-cols-2 gap-3">
              {[DietaryConsideration.VEGETARIAN, DietaryConsideration.NON_VEGETARIAN, DietaryConsideration.VEGAN].map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleMultiSelectChange('dietaryOptions', option)}
                  className={`p-3 rounded-xl border transition-all duration-200
                    ${profile.dietaryOptions.includes(option)
                      ? 'bg-saffron text-white border-saffron shadow-sm'
                      : 'bg-gray-50 text-olive border-gray-200 hover:bg-saffron/10'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Food Allergies and Restrictions */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-start space-x-4">
          <Wheat size={24} className="text-saffron mt-1" />
          <div className="flex-1">
            <label htmlFor="foodAllergies" className="block text-lg font-semibold text-olive mb-2">Food Allergies & Restrictions (comma-separated)</label>
            <input
              type="text"
              id="foodAllergies"
              name="foodAllergies"
              value={profile.foodAllergies.join(', ')}
              onChange={(e) => setProfile(prev => ({ ...prev, foodAllergies: e.target.value.split(',').map(item => item.trim()) }))}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-saffron focus:border-saffron"
              placeholder="e.g., Peanuts, Gluten, Dairy"
            />
          </div>
        </div>

        {/* Health Goals (multi-select for now, will be a dedicated screen) */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex items-start space-x-4">
          <Heart size={24} className="text-saffron mt-1" />
          <div className="flex-1">
            <label className="block text-lg font-semibold text-olive mb-2">Health Goals</label>
            <div className="grid grid-cols-2 gap-3">
              {Object.values(HealthGoalType).map(goal => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => handleMultiSelectChange('healthGoals', goal)}
                  className={`p-3 rounded-xl border transition-all duration-200
                    ${profile.healthGoals.includes(goal)
                      ? 'bg-saffron text-white border-saffron shadow-sm'
                      : 'bg-gray-50 text-olive border-gray-200 hover:bg-saffron/10'}`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-terracotta text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:bg-terracotta/90 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>Next: Health Goals</span>
          <ChevronRight size={20} />
        </button>
      </form>
    </div>
  );
};

export default Onboarding;
