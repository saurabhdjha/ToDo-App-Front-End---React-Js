import React from 'react'
import { useState } from 'react'

export default function About() {

    let contactNumber="9898989898"
    let emailId="techsupportindia@gmail.com"

    const [numF,updateNumF]=useState(false)
    const [emailF,updateEmailF]=useState(false)
    

    return (
       <>
        {
            numF?<h5>Contact Number : {contactNumber}</h5>:""
        }
        {
            emailF? <h5>Email Id : {emailId}</h5> :""
        }
        
        <button onClick={()=>numF?updateNumF(false):updateNumF(true)}>PhoneNumber</button>
        <button onClick={()=>emailF?updateEmailF(false):updateEmailF(true)}>EmailId</button><br/><br/>
       </>
    )
}
