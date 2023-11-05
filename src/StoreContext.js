import React, { useContext, createContext, useState } from 'react';

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [isStoreUpdated, setIsStoreUpdated] = useState(true);
  const [store, setStore] = useState(); // Renamed Store to store to match the variable name
  const [searchState, setSearchState] = useState();

  return (
    <StoreContext.Provider value={{ store, setStore, searchState, setSearchState, isStoreUpdated, setIsStoreUpdated }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);