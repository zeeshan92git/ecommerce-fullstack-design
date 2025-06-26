import React, { createContext, useState, useEffect } from 'react';

export const SavedForLaterContext = createContext();

const SavedForLaterProvider = (props) => {
  const [savedItems, setSavedItems] = useState(() => {
    // Load from localStorage on initial render
    const stored = localStorage.getItem('savedItems');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // Persist to localStorage whenever savedItems changes
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
  }, [savedItems]);

  const toggleSaveItem = (product) => {
    setSavedItems((prev) => {
      const exists = prev.find((item) => item._id === product._id);
      if (exists) {
        return prev.filter((item) => item._id !== product._id); // remove
      }
      return [...prev, product]; // add
    });
  };

  const removeSavedItem = (productId) => {
    setSavedItems((prev) => prev.filter((item) => item._id !== productId));
  };

  const clearSavedItems = () => {
    setSavedItems([]);
  };

  return (
    <SavedForLaterContext.Provider
      value={{ savedItems, toggleSaveItem, removeSavedItem, clearSavedItems }}
    >
      {props.children}
    </SavedForLaterContext.Provider>
  );
};

export default SavedForLaterProvider;
