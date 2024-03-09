import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)

    const handelAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }

   const handelRemove = () =>{
    setTeam(team -1)
   }

    const teamStyle = {
        border:'2px solid red',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'

    }
    return(
        <div style={teamStyle}>
            <h2>Players: {team}</h2>
            <button onClick={handelAdd}>add</button>
            <button onClick={handelRemove}>remove</button>
            
        </div>
    )


}
   

   

   