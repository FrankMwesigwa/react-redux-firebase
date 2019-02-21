import React from 'react'

const Todos = ({todos , deleteTodo}) => {

    const todosList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="todo-list" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)} }>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You dont have any todos on your list</p>
    )
    return(
        <div className="todos">
            {todosList}
        </div>

    )
}

export default Todos;