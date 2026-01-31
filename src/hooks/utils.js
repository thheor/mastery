import { useState, useEffect } from "react";

export function useLocalStorage(key) {
  
  const [value, setValue] = useState(() => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : [];
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));

  }, [value])

  return [value, setValue];
}
