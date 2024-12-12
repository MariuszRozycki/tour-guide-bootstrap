export const loadFromStorage = (key) => {
  try {
    const serializedData = localStorage.getItem(key);

    return serializedData ? JSON.parse(serializedData) : null;
  } catch (error) {
    console.error("Error loading from localStorage", error);
    return null;
  }
};

export const saveToStorage = (key, value) => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};
