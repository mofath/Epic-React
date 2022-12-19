import { useCallback, useState } from 'react';
import {Example} from './02. React Hooks/04. useCallback/03-useCallbac'

function App() {
    const [width, setWidth] = useState(0);

    const measureRef = useCallback((node) => {
        if(node !== null) {
            setWidth(node.getBoundingClientRect().width)
        }
    }, [])

    return (
        <div>
            <h1 style={{background: "red"}} ref={measureRef}>Hello World</h1>
            <h2>The above header is {Math.round(width)} px wide</h2>
        </div>
    )
}

export default App;
