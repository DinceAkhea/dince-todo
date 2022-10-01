import React from "react";


function Header({addTodo, showForm}) {
    return(
        <div className='contianer-fluid row'>
            <div className='col-md-9'>
                <h1 className='text-center mt-1'>Todo List</h1>
            </div>
            <div className='col-md-3'>
                <button className='btn btn-success mt-2' onClick={addTodo}>{showForm ? 'Close':'Add'}</button>
            </div>
        </div>
    )
}

export default Header