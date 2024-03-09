
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


 

function App() {
  function handelClick(){
    alert('handel click')
  }
  const addToFive = num =>{
    alert(num + 5)
  }

  return (
    <>
    
     
      <h1>react core concept part2</h1>
     <Friends></Friends>
      <Users></Users>
     <Team></Team>
      <Counter></Counter>
      <button onClick={handelClick}>click me</button>
    <button onClick={()=>addToFive(10)}>added</button>
      
      
    </>
  )
}

export default App
