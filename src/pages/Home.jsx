import React from 'react'
import List from "../components/todos/List"
import Form from "../components/todos/Form"
import Header from "../components/ui/Header"

const Home = () => {
  return (
    <div>
        <Header />
        <Form />
        <List />
    </div>
  )
}

export default Home