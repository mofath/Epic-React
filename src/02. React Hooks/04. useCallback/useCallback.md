# useCallback

`useCallback` returns a memoized version of the callback function that only changes if one of the dependencies has changed.

```js
const cachedFn = useCallback(fn, dependenciesArr)
```

Memoization is a way to cache a result so that it doesn’t need to be computed again. This can boost performance.

It is uesfull when passing callbacks to optimized child compoent that rely on reference equality to prevent unnecessary renders.

Memoization: a performance optimization technique which eliminates the need to recompute a value for a given input by storing the original computation and returning that stored value when the same input is provided. Caching is a form of memoization. 

There are two reasons you might want to memoize something:

- Improve performance by avoiding expensive computations (like re-rendering expensive components or calling expensive functions)
  
- Value stability

It returns a memoized function (or callback).

### `useEffect` and `useCallback`

The use case for `useCallback` in the exercise is a perfect example of the types
of problems `useCallback` is intended to solve. However the examples in these
instructions are intentionally contrived. You can simplify things a great deal
by _not_ extracting code from `useEffect` into functions that you then have to
memoize with `useCallback`. Read more about this here:
[Myths about useEffect](https://epicreact.dev/myths-about-useeffect).

### `useCallback` use cases

The entire purpose of `useCallback` is to memoize a callback for use in
dependency lists and props on memoized components (via `React.memo`, which you
can learn more about from the performance workshop). The _only_ time it's useful
to use `useCallback` is when the function you're memoizing is used in one of
those two situations.


## Avoiding unnecessary Renders

An event handler gets recreated and assigned a different address on every render by default, resulting in a changed 'props' object for the child component.

Below only button 2 is not repeatedly rendered as the `props` object has not changed. Notice how the enitre Example() function runs till completion on every render.

```js
const Button = memo((props) => {
    return (
        <button onClick={props.onClick}>{props.id}</button>
    )
})

function Example() {
    const [a, setA] = useState(0);

    const unmemoizedCallback = () => {}

    const memoizedCallback = useCallback(() => {

    }, [])

    return (
        <div> 
            <Button id="1" onClick={unmemoizedCallback}/>
            <Button id="2" onClick={memoizedCallback}/>
            <Button id="3" onClick={() => memoizedCallback()}/>
        </div> 
    )
}
```

## undo

`useCallback` increases code complexity. It is best reveresd for cases where there is a need to avoid rendering 'big' component repeatedly.

## Callback ref

A callback ref allows us to obtain the position of a DOM node. React will call that callback whenever the ref gets attached to a different node.

In this example, the callback ref will be called only when the component mounts and unmounts since the rendered <h1> component stays present throught any renders. If you want to get notified any time component resizes, you may want to use ResizeObserver or a third-party hook built on it.

```js
function MeasureExample() {
    const [rect, ref] = useClientRect();

    return (
        <div>
            <h1 ref={measureRef}>Hello World</h1>
            {
                rect !== null &&
                <h2>The above header is {Math.round(width)} px wide</h2>
            }
        </div>
    )
}

function useClientRect() {
    const [rect, setRect] = useState(0);

    const ref = useCallback((node) => {
        if(node !== null) {
            setWidth(node.getBoundingClientRect().width)
        }
    }, [])

    return [rect, ref]
}
```

useRef is not used in the example above because an object doesn't notify us about changes to current ref value. Using a callback ref ensures that even if child component displays the measured node later, we still get notified about it in the parent component and can update the measurement.

This will result in a runtime error: Uncaught TypeError: cannot read property 'getBoundingClientRect' of null.

```js
function MeasureExample() {
    const wRef = useRef(null)

    return (
        <div>
            <h1 ref={wRef}>Hello World</h1>
            <h2>The above header is {Math.round(wRef.current.getBoundingClientRect().width)} px wide</h2>
        </div>
    )
}
```