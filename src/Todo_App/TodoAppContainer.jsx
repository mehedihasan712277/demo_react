import React from 'react'
import Body from './Body'
import TaskList from './TaskList'
import BasicTabs from './Tab'

const TodoAppContainer = () => {
    return (
        <div className='w-fit p-4 mx-auto bg-slate-300'>
            <Body></Body>
            <BasicTabs></BasicTabs>
        </div>
    )
}

export default TodoAppContainer