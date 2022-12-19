import { useCallback } from "react";
import { useState } from "react";

export function Example() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  let i = 0;

  /**
   * The number on the left button will be incremented from 0 to 1, 
   * on the first click on the button, as the first call on the callback always runs.
   * Only after three clicks on the left button do the numbers change.
   * It can be incremented by one again after clicking on the right button at least once.
   * 
   * The callback still returns till completion every time the left button is clicked.
   * However, if the value of 'b' has not changed, it will run old version of the callback where the state 'a' has the old value.
   */
  const memoizedCallback = useCallback(
    (msg) => {
      console.log(msg, a);
      setA(a + 1);
      i++;

      if (i % 3 == 0) {
        setB(b + 1);
      }
    },
    [b]
  );

  return (
    <div>
      <button onClick={() => memoizedCallback("Hi there")}>{a}</button>
      <button onClick={() => setB(b + 1)}>{b}</button>
    </div>
  );
}
