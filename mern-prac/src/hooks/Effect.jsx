import React, { use } from 'react'
import { useEffect } from 'react';

const Effect = () => {
    const [count, setCount] = React.useState(0);
    const [users, setUsers] = React.useState([]);
    // useEffect(() => {
    //     console.log("from UseEffect");
    // }, [count]);  // runs on every render when count changes
    // useEffect(() => {
    //     console.log("component mounted");
    //     return () => {
    //         console.log("component unmounted");
    //     }
    // },[]); // runs only once when component mounts
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            console.log(data);  // ← Add this to see data in console
        })
    }, []);

  return (
    <div>Effect
        <h1>Count</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </h2>
    </div>
  )
}

export default Effect