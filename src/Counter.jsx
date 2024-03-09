import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const add = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const reduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }
    return(

        <div style={{border:'2px solid yellow'}}>
            <h2>Counter:{count}</h2>
            <button onClick={add}>add</button>
            <button onClick={reduce}>reduce</button>
        </div>
    )
        
    
}
