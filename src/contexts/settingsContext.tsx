import themeConfigs from '@/configs/themeConfig';
import { TLayout, TMode, TThemeColor } from '@/types/layouts';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Settings = {
    mode: TMode;
    themeColor: TThemeColor;
    layout: TLayout;
};

const initialSettings: Settings = {
    themeColor: 'primary',
    mode: themeConfigs.mode,
    layout: themeConfigs.layout
  }

export type SettingsContextType = {
    settings: Settings
    saveSettings: (updatedSettings: Settings) => void
}
  

// Create a context with a default value
const SettingsContext = createContext<SettingsContextType>({
    saveSettings: () => null,
    settings: initialSettings
});

// Create a provider component
export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initialSettings as Settings);

  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings)
  }

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to use the SettingsContext
export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return context;
};
