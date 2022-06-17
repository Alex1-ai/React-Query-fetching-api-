import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query'



// function Button(){
//   const {data, error } = useQuery('hello-world', ()=>{
//     return new Promise(resolve =>{
//       setTimeout(()=>resolve(Math.random()), 1000)
//     })
//   })
//   console.log({data,error})

//   return <button> I am a button{data}</button>
// }

const fetcher = (repo) =>{
  return fetch(`https://api.github.com/repos/${repo}`)
  .then(res => res.json())
}

function App({ itemID }) {


  // const [visible, setVisible] = useState(true)

  // function toggleButton(){
  //   setVisible(visible=>!visible)
  // }
  // const {data, error,isLoading,isError,isSuccess,isIdle} = useQuery("Hello World",()=>{
  //   return Promise.reject( 4 )
  // })

  // console.log(error,data,isLoading,isError,isSuccess,isIdle, "This is the data")
  const [repoName, setRepoName] = useState('')
  const { isLoading, data } = useQuery(["github-data", repoName ],()=>fetcher(repoName),)
  
  if (isLoading) {
    return  <div className="App">
       <input type="text" value={repoName}  onChange={(e)=> setRepoName(e.target.value)}/>
      <h2>Loading ... </h2>


    </div>
  }
  return (
    <div className="App">
      
      
      
      {/* <button onClick={()=>setState(c => !c)}>Cllick me</button> */}
      
      <input type="text" value={repoName}  onChange={(e)=> setRepoName(e.target.value)}/>
      <h2>Name: {data.name}</h2>
      <p>Decription : { data.description}</p>

      <h2>Stars: {data.stargazers_count}</h2>


      <p>Message: {data.message}</p>
        {/* {visible && <Button />}
        <button onClick={toggleButton}>Toggle</button> */}
        
     
    </div>
  );
}

export default App;
