function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.step };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export default function Counter() {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });

  const { count } = state;

  const increment = () => dispatch({ type: "INCREMENT", step });

  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  );
}
