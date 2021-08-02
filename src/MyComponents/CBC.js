// Example of Class based component. It is used in About.js


import React,{ Component } from "react";
import { useState } from "react";

/*
export default class CBC extends Component
{
    constructor()
    {
        // Necessary to write super
        super();
        //creating state variable with name data
        this.state={
            data:0
        }
    }

    //updating state variable, creating a function.
    // no need to write function keyword.
    updateState()
    {
       this.setState({data: this.state.data+1})
    }
    
    render()
    {
        return(
            <>
            <h5>Contact Number: 8368400368</h5>
            <h5>Email id: sdj131998@gmail.com</h5>
            <h5>data is: {this.state.data}</h5>
            <button onClick={()=>this.updateState()}>Click Me</button>
            </>
        )
    }
} */


/*

export default function CBC(props)
{
    const[val,setVal]=useState()
    const[res,setRes]=useState(false)

    function getVal(val)
    {
      setVal(val.target.value)
    }

    const [data,setData]=useState(0)
        function updateData()
        {
            
            setData(data+1)
        }
        return(
            <>
            <h5>Contact Number: 8368400368</h5>
            <h5>Email id: sdj131998@gmail.com</h5>
            <h5>Name is: {props.name} </h5>
            <h5>data is: {data}</h5>
            <button onClick={updateData}>Sumbit</button>
            <hr/>
            {
                res?
                <h5>Value is: {val} </h5>
                : null
            }

            <input type="text" onChange={getVal}  />
            <hr/>
            <h5>Result is: {res}</h5>
            <button onClick={()=>setRes(true)}>Click Me</button>
            </>
        )
}

*/

/*
export default function CBC(props)
{
    const [name,setName]=useState("")
    const [movie,setMovie]=useState("")
    const [tc,setTc]=useState(false)

    function saveData(e)
    {
       console.log(name,movie,tc)

       //this will prevent default render of submit button
        e.preventDefault()
    }
   return(
       <div className="App">
           <form onSubmit={saveData}>
               <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}></input> <br/><br/>
               <select onChange={(e)=>setMovie(e.target.value)}>
                   <option>Select Movie</option>
                   <option>DC</option>
                   <option>Marvel</option>
               </select><br/><br/>
               <input type="checkbox" onChange={e=>setTc(e.target.checked)} /><span>Agree T&C</span><br/><br/>
               <button type="submit">Submit</button>
           </form>
       </div>
   )
}  */
