const { useState, useEffect } = require("react");

// to make a custom hook you must follow the following:
// - function name must start with use
// - it must use another react hook

function useLocalStorageState(
  key,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState(() => {
    const value = window.localStorage.getItem(key);
    if (value) {
      return deserialize(value);
    }   
    return defaultValue;
  });

  useEffect(() => {
    // Getting the value from ref
    const prevKey = prevKeyRef.current;
    // If different just delete it
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }

    // Set the ref to the new key
    prevKeyRef.current = key;

    window.localStorage.setItem(key, serialize(state));
  }, []);

  return [state, setState];
}
