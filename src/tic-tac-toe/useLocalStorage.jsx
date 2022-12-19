import { useState, useEffect } from "react";

export const useLocalStorage = (key, initial) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initial
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  });

  return [state, setState];
};
