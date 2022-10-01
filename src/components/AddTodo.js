import React, { useState } from "react";


function AddTodo({onAdd}) {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        if(!title || !desc || !date){
            alert('Invalid input')
        }
        else{
            onAdd(title, desc, date)
            setTitle('')
            setDesc('')
            setDate('')
        }
    }
    return (
        <div className='container-fluid p-3'>
            <form className='row g-3 me-5 ms-5 mb-5' onSubmit={onSubmit} method="POST">
                <div className='col-md-12 d-flex block ms-5'>
                    <label htmlFor="title" className="form-label fs-3 me-5">Title</label>
                    <input type='text' className='form-control w-75' id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className='col-md-12 ms-5'>
                    <label htmlFor="description" className="form-label fs-3 me-5">Description</label>
                    <textarea id='description' className='form-control w-75' rows="3" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
                <div className='col-md-3 ms-5'>
                    <label htmlFor="date" className="form-label fs-3 me-5">Date</label>
                    <input type='date' className='form-control' id='date' value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div className='col-md-12'>
                    <button className='btn btn-primary float-end'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo