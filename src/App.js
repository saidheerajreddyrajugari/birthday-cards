import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const App = () => {
    let[api,setApi]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:2020/users").then(x=>setApi(x.data)).catch(()=>alert("Api fetching failed"))

    },[])
    // console.log(api);
    
  return (
    <div id="birthday">
        <h1 id="head">{api.length} Birthdays Today</h1>
        {api.map((x,y)=>{
            return(
                <div key={y} className="bcard">
                    <img src={x.src}  className="propic" alt="photo"/>
                    <div className="bdet">
                        <h1>{x.name}</h1>
                    <p>D.O.B: <b>{x.dob}</b></p>
                        <p>Age: <b>{x.age}</b></p></div>
                </div>
            )
        })}
        <button id="clear" onClick={()=>setApi([])}>Clear</button>

      
    </div>
  )
}

export default App