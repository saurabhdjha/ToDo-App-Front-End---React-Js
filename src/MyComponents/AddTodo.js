import React from 'react'
import { useState } from 'react';

export const AddTodo = ({addNewTodo}) => {

    //creating state variables for title and description of new Todo
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    // submit method deffination
    const submit = (e)=>{
        // To prevent default load of page on clicking button
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be null")
        }
        else
         addNewTodo(title,desc);

        setTitle("");
        setDesc("");
    }

    return (
        <div className="container">
        <h5 className="text-center text-primary">Add New Task</h5>
        {/* on clicking form Button, above defined submit method will be called  */}
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    {/* we are taking title and desc field value from title & desc variables(declared above) And these variable's value is auto-updated onChange of corresponding input field  */}
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}  className="form-control mb-2" id="title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Describe Todo</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}  className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn-sm btn btn-success mt-2">Add Todo</button>
            </form>
        </div>
    )
}
