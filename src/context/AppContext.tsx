import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Doctor, Appointment, AppContextType } from '../types';
import { mockDoctors } from '../data/mockData';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [doctors] = useState<Doctor[]>(mockDoctors);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addAppointment = (appointmentData: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Date.now().toString(),
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };
    setAppointments(prev => [...prev, newAppointment]);
  };

  const value: AppContextType = {
    doctors,
    appointments,
    addAppointment,
    searchTerm,
    setSearchTerm,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};