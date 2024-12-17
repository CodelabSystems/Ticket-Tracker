import React, {createContext, useState, useEffect, useMemo} from 'react';
import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
} from 'react-native-paper';
// Define custom themes with onboarding background colors
const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    appColor: '#343448',
    appDark: '#353766',
    btn:"#f3735e"

  },
  roundness: 8,
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#343448',
    error: '#d9534f',
    green: '#388E3C',
    
    btn:"#f3735e"
  },
  roundness: 8,
};

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(Appearance.setInterval(() => {
    getColorScheme
  }, 2000);());
  useEffect(() => {
    // Update theme when system theme changes
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme);
    });
    return () => subscription.remove();
  }, [theme]);

  const currentTheme =(() => {
    return theme === 'dark' ? darkTheme : lightTheme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme: currentTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
