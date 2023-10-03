import { useState, useEffect } from "react"

export function CounterName() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    useEffect(() => {
        console.log("Age and name Changed", age, name)
    }, [age, name]
)

    return( <div>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <br />
        <br />
        <button onClick={() => setAge(currentAge => currentAge - 1)}>-</button>
        {age}
        <button onClick={() => setAge(currentAge => currentAge + 1)}>+</button>
        <br />
        <h1>Hello, I am {name} and i am {age} years old.</h1>
    </div>
    )
}