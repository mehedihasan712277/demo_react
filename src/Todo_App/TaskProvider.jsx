import React, { createContext, useState } from 'react'

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [data, setData] = useState([])

    const handleAddTask = (task) => {
        setData((prev) => {
            let newTask = {
                id: Math.random(),
                task: task,
                isCompleted: false,
            }
            return [newTask, ...prev]
        })
    }
    const handleDelete = (id) => {
        const tasks = data.filter(ele => ele.id !== id)
        setData(tasks);
    }
    const toggleState = (id) => {
        setData(prev => prev.map(ele => ele.id === id ? { ...ele, isCompleted: !ele.isCompleted } : ele))
    }

    return (
        <TaskContext.Provider value={{ handleAddTask, data, handleDelete, toggleState }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider