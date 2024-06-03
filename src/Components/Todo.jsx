import React, { Fragment, useState } from 'react'
import { useTodos } from '../context'
import { useNavigate } from 'react-router-dom'

const Todo = () => {
        
        const [toDos, setTodos] = useTodos()
        const [toDo, setTodo] = useState("")

        const navigate = useNavigate()
        
        const handleTodoUpdate = () => {
                if (toDo == "") return;
                setTodos([...toDos, { text: toDo, time: new Date().toLocaleString("en-IN") }])
                setTodo("")
        }
1
        const handleTodoRemove = (deleteIndex) => { 1 , 0
                const res = toDos.filter((element, index) => {
                        if (deleteIndex != index) {
                                return element
                        }
                })
                setTodos(res)
        }

        return (
                <Fragment>
                         <div>
                                <input type='text' placeholder='Enter Task' value={toDo} onChange={(e) => setTodo(e.target.value)} />
                                <button onClick={handleTodoUpdate}>Add List</button>
                        </div> 
                        <div>
                                {
                                        toDos.map((element, index) => {
                                                return (
                                                        <div key={index}>
                                                                {element.text} {element.time}
                                                                <button onClick={() => handleTodoRemove(index)}>Remove</button>
                                                                <button onClick={() => navigate("/edit/"+index)}>Edit</button>
                                                        </div>
                                                )
                                        })
                                }
                        </div>
               </Fragment>
        )
}

export default Todo
