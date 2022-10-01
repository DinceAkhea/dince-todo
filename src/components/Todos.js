import React from "react";
import Todo from "./Todo";

function Todos({todos, onDelete, bg_color}) {

    return (
        <div className="row">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onDelete={onDelete} bg_color={bg_color}/>
            ))}
        </div>
    )
}

export default Todos