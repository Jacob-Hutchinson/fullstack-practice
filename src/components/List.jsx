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
                <h2>Name- {el.name} <br />Age- {el.age} <br />Job- {el.job} <br />Favorite color- {el.color}</h2>
                <button value={el.id} onClick={handleDelete}>delete</button>
                <br />
                <br />
            </div>
        })}
    </div>
  )
}
