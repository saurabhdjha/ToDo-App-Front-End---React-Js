import React from 'react'

export const TodoItem = (props) => {
    return (
        <div className="container text-center">
            <h5 className="text-primary">SNo:{props.todosItem.sno}</h5>
            <h5 className="text-warning"> Title: {props.todosItem.title} </h5>
            <p>Desc: {props.todosItem.desc}</p>
            <button type="button" className="btn btn-danger mb-4" onClick={ ()=>{props.onDelete(props.todosItem)}}>Delete</button>
            <hr></hr>
        </div>
    )
}
