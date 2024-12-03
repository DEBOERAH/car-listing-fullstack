import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PageNotfound = () => {
  
    const Styles={
        Container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        },
        img: {
            width: '100px',
            height: '50%',
            borderRadius: '10px',
            margin: '10px'
        },
        btn: {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '5px',
            backgroundColor: 'green'
        }

    }
  return (
    <div className='container mt-5'>
        <h1>Page not found</h1>
        <img 
        src="https://media.gettyimages.com/id/1290734777/vector/404-error-page-vector-design.jpg?s=612x612&w=gi&k=20&c=gtbmbwYpbOa_6OnqJKvXy30BkClUXVlGnCkzN5qMEX4=" alt="" />

        <Link to="/" >Go Home</Link>



    </div>
  )
}

export default PageNotfound