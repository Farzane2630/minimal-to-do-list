import React, { useEffect, useState } from 'react'
import './App.css'
import Todo from './Todo'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './Redux/todo'
import { v4 as uuidv4 } from 'uuid';

export default function App() {

  const [inputValue, setInputValue] = useState("")

  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()


  const generateTodo = (e) => {
    setInputValue(e.target.value)
  }

  const addTodoHandler = () => {
    dispatch(addTodo({ id: uuidv4(), task: inputValue, status: 'UNCOMPLETED' }))

    setInputValue("")
  }

  const keyDown = e => {
    console.log(e);
    e.code === "Enter" && addTodoHandler()
  }

  const deleteTask = (todoID) => {
    dispatch(removeTodo(todoID))
  }

  return (
    <div className='bg-slate-500 width-100 h-screen'
    >
      <div className="bg-[url('/src/assets/hero.jpg')] h-1/4">
        <h1 className='text-center text-slate-800 leading-10 text-5xl py-10 font-bold'>To-do List</h1>
      </div>
      <div className="todos shadow-lg shadow-gray-700 rounded-none bg-white w-1/2 -mt-8 mx-auto py-6" onKeyDown={keyDown}>
        <div className="todo-generator flex flex-row items-center justify-center">
          <input type="text" className="border-0 rounded-full bg-[#323934] text-white h-10 w-1/2 px-5" onChange={generateTodo} />
          <button className="add-todo" onClick={addTodoHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="#464444"
              stroke="#464444"
              version="1.1"
              viewBox="-9 -9 68 68"
              xmlSpace="preserve"
            >
              <g>
                <circle cx="25" cy="25" r="25" fill="#323934"></circle>
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3.9"
                  d="M25 13L25 38"
                ></path>
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3.9"
                  d="M37.5 25L12.5 25"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <hr />
        <br />
        {
          todos.length > 0 ? (
            todos.map(todo => (
              <Todo
                value={todo.task}
                status={todo.status}
                key={todo.id}
                deleteTaskHandler={() => deleteTask(todo.id)}
                changeStatus={() => changeStatus(todo.id)}
              />
            ))
          ) : ""
        }
      </div>
    </div>
  )
}


