
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

## Lazy initialization

At times, you may want to initialize the state with a computed value. The computation can be an intense and time-taking activity.

With the useState hook, you can pass a function as an argument to initialize the state lazily.

```js
const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));
```

---

## Work with previous State

A specialty of this method is, you can get the previous(or old) state value to update the state.

Here we pass a callback function to the setCounter() method gives us the previous value to use.

```js
setCounter((prev) => prev + 3);
```
