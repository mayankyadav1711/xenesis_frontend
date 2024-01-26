// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Create a custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Create the ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // Define the initial theme state
  const [theme, setTheme] = useState({
    backgroundGradient: 'bg-[#0e242f]',
    buttonColor: '#4CAF50',
    textColor: '#333',
  });

  // Function to update the theme
  const updateTheme = (newTheme) => {
    setTheme((prevTheme) => ({ ...prevTheme, ...newTheme }));
  };

  // Provide the theme context to the app
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
