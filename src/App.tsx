/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './screens/Onboarding';
import HealthGoal from './screens/HealthGoal';
import WeeklyMealPlan from './screens/WeeklyMealPlan';
import DailyNutrition from './screens/DailyNutrition';
import GroceryList from './screens/GroceryList';
import ProgressInsights from './screens/ProgressInsights';
import Settings from './screens/Settings';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream font-sans text-gray-800">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/health-goal" element={<HealthGoal />} />
          <Route path="/weekly-meal-plan" element={<WeeklyMealPlan />} />
          <Route path="/daily-nutrition" element={<DailyNutrition />} />
          <Route path="/grocery-list" element={<GroceryList />} />
          <Route path="/progress-insights" element={<ProgressInsights />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}
