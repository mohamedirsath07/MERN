import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>useState Example</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default State