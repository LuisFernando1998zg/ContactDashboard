import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Form } from '../../components/Form/Form'

const Home = () => {

  const getUser = ()=>{
    fetch('https://reqres.in/api/users')
    .then((response)=> console.log(response))
    .catch((response)=>console.log('error', response))
  }
  return (
    <>
    
    Home

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam praesentium cumque laudantium ut voluptas accusamus maxime corporis, eveniet sed porro vel saepe natus quis beatae dolores distinctio impedit vero!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam praesentium cumque laudantium ut voluptas accusamus maxime corporis, eveniet sed porro vel saepe natus quis beatae dolores distinctio impedit vero!</p>
    
    <var><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam praesentium cumque laudantium ut voluptas accusamus maxime corporis, eveniet sed porro vel saepe natus quis beatae dolores distinctio impedit vero!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam praesentium cumque laudantium ut voluptas accusamus maxime corporis, eveniet sed porro vel saepe natus quis beatae dolores distinctio impedit vero!</p>
    </var>

    <button onClick={getUser}>GetUser</button>
    
    </>
  )
}

export default Home