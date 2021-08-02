import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;

  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }


  const onDelete = (todosItem) => {
    console.log("I am onDelete of", todosItem);
    // this will not delete item. ie. dom will not be updated.
    //let index=todo.indexOf(todosItem);
    //todo.splice(index,1);
    // To solve this issue, need to use State Hook-->
    setTodo(todo.filter((e) => {
      return e !== todosItem;
    }));

    localStorage.setItem("todo", JSON.stringify(todo));
  }

  const addNewTodoMethod = (title, desc) => {
    console.log("I am adding this todo", title, desc)

    let sno;
    if (todo.length === 0)
      sno = 1;
    else
      sno = todo[todo.length - 1].sno + 1;
    console.log(sno);
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    // Adding new todo into todo list
    setTodo([...todo, newTodo]);
  }

  const [todo, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo])
  return (
    <>

      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addNewTodo={addNewTodoMethod} />
                <Todos todos={todo} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>

          <Route exact path="/About">
            <About />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
