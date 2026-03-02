import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Target, Calendar, Utensils, ShoppingCart, TrendingUp, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/health-goal', icon: Target, label: 'Goals' },
    { path: '/weekly-meal-plan', icon: Calendar, label: 'Plan' },
    { path: '/daily-nutrition', icon: Utensils, label: 'Daily' },
    { path: '/grocery-list', icon: ShoppingCart, label: 'Grocery' },
    { path: '/progress-insights', icon: TrendingUp, label: 'Progress' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-cream shadow-lg p-2 flex justify-around items-center z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center p-2 rounded-lg transition-colors duration-200
            ${isActive ? 'bg-terracotta text-white' : 'text-olive hover:bg-saffron/20'}`
          }
        >
          <item.icon size={20} />
          <span className="text-xs mt-1">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
