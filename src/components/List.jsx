import React from 'react'
import axios from 'axios'

export const List = ({list, setList}) => {
    const handleDelete = e => {
        console.log(e.target.value)
        const id =e.target.value
        axios.delete(`http://localhost:4004/person/${id}`)
        .then(res => {
            setList(res.data)
        })
    }
  return (
    <div>
        {list && list.map((el) => {
            return <div>
                <h2>{el.name}</h2>
                <h2>{el.age}</h2>
                <h2>{el.job}</h2>
                <h2>{el.color}</h2>
                <button value={el.id} onClick={handleDelete}>delete</button>
            </div>
        })}
    </div>
  )
}
