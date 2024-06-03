import React, { useState } from 'react'
import { useTodos } from '../context'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

        const [toDos, setTodos] = useTodos()
        const { editIndex } = useParams() 
        const [editTodo, setEditTodo] = useState(toDos[editIndex].text)

        const navigate = useNavigate()

        const handleUpdateTodo = () => {
                if (editTodo == "") return;
                toDos[editIndex]["text"] = editTodo
                setTodos(toDos)
                navigate("/")
        }

        return (
                <div>
                        <input type='text' placeholder='Edit Task' onChange={(e) => setEditTodo(e.target.value)} value={editTodo} />
                        <button onClick={handleUpdateTodo}>Update</button>
                </div>
        )
}

export default Edit
