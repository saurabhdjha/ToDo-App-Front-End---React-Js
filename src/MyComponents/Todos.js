import React from 'react'
import {TodoItem} from './TodoItem'
export const Todos = (props) => {

    let myStyle={
        minHeight:"70vh",
        margin:"40px auto"
    }

    return (
        <div className="container">
            <h3 className="text-center mb-4 text-warning my-3">To Do List</h3>
            <hr></hr>
            {
                props.todos.length===0 ? <h5 className="text-danger text-center mt-5">No Todo to display</h5>: 

            props.todos.map((todo)=>{
                return(
                    <TodoItem todosItem={todo} key={todo.sno} onDelete={props.onDelete}/>
                )    
            }) }
        </div>
    )
}
