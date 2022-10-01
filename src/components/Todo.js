import React from "react";



function Todo({todo, onDelete}) {


    return (
        <div className='col-md-3 mb-3'>
            <div className={todo.color}>
                <div className='card-header'>
                    <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => onDelete(todo.id)}></button>
                    <h5>{todo.title}</h5>
                </div>
                <div className='card-body '>
                    <p className='text-end fw-bold'>{todo.date}</p>
                    <p className='card-text'>{todo.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Todo;