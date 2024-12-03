import React from 'react'

const TeamCard = ({imgUrl, username,link}) => {

   const styles={
        card: {
            width: '200px',
            height: '300px',
            border: '2px solid orange',
            margin: '10px',
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: 'teal'

        },
        img: {
            width: '100px',
            height: '50%',
            borderRadius: '10px',
            margin: '10px'
        }
    }
  return (
    <div style={styles.card}>
    <img  style={styles.img}src={imgUrl || "https://avatars.githubusercontent.com/u/34?v=4" }alt={`${username} profile picture`} />

    <h3> Username :{ username|| "username"}</h3>

    <p>
        <a href={link}>Git Hub Link</a></p>
        
    </div>
  )
}

export default TeamCard