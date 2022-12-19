
# useState

`useState` accepts an optional argumentas the initial state value and returns an array with two items: the first is the value of the state, and the second is a function you can use to update that state, triggering a re-render.

```js
// Here I define a new state called state, to update it I'll use the setState fn
// and it's initial value will be 0
const [ state, setState ] = useState(0);
```

State can be defined as: data that changes over time.

When we update a state we tell React to re-render the component itself and this will help us to show the new value in the UI of our app. Basically re-render means that we tells React that something has changed and we want it to generate a new JSX based on the new values and this means re-execute the function that defines the new component.

> With the useState hook, the state gets created only at the first render using the initial value we pass as an argument to it.

For every re-render (subsequent renders after the initial render), ReactJS ignores the initial value we pass as the argument. In this case, it returns the current value of the state.

---

## Updating state with value

One way to update the state value with useState is by providing a new value.

In the first count `count1`, clicking the button for the first time will trigger Component to re-render with count = 1. If you click the button again, it will invoke setCount(1), but as it as  the same value, it bails out and the compoent will not re-render.

In the second count `count2`, clicking the button will increment the count, if you clicked the button twice quickly enough, it will increment by just one number. This is sometimes desirable, but sometimes it's not if you want count how many times the button is actulally clicked. That require a function update.

```js
const Component = () =>  {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
            <button onClick={() => setCount1(1)}>first count : {count1}</button>
            <button onClick={() => setCount2(count2 + 1)}>second count :{count2}</button>
        </div>
    )
}
```

---

## Updating state with Object

This first state `state1` behaves exactly the same as  `count1` in the perivous example for the first click; however, if you click the button again, the component will re-render. You don't see any difference on screen because the count hasn't changed. This happens because second click creates a new object { count: 1 }, and it's different from the pervious object.

This second state `state2` doesn;t work as expected. Even if you click the button, it won't re-render. This is because the state object is refrentially unchanged, and it bails out, meant that this doesn't cause trigger a re-render.

```js
const Component = () =>  {
  const [state1, setState1] = useState({ count: 0 });
  const [state2, setState2] = useState({ count: 0 });

  return (
    <div>

      {/* Count 1 */}
      <button onClick={() => setState1({ count: 1 })}>
        first count : {state1.count}
      </button>

      {/* Count 2 */}
      <button
        onClick={() => {
          state2.count += 1;
          setState2(state2);
        }}
      >
        second count : {state2.count}
      </button>

    </div>
  );
}
```

---

## Updating state with a function

Another way to update with `useState` is called funtion update.

This actually counts how many times the button is clicked, because `(c) => c + 1` is invoked sequentially. In most use cases, function updates work better if the update is based on the previous value. The set count to `count + 1` actually doesn't depends on the pervious state, but depends on the displayed value.

A specialty of this method is, you can get the previous(or old) state value to update the state.

Here we pass a callback function to the setCounter() method gives us the previous value to use.

Bailout is also possible with function updates, if the update function returns the exact same state as the pervious state, it will bail out and this component won't render.

```js
const Component = () =>  {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </div>
    )
}
```

---

## Lazy initialization

`useState` can recieves a function for initialization that will be evaluated only in the first render.

The use of initialization function is very effective when you want initialize the state with a computed value. The computation can be an intense and time-taking activity.

The use of initialization function is evaluated lazily, not evaluated before calling `useState`, in other words, it's invoked just once on mount.

```js
const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));
```

---

## Lifting state

Lifting the state is a practice that is put to work when we need a specific value hold in a state to be shared between two or more components. In order to make it work we have to identify the closest shared parent component and lift there the state we want to share.

---

## Colocating state

Colocate a state is the practice to move back a useState Hook within the component that uses it if there is no need to share the lifted state.

This means that we will remove the lifted state from the parent component and we will localize it inside the component that actually uses it. We do this because:

- it will improve the maintainability of our component (the state and update mechanism are right inside it)
- it will improve also the performances because when we will update the component where we colocate the state we do not need to render the parent component anymored