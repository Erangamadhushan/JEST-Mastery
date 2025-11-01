import { useState } from 'react';

export default function Counter({ initialCount = 0, step = 1}) {
    const [count, setCount] = useState(initialCount);

    const inCrement = () => setCount(count + step);
    const deCrement = () => setCount(count - step);
    const reset = () => setCount(initialCount);

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={inCrement}>Increment</button>
            <button onClick={deCrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}