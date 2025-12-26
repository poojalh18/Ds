// Storage utility for persisting DSA tracker data
const STORAGE_KEY = 'dsa-tracker-progress';

export const storage = {
  get: (key) => {
    try {
      const data = localStorage.getItem(key || STORAGE_KEY);
      return data ? { value: data } : null;
    } catch (error) {
      console.error('Error reading from storage:', error);
      return null;
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(key || STORAGE_KEY, value);
      return true;
    } catch (error) {
      console.error('Error writing to storage:', error);
      return false;
    }
  },

  clear: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  }
};

// Make storage available globally
if (typeof window !== 'undefined') {
  window.storage = storage;
}
