import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { List } from './List'
import { useEffect } from 'react'

export const Form = () => {
    const [formData, setFormData] = useState({})
    const [list, setList] = useState()
    const [inputReset, setInputReset] = useState()

    useEffect(() => {
        axios.get(`http://localhost:4004/person`)
        .then(res => {
            setList(res.data)
        })
    }, [formData])

    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target[0].value
        const age = e.target[1].value
        const job = e.target[2].value
        const color = e.target[3].value
        setFormData({name, age, job, color})
        axios.post(`http://localhost:4004/person`, {name, age, job, color})
        .then(res => {
            console.log(res)
            setList()
            setList(res.data)
        })
    }
  return (
    <div>
        <form action="" typeof='submit' onSubmit={handleSubmit}>
            <input type="text" placeholder='name' id='name'/> <br />
            <input type="text" placeholder='age' id='age'/> <br />
            <input type="text" placeholder='job' id='job'/> <br />
            <input type="text" placeholder='favorite color' id='favorite'/> <br />
            <input type="submit" />
        </form>
        <List list={list} setList={setList}/>
    </div>
  )
}
