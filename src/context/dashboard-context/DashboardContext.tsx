
import  { createContext, useState, ReactNode, } from 'react';
import React from "react";

// Define the shape of the context state
interface DashboardContextState {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (isOpen: boolean) => void;
  isApplinkDrawerOpen: boolean;
  setIsApplinkDrawerOpen: (isOpen: boolean) => void;
}

// Create the context with an initial value
export const DashboardContext = createContext<DashboardContextState | any>(undefined);

// Define the type for the children prop
interface DashboardContextProps {
  children: ReactNode;
}
// Create the provider component
export const DashboardContextProvider: React.FC<DashboardContextProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isApplinkDrawerOpen, setIsApplinkDrawerOpen] = useState<boolean>(false);

  return (
    <DashboardContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isMobileSidebarOpen,
        setIsMobileSidebarOpen,
        isApplinkDrawerOpen,
        setIsApplinkDrawerOpen
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};


