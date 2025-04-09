// Correct export of the context provider
import React, { createContext, useState } from 'react';

export const YourContext = createContext({ basename: '' });

export const YourContextProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState({ basename: '/default' });

  return (
    <YourContext.Provider value={contextValue}>
      {children}
    </YourContext.Provider>
  );
};
