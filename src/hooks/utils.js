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

export function useFloatingPanel(ref, handler){
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      handler(e);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("keydown", listener);
    }

  }, [ref, handler])
}
