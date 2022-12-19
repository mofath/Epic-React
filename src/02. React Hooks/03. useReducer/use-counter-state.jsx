const reducer = (amount) => (state, action) => {
    switch (action) {
      case 'increment':
        return state + amount
      case 'decrement':
        return state - amount
    }
  }
  
  const useCounterState = () => {
    const { data } = useQuery(['amount'], fetchAmount)
    return React.useReducer(reducer(data ?? 1), 0)
  }
  
  function App() {
    const [count, dispatch] = useCounterState()
  
    return (
      <div>
        Count: {count}
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
      </div>
    )
  }