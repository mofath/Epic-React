import React, { useCallback, useRef } from "react";

export const Button = React.memo(({ onClick, label, n }) => {
  const renderRef = useRef(0);

  console.log(renderRef.current++);

  return (
    <button className="btn btn-primary mt-3" onClick={() => onClick(n)}>
      {label}
    </button>
  );
});

export const ButtonEx = () => {
  listOfCount = [1, 2, 5, 10];

  const onClick = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  return (
    <div>
      {listOfCount.map((count) => (
        <Button onClick={onClick} label={count} n={count} key={count} />
      ))}
    </div>
  );
};
