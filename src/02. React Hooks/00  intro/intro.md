## Why hooks

Before hooks, there was only one way of managing client state locally: in class-based components with this.setState. The state had to be an object, and the update function accepted a partial version of it.

Hooks changed that in a fundamental way. Not only could you now also manage state in functional components, you got two different ways of doing so with useState and useReducer.

Hooks allowed us to have different solutions for each specific purpose that you need here are some examples of this:

- Form state should be treated separately from global state, which is not possible with single-state solution.
- Server cache state has some unique characteristics
- Navigation state has a special requirements.
- 

The poroportion of work left for general state management varies on app. For example, an app that maily deals with server states would requires one or a few global states. On the other hand, a rich graphical app would reauire many large global states compared to server states required in the app.

The reason why React hooks are novel is that they allow you to extract logic out of UI components. 

Here's an example of how we can extract logic by creating custom hook

```js
const useCount = () => {
    const [count, setCount] = useState(0);
    
    const inc = () => setCount(() => c + 1);

    useEffect(() => {
        console.log("count is changed to ", count)
    }, [count]);

    return [count, inc]
};
```

There are two points to note, as follow:

- We now have a cleaner name - useCount.
- Component is independent of the implementation of useCount.
- We can add feature of showing debug message or add logic without making any change to the component.

React hooks are designed to work with mechanims like:

- Susbense for Data Fetching is mechanism that basically allows you to code your components without worrying about async.
- Concurrent rendering is a mechanism to split the render process into chunks to avoid blocking the centeral processing unit (CPU) for long periods of time.

Note

Componet Model
A component is a reusable piece of a unit, like function. If you define a component, it can be used many times. This is only possible if a component defination is self-contained. If a component depends on something outside, it may not be reusable because its behavior can be inconsistent. Techincally component itself should not depend on global state.

The reason from moving from Class-Components to functional components is the entire design is attempting to move away from OOP inheritance models and instead use compostion as primary code reuse model.

Compostiion means that instead of recieving functionality as inheritance from some parent class we are simply compining functional compoents.

Hooks are just JavaScript functions that provide certain capabilities to the component.

In class-component there's no way of sharing logic the logic in our lifecycle event methods. We cannot easily extract it out and reuse it in some other class-component. Reusable functions (Hooke) are the key reason for the creation of Hooks model.